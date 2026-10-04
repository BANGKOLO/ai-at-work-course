/* AI at Work / L'IA au travail — static lesson site
   No build step at runtime. No data is ever sent anywhere; all progress lives in localStorage.
   Unit content and quizzes are embedded in content-data.js / quiz-data.js (generated from
   content/*.md and quizzes/*.json by scripts/generate-site-data.js) rather than fetched, so the
   site works when index.html is opened directly from disk — browsers block fetch() of local
   files opened via file://, but plain <script src> files load fine. */

(function () {
  "use strict";

  var UNITS = [
    { id: "unit-01", titleEn: "Understanding generative AI", titleFr: "Comprendre l'IA générative", durationEn: "25 minutes", durationFr: "25 minutes" },
    { id: "unit-02", titleEn: "The structured prompt", titleFr: "Le prompt structuré", durationEn: "30 minutes", durationFr: "30 minutes" },
    { id: "unit-03", titleEn: "Confidentiality and compliance", titleFr: "Confidentialité et conformité", durationEn: "25 minutes", durationFr: "25 minutes" },
    { id: "unit-04", titleEn: "Picking the right AI tool for the job", titleFr: "Choisir le bon outil d'IA pour la tâche", durationEn: "20 minutes", durationFr: "20 minutes" },
    { id: "unit-05", titleEn: "Writing clear messages and emails", titleFr: "Rédiger des messages et emails clairs", durationEn: "20 minutes", durationFr: "20 minutes" },
    { id: "unit-06", titleEn: "Summarising a meeting", titleFr: "Résumer une réunion", durationEn: "20 minutes", durationFr: "20 minutes" },
    { id: "unit-07", titleEn: "Turning data into a report", titleFr: "Transformer des données en rapport", durationEn: "20 minutes", durationFr: "20 minutes" },
    { id: "unit-08", titleEn: "Translation with context", titleFr: "Traduction avec contexte", durationEn: "20 minutes", durationFr: "20 minutes" },
    { id: "unit-09", titleEn: "Preparing for an important conversation", titleFr: "Se préparer à une conversation importante", durationEn: "20 minutes", durationFr: "20 minutes" },
    { id: "unit-10", titleEn: "Planning your day and week", titleFr: "Planifier sa journée et sa semaine", durationEn: "15 minutes", durationFr: "15 minutes" },
    { id: "unit-11", titleEn: "Research and fact-finding with AI", titleFr: "Recherche et vérification des faits avec l'IA", durationEn: "20 minutes", durationFr: "20 minutes" },
    { id: "unit-12", titleEn: "Working with text and chat assistants", titleFr: "Travailler avec les assistants conversationnels", durationEn: "20 minutes", durationFr: "20 minutes" },
    { id: "unit-13", titleEn: "Working with AI image tools", titleFr: "Travailler avec les outils d'IA image", durationEn: "20 minutes", durationFr: "20 minutes" },
    { id: "unit-14", titleEn: "AI in spreadsheets and data", titleFr: "L'IA dans les tableurs et les données", durationEn: "20 minutes", durationFr: "20 minutes" },
    { id: "unit-15", titleEn: "Meeting and voice transcription AI", titleFr: "L'IA de transcription de réunions et de voix", durationEn: "15 minutes", durationFr: "15 minutes" },
    { id: "unit-16", titleEn: "Building simple AI automations", titleFr: "Créer des automatisations simples avec l'IA", durationEn: "20 minutes", durationFr: "20 minutes" },
    { id: "unit-17", titleEn: "Verify before you send", titleFr: "Vérifier avant de diffuser", durationEn: "25 minutes", durationFr: "25 minutes" },
    { id: "unit-18", titleEn: "Recognising and reducing bias in AI output", titleFr: "Reconnaître et réduire les biais de l'IA", durationEn: "20 minutes", durationFr: "20 minutes" },
    { id: "unit-19", titleEn: "When not to use AI", titleFr: "Quand ne pas utiliser l'IA", durationEn: "15 minutes", durationFr: "15 minutes" },
    { id: "unit-20", titleEn: "AI in meetings and team collaboration", titleFr: "L'IA dans les réunions et la collaboration d'équipe", durationEn: "20 minutes", durationFr: "20 minutes" },
    { id: "unit-21", titleEn: "AI for people-manager tasks", titleFr: "L'IA pour les tâches de management", durationEn: "20 minutes", durationFr: "20 minutes" },
    { id: "unit-22", titleEn: "AI for customer-facing and support work", titleFr: "L'IA pour le travail en contact avec la clientèle", durationEn: "20 minutes", durationFr: "20 minutes" },
    { id: "unit-23", titleEn: "AI for your own learning and development", titleFr: "L'IA pour votre propre développement", durationEn: "15 minutes", durationFr: "15 minutes" },
    { id: "unit-24", titleEn: "Five tested prompts", titleFr: "Cinq prompts testés", durationEn: "20 minutes", durationFr: "20 minutes" },
    { id: "unit-25", titleEn: "Your personal data-rule sheet", titleFr: "Votre fiche personnelle de règles de données", durationEn: "15 minutes", durationFr: "15 minutes" },
    { id: "unit-26", titleEn: "Your 30-day plan with a measurable goal", titleFr: "Votre plan à 30 jours avec un objectif mesurable", durationEn: "20 minutes", durationFr: "20 minutes" },
    { id: "unit-27", titleEn: "Measuring your progress", titleFr: "Mesurer vos progrès", durationEn: "15 minutes", durationFr: "15 minutes" },
    { id: "unit-28", titleEn: "Live workshop and course wrap-up", titleFr: "Atelier en direct et conclusion du cours", durationEn: "90 minutes", durationFr: "90 minutes" }
  ];

  // Content-only pages (no quiz) — see content/plans.md and scripts/generate-site-data.js.
  var INFO_PAGES = [
    { id: "plans",
      titleEn: "Pacing plans in detail", titleFr: "Détail des formules de rythme",
      descEn: "Full day-by-day schedules, advantages, and audience for each plan", descFr: "Calendriers détaillés, avantages et public pour chaque formule" }
  ];

  // Pace cards shown at the top of the home screen, and used by the optional baseline follow-up.
  // Full plan details live in content/plans.md, rendered via INFO_PAGES above.
  var PACE_PLANS = [
    { id: "A", labelEn: "Plan A — 7-Day Sprint", labelFr: "Formule A — Sprint de 7 jours",
      shortEn: "7-Day Sprint", shortFr: "Sprint 7 jours",
      descEn: "Move fast, no live workshop", descFr: "Aller vite, sans atelier en direct",
      price: "2,000 FCFA" },
    { id: "B", labelEn: "Plan B — 14-Day Standard", labelFr: "Formule B — Standard de 14 jours",
      shortEn: "14-Day Standard", shortFr: "Standard 14 jours",
      descEn: "Steady, around your workload", descFr: "À votre rythme, selon votre charge",
      price: "3,500 FCFA" },
    { id: "C", labelEn: "Plan C — 28-Day Complete", labelFr: "Formule C — Complète de 28 jours",
      shortEn: "28-Day Complete", shortFr: "Complète 28 jours",
      descEn: "Full pace with the live workshop", descFr: "Rythme complet avec l'atelier en direct",
      price: "5,000 FCFA" }
  ];

  var PASS_RATIO = 0.8; // 80% per-unit quiz pass mark, see content/assessment.md
  var MAX_LINES_PER_SCREEN = 8;

  var STRINGS = {
    en: {
      siteTitle: "AI at Work",
      heroEyebrow: "28 lessons · EN/FR · mobile-first",
      heroTagline: "Practical AI skills for anyone who uses a computer at work.",
      footerNote: "Progress is stored only in this browser. Nothing is sent anywhere.",
      units: "Units",
      notStarted: "Not started",
      inProgress: "In progress",
      completed: "Completed",
      quizNotAttempted: "Quiz: not attempted",
      quizPassed: "Quiz: {score}/{total} ✓ Passed",
      quizFailed: "Quiz: {score}/{total} — Try again",
      openUnit: "Open unit",
      back: "Back",
      next: "Next",
      previous: "Previous",
      takeQuiz: "Take the quiz",
      screenOf: "Screen {current} of {total}",
      quizTitle: "Quiz",
      submit: "Submit answers",
      retry: "Retry quiz",
      backToUnit: "Back to unit",
      passBanner: "Passed — {score}/{total} ({pct}%)",
      failBanner: "Not yet — {score}/{total} ({pct}%). Pass mark is 80%.",
      selectAllWarning: "Please answer every question before submitting.",
      loadError: "Could not load this unit's content. Try reloading the page; if the problem continues, the site files may need to be regenerated (see scripts/generate-site-data.js).",
      findYourPlan: "Find your plan",
      choosePaceLabel: "Choose your pace",
      freeLabel: "FREE",
      freeBannerText: "Free access during launch — standard prices shown apply later.",
      yourBaselineLabel: "Your baseline: {text}",
      diagnosticQ2Title: "Optional: pick one task you do often, and how long it typically takes you today",
      diagnosticQ2Placeholder: "e.g. Monthly report: about 3 hours",
      diagnosticSave: "Save and see my plan",
      diagnosticSkip: "Skip this question",
      diagnosticResultTitle: "Recommended for you",
      diagnosticResultBody: "Based on your answer, we recommend:",
      diagnosticBaselineSaved: "Baseline saved: {text}",
      viewPlanDetails: "View plan details",
      backToHome: "Back to home"
    },
    fr: {
      siteTitle: "L'IA au travail",
      heroEyebrow: "28 leçons · EN/FR · pensé pour mobile",
      heroTagline: "Des compétences IA pratiques pour toute personne qui utilise un ordinateur au travail.",
      footerNote: "La progression est enregistrée uniquement dans ce navigateur. Rien n'est envoyé ailleurs.",
      units: "Unités",
      notStarted: "Non commencé",
      inProgress: "En cours",
      completed: "Terminé",
      quizNotAttempted: "Quiz : non tenté",
      quizPassed: "Quiz : {score}/{total} ✓ Réussi",
      quizFailed: "Quiz : {score}/{total} — Réessayer",
      openUnit: "Ouvrir l'unité",
      back: "Retour",
      next: "Suivant",
      previous: "Précédent",
      takeQuiz: "Faire le quiz",
      screenOf: "Écran {current} sur {total}",
      quizTitle: "Quiz",
      submit: "Valider les réponses",
      retry: "Refaire le quiz",
      backToUnit: "Retour à l'unité",
      passBanner: "Réussi — {score}/{total} ({pct} %)",
      failBanner: "Pas encore — {score}/{total} ({pct} %). La note de passage est 80 %.",
      selectAllWarning: "Veuillez répondre à toutes les questions avant de valider.",
      loadError: "Impossible de charger le contenu de cette unité. Essayez de recharger la page ; si le problème persiste, les fichiers du site doivent peut-être être régénérés (voir scripts/generate-site-data.js).",
      findYourPlan: "Trouver ma formule",
      choosePaceLabel: "Choisissez votre rythme",
      freeLabel: "GRATUIT",
      freeBannerText: "Accès gratuit pendant le lancement — les prix standards indiqués s'appliqueront plus tard.",
      yourBaselineLabel: "Votre situation de départ : {text}",
      diagnosticQ2Title: "Optionnel : choisissez une tâche que vous faites souvent, et le temps qu'elle vous prend habituellement aujourd'hui",
      diagnosticQ2Placeholder: "ex. : Rapport mensuel : environ 3 heures",
      diagnosticSave: "Enregistrer et voir ma formule",
      diagnosticSkip: "Passer cette question",
      diagnosticResultTitle: "Recommandée pour vous",
      diagnosticResultBody: "D'après votre réponse, nous recommandons :",
      diagnosticBaselineSaved: "Situation de départ enregistrée : {text}",
      viewPlanDetails: "Voir les détails de la formule",
      backToHome: "Retour à l'accueil"
    }
  };

  // ---------- storage helpers (local only, never sent anywhere) ----------

  function safeGet(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }
  function safeSet(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { /* storage unavailable, degrade silently */ }
  }

  function getLang() {
    return safeGet("aiw_lang") === "fr" ? "fr" : "en";
  }
  function setLang(lang) {
    safeSet("aiw_lang", lang);
  }

  function getProgress() {
    try { return JSON.parse(safeGet("aiw_progress") || "{}"); }
    catch (e) { return {}; }
  }
  function saveProgress(progress) {
    safeSet("aiw_progress", JSON.stringify(progress));
  }
  function markUnitOpened(unitId) {
    var p = getProgress();
    p[unitId] = p[unitId] || {};
    p[unitId].opened = true;
    saveProgress(p);
  }
  function markUnitRead(unitId) {
    var p = getProgress();
    p[unitId] = p[unitId] || {};
    p[unitId].opened = true;
    p[unitId].read = true;
    saveProgress(p);
  }
  function saveQuizResult(unitId, score, total) {
    var p = getProgress();
    p[unitId] = p[unitId] || {};
    p[unitId].quizScore = score;
    p[unitId].quizTotal = total;
    p[unitId].quizPassed = (score / total) >= PASS_RATIO;
    saveProgress(p);
  }

  function getDiagnostic() {
    try { return JSON.parse(safeGet("aiw_diagnostic") || "{}"); }
    catch (e) { return {}; }
  }
  function saveDiagnostic(data) {
    safeSet("aiw_diagnostic", JSON.stringify(data));
  }

  function fmt(str, vars) {
    return str.replace(/\{(\w+)\}/g, function (_, k) { return vars[k] != null ? vars[k] : ""; });
  }

  // ---------- tiny local Markdown -> HTML parser ----------
  // Supports: # headings, blockquotes, numbered/bulleted lists, tables, hr, bold/italic/links/code, paragraphs.

  function escapeHtml(text) {
    return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function inlineMd(text) {
    text = escapeHtml(text);
    text = text.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    text = text.replace(/\*(.+?)\*/g, "<em>$1</em>");
    text = text.replace(/`(.+?)`/g, "<code>$1</code>");
    text = text.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
    return text;
  }

  function mdToHtml(md) {
    var lines = md.replace(/\r\n/g, "\n").split("\n");
    var html = "";
    var i = 0;
    var n = lines.length;

    function isHeading(l) { return /^#{1,4}\s/.test(l); }
    function isHr(l) { return /^-{3,}\s*$/.test(l); }
    function isQuote(l) { return /^>\s?/.test(l); }
    function isTableRow(l) { return /^\s*\|.*\|\s*$/.test(l); }
    function isTableSep(l) { return /^\s*\|?[\s:|-]+\|?\s*$/.test(l) && /-/.test(l); }
    function isOl(l) { return /^\d+\.\s+/.test(l); }
    function isUl(l) { return /^-\s+/.test(l); }

    while (i < n) {
      var line = lines[i];

      if (!line.trim()) { i++; continue; }

      if (isHeading(line)) {
        var level = line.match(/^#+/)[0].length;
        level = Math.min(level, 4);
        html += "<h" + level + ">" + inlineMd(line.replace(/^#{1,4}\s+/, "")) + "</h" + level + ">";
        i++; continue;
      }

      if (isHr(line)) { html += "<hr>"; i++; continue; }

      if (isQuote(line)) {
        var qbuf = [];
        while (i < n && isQuote(lines[i])) {
          qbuf.push(inlineMd(lines[i].replace(/^>\s?/, "")));
          i++;
        }
        html += "<blockquote>" + qbuf.join("<br>") + "</blockquote>";
        continue;
      }

      if (isTableRow(line)) {
        var rows = [];
        while (i < n && isTableRow(lines[i])) { rows.push(lines[i]); i++; }
        rows = rows.filter(function (r) { return !isTableSep(r); });
        var tbl = "<table>";
        rows.forEach(function (r, idx) {
          var cells = r.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")
            .map(function (c) { return inlineMd(c.trim()); });
          var tag = idx === 0 ? "th" : "td";
          tbl += "<tr>" + cells.map(function (c) { return "<" + tag + ">" + c + "</" + tag + ">"; }).join("") + "</tr>";
        });
        tbl += "</table>";
        html += tbl;
        continue;
      }

      if (isOl(line)) {
        var obuf = [];
        while (i < n && isOl(lines[i])) { obuf.push(inlineMd(lines[i].replace(/^\d+\.\s+/, ""))); i++; }
        html += "<ol>" + obuf.map(function (it) { return "<li>" + it + "</li>"; }).join("") + "</ol>";
        continue;
      }

      if (isUl(line)) {
        var ubuf = [];
        while (i < n && isUl(lines[i])) { ubuf.push(inlineMd(lines[i].replace(/^-\s+/, ""))); i++; }
        html += "<ul>" + ubuf.map(function (it) { return "<li>" + it + "</li>"; }).join("") + "</ul>";
        continue;
      }

      // paragraph: gather consecutive plain lines
      var pbuf = [line];
      i++;
      while (i < n && lines[i].trim() && !isHeading(lines[i]) && !isHr(lines[i]) &&
        !isQuote(lines[i]) && !isTableRow(lines[i]) && !isOl(lines[i]) && !isUl(lines[i])) {
        pbuf.push(lines[i]);
        i++;
      }
      html += "<p>" + pbuf.map(inlineMd).join("<br>") + "</p>";
    }
    return html;
  }

  function splitLangSections(raw) {
    var enIdx = raw.indexOf("## English");
    var frIdx = raw.indexOf("## Français");
    var en = enIdx >= 0 ? raw.slice(enIdx, frIdx >= 0 ? frIdx : undefined) : raw;
    var fr = frIdx >= 0 ? raw.slice(frIdx) : raw;
    // drop the leading "## English" / "## Français" marker line itself
    en = en.replace(/^## English\s*\n/, "");
    fr = fr.replace(/^## Français\s*\n/, "");
    // drop a trailing hr left over from the EN section
    en = en.replace(/\n-{3,}\s*$/, "");
    return { en: en.trim(), fr: fr.trim() };
  }

  // ---------- pagination into <=8-line screens ----------

  function estimateLines(el) {
    var tag = el.tagName;
    if (tag === "UL" || tag === "OL") return el.children.length;
    if (tag === "TABLE") return el.querySelectorAll("tr").length;
    if (tag === "BLOCKQUOTE" || tag === "P") {
      var brCount = (el.innerHTML.match(/<br>/g) || []).length;
      return brCount + 1;
    }
    return 1;
  }

  function htmlToBlocks(html) {
    var wrapper = document.createElement("div");
    wrapper.innerHTML = html;
    return Array.prototype.slice.call(wrapper.children);
  }

  function paginateBlocks(blocks) {
    var screens = [];
    var current = [];
    var lines = 0;
    blocks.forEach(function (b) {
      var l = estimateLines(b);
      if (lines + l > MAX_LINES_PER_SCREEN && current.length) {
        screens.push(current);
        current = [];
        lines = 0;
      }
      current.push(b);
      lines += l;
    });
    if (current.length) screens.push(current);
    if (!screens.length) screens.push([]);
    return screens;
  }

  // ---------- app state ----------

  var state = {
    lang: getLang(),
    view: "home", // home | unit | quiz
    unitId: null,
    screens: [],
    screenIndex: 0,
    quizData: null,
    quizAnswers: {},
    quizSubmitted: false
  };

  var app = document.getElementById("app");
  var langToggle = document.getElementById("langToggle");
  var homeBtn = document.getElementById("homeBtn");
  var siteTitleEl = document.getElementById("siteTitle");
  var footerNoteEl = document.getElementById("footerNote");

  function t(key, vars) {
    var str = STRINGS[state.lang][key] || key;
    return vars ? fmt(str, vars) : str;
  }

  function applyChrome() {
    document.documentElement.lang = state.lang;
    langToggle.textContent = state.lang === "en" ? "FR" : "EN";
    siteTitleEl.textContent = t("siteTitle");
    footerNoteEl.textContent = t("footerNote");
  }

  function unitTitle(u) { return state.lang === "en" ? u.titleEn : u.titleFr; }
  function unitDuration(u) { return state.lang === "en" ? u.durationEn : u.durationFr; }

  // ---------- renderers ----------

  function renderHome() {
    state.view = "home";
    applyChrome();
    var progress = getProgress();
    var diagnostic = getDiagnostic();
    var html = "";

    html += '<div class="hero">' +
      '<span class="hero-eyebrow">' + t("heroEyebrow") + "</span>" +
      "<h2>" + t("siteTitle") + "</h2>" +
      "<p>" + t("heroTagline") + "</p>" +
      "</div>";

    // Pace choice sits at the very top of the home screen, directly tappable (no wizard to click through first).
    html += '<div class="pace-top">';
    html += '<p class="pace-top-label">' + t("choosePaceLabel") + "</p>";
    html += '<p class="free-banner-line">' + t("freeBannerText") + "</p>";
    html += '<div class="pace-row">';
    PACE_PLANS.forEach(function (p) {
      var selected = diagnostic.paceId === p.id;
      html += '<button class="pace-card' + (selected ? " selected" : "") + '" data-pace="' + p.id + '">' +
        '<span class="pace-card-row">' +
        "<strong>" + (state.lang === "en" ? p.shortEn : p.shortFr) + "</strong>" +
        '<span class="pace-card-price"><span class="price-was">' + p.price + '</span><span class="price-free">' + t("freeLabel") + "</span></span>" +
        "</span>" +
        '<span class="pace-card-desc">' + (state.lang === "en" ? p.descEn : p.descFr) + "</span>" +
        "</button>";
    });
    html += "</div>";
    if (diagnostic.baseline) {
      html += '<p class="small-note">' + t("yourBaselineLabel", { text: inlineMd(diagnostic.baseline) }) + "</p>";
    }
    html += '<button class="btn secondary" id="viewPlansBtn">' + t("viewPlanDetails") + "</button>";
    html += "</div>";

    html += '<h2 class="sr-title">' + t("units") + "</h2>";
    UNITS.forEach(function (u, idx) {
      var p = progress[u.id] || {};
      var statusLabel = p.read ? t("completed") : (p.opened ? t("inProgress") : t("notStarted"));
      var statusClass = p.read ? "done" : "";
      var quizLabel = (p.quizTotal != null)
        ? t(p.quizPassed ? "quizPassed" : "quizFailed", { score: p.quizScore, total: p.quizTotal })
        : t("quizNotAttempted");
      var quizClass = p.quizTotal != null ? (p.quizPassed ? "pass" : "fail") : "";
      html += '<button class="unit-card" data-unit="' + u.id + '">' +
        '<div class="unit-card-row">' +
        '<span class="step-badge">' + (idx + 1) + "</span>" +
        '<div class="unit-card-text">' +
        "<h3>" + inlineMd(unitTitle(u)) + "</h3>" +
        '<p class="unit-meta">' + inlineMd(unitDuration(u)) + "</p>" +
        '<span class="badge ' + statusClass + '">' + statusLabel + "</span> " +
        '<span class="badge ' + quizClass + '">' + quizLabel + "</span>" +
        "</div></div></button>";
    });

    INFO_PAGES.forEach(function (ip) {
      html += '<button class="unit-card info-card" data-unit="' + ip.id + '">' +
        "<h3>" + (state.lang === "en" ? ip.titleEn : ip.titleFr) + "</h3>" +
        '<p class="unit-meta">' + (state.lang === "en" ? ip.descEn : ip.descFr) + "</p>" +
        "</button>";
    });

    app.innerHTML = html;

    Array.prototype.forEach.call(app.querySelectorAll(".unit-card[data-unit]"), function (card) {
      card.addEventListener("click", function () {
        openUnit(card.getAttribute("data-unit"));
      });
    });
    Array.prototype.forEach.call(app.querySelectorAll(".pace-card"), function (card) {
      card.addEventListener("click", function () {
        openDiagnosticQ2(card.getAttribute("data-pace"));
      });
    });
    var viewPlansBtn = document.getElementById("viewPlansBtn");
    if (viewPlansBtn) viewPlansBtn.addEventListener("click", function () { openUnit("plans"); });
  }

  // ---------- optional baseline follow-up after tapping a pace card ----------

  function openDiagnosticQ2(paceId) {
    state.view = "diagnostic";
    applyChrome();
    var html = "<h2>" + t("findYourPlan") + "</h2>";
    html += '<p class="question">' + t("diagnosticQ2Title") + "</p>";
    html += '<input type="text" id="baselineInput" class="text-input" placeholder="' + t("diagnosticQ2Placeholder") + '">';
    html += '<button class="btn" id="saveDiagBtn">' + t("diagnosticSave") + "</button>";
    html += '<button class="btn secondary" id="skipDiagBtn">' + t("diagnosticSkip") + "</button>";
    html += '<button class="btn secondary" id="backHomeDiag">' + t("back") + "</button>";
    app.innerHTML = html;

    document.getElementById("saveDiagBtn").addEventListener("click", function () {
      var text = document.getElementById("baselineInput").value.trim();
      finishDiagnostic(paceId, text);
    });
    document.getElementById("skipDiagBtn").addEventListener("click", function () {
      finishDiagnostic(paceId, "");
    });
    document.getElementById("backHomeDiag").addEventListener("click", renderHome);
  }

  function finishDiagnostic(paceId, baseline) {
    saveDiagnostic({ paceId: paceId, baseline: baseline, savedAt: new Date().toISOString() });
    renderDiagnosticResult(paceId, baseline);
  }

  function renderDiagnosticResult(paceId, baseline) {
    state.view = "diagnostic";
    applyChrome();
    var plan = PACE_PLANS.filter(function (p) { return p.id === paceId; })[0];
    var planLabel = plan ? (state.lang === "en" ? plan.labelEn : plan.labelFr) : paceId;
    var html = '<div class="result-banner pass">' + t("diagnosticResultTitle") + "</div>";
    html += "<p>" + t("diagnosticResultBody") + "</p>";
    html += '<p class="question">' + inlineMd(planLabel) + "</p>";
    if (baseline) html += '<p class="small-note">' + t("diagnosticBaselineSaved", { text: inlineMd(baseline) }) + "</p>";
    html += '<div class="btn-row">' +
      '<button class="btn" id="viewPlansBtn2">' + t("viewPlanDetails") + "</button>" +
      '<button class="btn secondary" id="backHomeDiag2">' + t("backToHome") + "</button>" +
      "</div>";
    app.innerHTML = html;

    document.getElementById("viewPlansBtn2").addEventListener("click", function () { openUnit("plans"); });
    document.getElementById("backHomeDiag2").addEventListener("click", renderHome);
  }

  function openUnit(unitId) {
    var raw = window.AIW_CONTENT && window.AIW_CONTENT[unitId];
    if (!raw) {
      app.innerHTML = '<div class="card"><p>' + t("loadError") + "</p>" +
        '<button class="btn secondary" id="backHomeErr">' + t("back") + "</button></div>";
      document.getElementById("backHomeErr").addEventListener("click", renderHome);
      return;
    }
    markUnitOpened(unitId);
    var sections = splitLangSections(raw);
    var mdForLang = state.lang === "en" ? sections.en : sections.fr;
    var html = mdToHtml(mdForLang);
    var blocks = htmlToBlocks(html);
    state.view = "unit";
    state.unitId = unitId;
    state.screens = paginateBlocks(blocks);
    state.screenIndex = 0;
    renderUnitScreen();
  }

  function renderUnitScreen() {
    applyChrome();
    var hasQuiz = !!(window.AIW_QUIZZES && window.AIW_QUIZZES[state.unitId]);
    var total = state.screens.length;
    var isLast = state.screenIndex === total - 1;
    var blockHtml = state.screens[state.screenIndex]
      .map(function (el) { return el.outerHTML; }).join("");

    var html = "";
    html += '<p class="progress-line">' + t("screenOf", { current: state.screenIndex + 1, total: total }) + "</p>";
    html += '<div class="screen-block">' + blockHtml + "</div>";

    html += '<div class="btn-row">';
    html += '<button class="btn secondary" id="prevBtn"' + (state.screenIndex === 0 ? " disabled" : "") + ">" + t("previous") + "</button>";
    if (!isLast) {
      html += '<button class="btn" id="nextBtn">' + t("next") + "</button>";
    } else if (hasQuiz) {
      html += '<button class="btn" id="quizBtn">' + t("takeQuiz") + "</button>";
    }
    html += "</div>";
    html += '<button class="btn secondary" id="backHomeBtn">' + t("back") + "</button>";

    app.innerHTML = html;

    var prevBtn = document.getElementById("prevBtn");
    if (prevBtn) prevBtn.addEventListener("click", function () {
      if (state.screenIndex > 0) { state.screenIndex--; renderUnitScreen(); window.scrollTo(0, 0); }
    });
    var nextBtn = document.getElementById("nextBtn");
    if (nextBtn) nextBtn.addEventListener("click", function () {
      state.screenIndex++;
      renderUnitScreen();
      window.scrollTo(0, 0);
    });
    var quizBtn = document.getElementById("quizBtn");
    if (quizBtn) quizBtn.addEventListener("click", function () {
      markUnitRead(state.unitId);
      openQuiz(state.unitId);
    });
    document.getElementById("backHomeBtn").addEventListener("click", renderHome);
  }

  function openQuiz(unitId) {
    var unit = UNITS.filter(function (u) { return u.id === unitId; })[0];
    var questions = window.AIW_QUIZZES && window.AIW_QUIZZES[unitId];
    if (!unit || !questions) {
      app.innerHTML = '<div class="card"><p>' + t("loadError") + "</p>" +
        '<button class="btn secondary" id="backHomeErr">' + t("back") + "</button></div>";
      document.getElementById("backHomeErr").addEventListener("click", renderHome);
      return;
    }
    state.view = "quiz";
    state.unitId = unitId;
    state.quizData = questions;
    state.quizAnswers = {};
    state.quizSubmitted = false;
    renderQuiz();
  }

  function renderQuiz() {
    applyChrome();
    var questions = state.quizData;
    var html = "";
    html += "<h2>" + t("quizTitle") + "</h2>";

    var score = 0;
    questions.forEach(function (q, qi) {
      var questionText = state.lang === "en" ? q.question_en : q.question_fr;
      var options = state.lang === "en" ? q.options_en : q.options_fr;
      var explanation = state.lang === "en" ? q.explanation_en : q.explanation_fr;
      var selected = state.quizAnswers[qi];
      var isCorrect = state.quizSubmitted && selected === q.answer_index;
      if (isCorrect) score++;

      html += '<div class="quiz-q">';
      html += '<p class="question">' + (qi + 1) + ". " + inlineMd(questionText) + "</p>";
      options.forEach(function (opt, oi) {
        var cls = "option";
        if (!state.quizSubmitted && selected === oi) cls += " selected";
        if (state.quizSubmitted) {
          if (oi === q.answer_index) cls += " correct";
          else if (oi === selected) cls += " incorrect";
        }
        html += '<button class="' + cls + '" data-q="' + qi + '" data-o="' + oi + '"' +
          (state.quizSubmitted ? " disabled" : "") + ">" + inlineMd(opt) + "</button>";
      });
      if (state.quizSubmitted) {
        html += '<p class="explanation">' + inlineMd(explanation) + "</p>";
      }
      html += "</div>";
    });

    if (state.quizSubmitted) {
      var total = questions.length;
      score = questions.reduce(function (acc, q, qi) {
        return acc + (state.quizAnswers[qi] === q.answer_index ? 1 : 0);
      }, 0);
      var pct = Math.round((score / total) * 100);
      var passed = (score / total) >= PASS_RATIO;
      var bannerHtml = passed
        ? t("passBanner", { score: score, total: total, pct: pct })
        : t("failBanner", { score: score, total: total, pct: pct });
      app.innerHTML = '<div class="result-banner ' + (passed ? "pass" : "fail") + '">' + bannerHtml + "</div>" + html +
        '<div class="btn-row">' +
        '<button class="btn secondary" id="retryBtn">' + t("retry") + "</button>" +
        '<button class="btn" id="backUnitBtn">' + t("backToUnit") + "</button>" +
        "</div>";
      saveQuizResult(state.unitId, score, total);

      document.getElementById("retryBtn").addEventListener("click", function () {
        openQuiz(state.unitId);
      });
      document.getElementById("backUnitBtn").addEventListener("click", renderHome);
    } else {
      html += '<p id="quizWarning" class="explanation" hidden>' + t("selectAllWarning") + "</p>";
      html += '<button class="btn" id="submitBtn">' + t("submit") + "</button>";
      html += '<button class="btn secondary" id="backHomeBtn2">' + t("back") + "</button>";
      app.innerHTML = html;

      Array.prototype.forEach.call(app.querySelectorAll(".option"), function (btn) {
        btn.addEventListener("click", function () {
          var qi = parseInt(btn.getAttribute("data-q"), 10);
          var oi = parseInt(btn.getAttribute("data-o"), 10);
          state.quizAnswers[qi] = oi;
          renderQuiz();
        });
      });
      document.getElementById("submitBtn").addEventListener("click", function () {
        if (Object.keys(state.quizAnswers).length < questions.length) {
          document.getElementById("quizWarning").hidden = false;
          return;
        }
        state.quizSubmitted = true;
        renderQuiz();
        window.scrollTo(0, 0);
      });
      document.getElementById("backHomeBtn2").addEventListener("click", renderHome);
    }
  }

  // ---------- chrome events ----------

  langToggle.addEventListener("click", function () {
    state.lang = state.lang === "en" ? "fr" : "en";
    setLang(state.lang);
    if (state.view === "home") renderHome();
    else if (state.view === "unit") openUnit(state.unitId);
    else if (state.view === "quiz") {
      // keep answers, just re-render in new language without losing progress
      renderQuiz();
    } else {
      // mid-diagnostic language switch: simplest safe behaviour is to restart at home
      renderHome();
    }
  });

  homeBtn.addEventListener("click", renderHome);

  // ---------- boot ----------

  applyChrome();
  renderHome();
})();
