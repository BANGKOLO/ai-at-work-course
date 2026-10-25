/**
 * AI for All: optional learner sign-up and progress, stored in a Google Sheet.
 *
 * Setup (once): open the Google Sheet, Extensions -> Apps Script, paste this whole file,
 * then Deploy -> New deployment -> type "Web app", Execute as "Me", Who has access "Anyone".
 * Copy the web-app URL (ends in /exec) into site/config.js as signupEndpoint.
 *
 * The course site sends three kinds of request, as JSON in a plain-text POST body:
 *   { action: "signup", id, name, email, whatsapp, lang, pace }
 *   { action: "update", id, lang, pace, passedCount, passedIds, lastLesson, certificate }
 *   { action: "delete", id }
 * One row per learner, keyed by a random id the learner's browser creates.
 */

var SHEET_NAME = "Learners";
var HEADERS = ["Learner ID", "Signed up", "Name", "Email", "WhatsApp", "Language", "Pace",
  "Lessons passed", "Passed lesson IDs", "Last lesson opened", "Last activity", "Certificate unlocked"];

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var data = JSON.parse(e.postData.contents);
    var id = String(data.id || "");
    if (!/^[A-Za-z0-9-]{8,64}$/.test(id)) return json_({ ok: false, error: "bad id" });

    var sheet = getSheet_();
    var row = findRow_(sheet, id);

    if (data.action === "delete") {
      if (row) sheet.deleteRow(row);
      return json_({ ok: true });
    }
    if (data.action === "signup") {
      var name = clean_(data.name, 80);
      var email = clean_(data.email, 120);
      var whatsapp = clean_(data.whatsapp, 40);
      if (!name || (!email && !whatsapp)) return json_({ ok: false, error: "missing fields" });
      var values = [id, row ? sheet.getRange(row, 2).getValue() : new Date(), name, email, whatsapp,
        clean_(data.lang, 5), clean_(data.pace, 5), 0, "", "", new Date(), "No"];
      if (row) sheet.getRange(row, 1, 1, HEADERS.length).setValues([values]);
      else sheet.appendRow(values);
      return json_({ ok: true });
    }
    if (data.action === "update") {
      if (!row) return json_({ ok: false, error: "not signed up" });
      sheet.getRange(row, 6, 1, 7).setValues([[
        clean_(data.lang, 5),
        clean_(data.pace, 5),
        Math.max(0, Math.min(99, Number(data.passedCount) || 0)),
        clean_((data.passedIds || []).join(", "), 600),
        clean_(data.lastLesson, 40),
        new Date(),
        data.certificate ? "Yes" : "No"
      ]]);
      return json_({ ok: true });
    }
    return json_({ ok: false, error: "unknown action" });
  } catch (err) {
    return json_({ ok: false, error: "server error" });
  } finally {
    lock.releaseLock();
  }
}

function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
  }
  return sheet;
}

function findRow_(sheet, id) {
  var last = sheet.getLastRow();
  if (last < 2) return 0;
  var ids = sheet.getRange(2, 1, last - 1, 1).getValues();
  for (var i = 0; i < ids.length; i++) if (ids[i][0] === id) return i + 2;
  return 0;
}

// Trims, limits length, and stops spreadsheet formulas being injected through the form.
function clean_(value, max) {
  var s = String(value == null ? "" : value).trim().slice(0, max);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
