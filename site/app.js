/* AI for All / L'IA pour tous — static lesson site
   No build step at runtime. No data is ever sent anywhere; all progress lives in localStorage.
   Lesson content and quizzes are embedded in content-data.js / quiz-data.js / tracks-data.js rather
   than fetched, so the site works when index.html is opened directly from disk — browsers block
   fetch() of local files opened via file://, but plain <script src> files load fine.
   Track lessons are built from content/tracks/*.md and quizzes/tracks/*.json by
   scripts/generate-tracks-data.js. Retired units are kept in archive/retired-units.json.

   Navigation uses the URL hash (#/lesson/claude-01/2, #/quiz/claude-01, ...) so the phone's Back
   button, refresh and shared links all behave as expected. */

(function () {
  "use strict";

  // Learning tracks shown as sections on the home screen. Foundations reuses five of the original units.
  var TRACKS = [
    { id: "foundations", titleEn: "Foundations", titleFr: "Fondamentaux",
      descEn: "New to AI? Start here. Already use it? Take each quiz directly to skip ahead.",
      descFr: "Débutant avec l'IA ? Commencez ici. Vous l'utilisez déjà ? Passez directement chaque quiz pour avancer." },
    { id: "claude", titleEn: "Claude in practice", titleFr: "Claude en pratique",
      descEn: "Setup, long documents, Projects, artifacts and files, research and connectors, thinking work.",
      descFr: "Configuration, documents longs, Projets, artefacts et fichiers, recherche et connecteurs, réflexion." },
    { id: "chatgpt", titleEn: "ChatGPT in practice", titleFr: "ChatGPT en pratique",
      descEn: "Setup, data analysis, Canvas, Projects and custom GPTs, deep research, voice and agent mode.",
      descFr: "Configuration, analyse de données, Canvas, Projets et GPT, recherche approfondie, voix et mode agent." },
    { id: "other", titleEn: "Other AI assistants", titleFr: "Les autres assistants IA",
      descEn: "Gemini, Meta AI in WhatsApp, Microsoft Copilot, and how to judge any new AI tool safely.",
      descFr: "Gemini, Meta AI dans WhatsApp, Microsoft Copilot, et comment juger sans risque tout nouvel outil d'IA." },
    { id: "work", titleEn: "Advanced daily workflows", titleFr: "Flux de travail avancés au quotidien",
      descEn: "Techniques and routines that work in either tool, ending with your playbook and a live workshop.",
      descFr: "Techniques et routines valables dans les deux outils, jusqu'à votre guide et un atelier en direct." }
  ];

  var UNITS = [
    { track: "foundations", id: "unit-01", titleEn: "Understanding generative AI", titleFr: "Comprendre l'IA générative", durationEn: "25 minutes", durationFr: "25 minutes" },
    { track: "foundations", id: "unit-02", titleEn: "The structured prompt", titleFr: "Le prompt structuré", durationEn: "30 minutes", durationFr: "30 minutes" },
    { track: "foundations", id: "unit-03", titleEn: "Confidentiality and compliance", titleFr: "Confidentialité et conformité", durationEn: "25 minutes", durationFr: "25 minutes" },
    { track: "foundations", id: "unit-17", titleEn: "Verify before you send", titleFr: "Vérifier avant de diffuser", durationEn: "25 minutes", durationFr: "25 minutes" },
    { track: "foundations", id: "unit-19", titleEn: "When not to use AI", titleFr: "Quand ne pas utiliser l'IA", durationEn: "15 minutes", durationFr: "15 minutes" },
    { track: "claude", id: "claude-01", titleEn: "Setting Claude up for real work", titleFr: "Configurer Claude pour le vrai travail", durationEn: "30 minutes", durationFr: "30 minutes" },
    { track: "claude", id: "claude-02", titleEn: "Long documents and files: getting answers you can trust", titleFr: "Documents longs et fichiers : obtenir des réponses fiables", durationEn: "35 minutes", durationFr: "35 minutes" },
    { track: "claude", id: "claude-03", titleEn: "Projects: build a reusable workspace for recurring work", titleFr: "Les Projets : un espace réutilisable pour le travail récurrent", durationEn: "35 minutes", durationFr: "35 minutes" },
    { track: "claude", id: "claude-04", titleEn: "Artifacts and file creation: from answer to finished deliverable", titleFr: "Artefacts et création de fichiers : de la réponse au livrable fini", durationEn: "30 minutes", durationFr: "30 minutes" },
    { track: "claude", id: "claude-05", titleEn: "Web search, Research and connectors", titleFr: "Recherche web, mode Research et connecteurs", durationEn: "30 minutes", durationFr: "30 minutes" },
    { track: "claude", id: "claude-06", titleEn: "Claude as a thinking partner", titleFr: "Claude comme partenaire de réflexion", durationEn: "30 minutes", durationFr: "30 minutes" },
    { track: "chatgpt", id: "chatgpt-01", titleEn: "Setting ChatGPT up for real work", titleFr: "Configurer ChatGPT pour le vrai travail", durationEn: "30 minutes", durationFr: "30 minutes" },
    { track: "chatgpt", id: "chatgpt-02", titleEn: "Data analysis: numbers you can defend", titleFr: "Analyse de données : des chiffres défendables", durationEn: "35 minutes", durationFr: "35 minutes" },
    { track: "chatgpt", id: "chatgpt-03", titleEn: "Canvas: drafting and editing documents together", titleFr: "Canvas : rédiger et réviser des documents à deux", durationEn: "25 minutes", durationFr: "25 minutes" },
    { track: "chatgpt", id: "chatgpt-04", titleEn: "Projects and custom GPTs: build your own assistants", titleFr: "Projets et GPT personnalisés : créer vos propres assistants", durationEn: "35 minutes", durationFr: "35 minutes" },
    { track: "chatgpt", id: "chatgpt-05", titleEn: "Search and deep research: briefings with sources", titleFr: "Recherche et recherche approfondie : des notes sourcées", durationEn: "30 minutes", durationFr: "30 minutes" },
    { track: "chatgpt", id: "chatgpt-06", titleEn: "Voice, images, tasks and agent mode", titleFr: "Voix, images, tâches et mode agent", durationEn: "30 minutes", durationFr: "30 minutes" },
    { track: "other", id: "other-01", titleEn: "Google Gemini: the assistant inside your Google account", titleFr: "Google Gemini : l'assistant de votre compte Google", durationEn: "30 minutes", durationFr: "30 minutes" },
    { track: "other", id: "other-02", titleEn: "Meta AI in WhatsApp, Facebook and Instagram", titleFr: "Meta AI dans WhatsApp, Facebook et Instagram", durationEn: "25 minutes", durationFr: "25 minutes" },
    { track: "other", id: "other-03", titleEn: "Microsoft Copilot: on your PC, in Office, and at work", titleFr: "Microsoft Copilot : sur votre PC, dans Office et au travail", durationEn: "30 minutes", durationFr: "30 minutes" },
    { track: "other", id: "other-04", titleEn: "Mistral, DeepSeek, Perplexity, Grok, and how to judge any new AI", titleFr: "Mistral, DeepSeek, Perplexity, Grok, et comment juger toute nouvelle IA", durationEn: "30 minutes", durationFr: "30 minutes" },
    { track: "work", id: "work-01", titleEn: "Beyond the basic prompt: examples, chaining and self-checks", titleFr: "Au-delà du prompt de base : exemples, enchaînement et auto-contrôle", durationEn: "35 minutes", durationFr: "35 minutes" },
    { track: "work", id: "work-02", titleEn: "Your daily AI routine", titleFr: "Votre routine IA quotidienne", durationEn: "30 minutes", durationFr: "30 minutes" },
    { track: "work", id: "work-03", titleEn: "From data to report to slides: a reliable pipeline", titleFr: "Des données au rapport puis aux diapositives : une chaîne fiable", durationEn: "35 minutes", durationFr: "35 minutes" },
    { track: "work", id: "work-04", titleEn: "Claude or ChatGPT? Choosing, and cross-checking with both", titleFr: "Claude ou ChatGPT ? Choisir, et contre-vérifier avec les deux", durationEn: "25 minutes", durationFr: "25 minutes" },
    { track: "work", id: "work-05", titleEn: "Automating recurring work, with a human in the loop", titleFr: "Automatiser le travail récurrent, avec un humain dans la boucle", durationEn: "30 minutes", durationFr: "30 minutes" },
    { track: "work", id: "work-06", titleEn: "Your AI playbook: prompts, data rules, measured results", titleFr: "Votre guide IA : prompts, règles de données, résultats mesurés", durationEn: "35 minutes", durationFr: "35 minutes" },
    { track: "work", id: "work-07", titleEn: "Live workshop and course wrap-up", titleFr: "Atelier en direct et conclusion du cours", durationEn: "90 minutes", durationFr: "90 minutes" }
  ];

  // Content-only pages (no quiz) — see content/tracks/plans.md.
  var INFO_PAGES = [
    { id: "plans",
      titleEn: "Pacing plans in detail", titleFr: "Détail des formules de rythme",
      descEn: "Full day-by-day schedules, advantages, and audience for each plan", descFr: "Calendriers détaillés, avantages et public pour chaque formule" }
  ];

  // Pace choices, offered from the home screen. Full plan details live in content/tracks/plans.md.
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

  var PASS_RATIO = 0.8; // 80% per-lesson quiz pass mark
  var SCREEN_CHROME_PX = 270; // top bar, screen counter and Previous/Next row, so Next stays on screen
  var WORKSHOP_ID = "work-07"; // skipped on Plan A, see plans.md

  var STRINGS = {
    en: {
      siteTitle: "AI for All",
      heroEyebrow: "28 lessons · 5 tracks · Claude, ChatGPT & more · EN/FR",
      heroTagline: "AI is for everyone. Take the mystery out of it with hands-on lessons on Claude, ChatGPT, Gemini, Meta AI, Copilot and more, at your own pace.",
      footerNote: "Progress is stored only in this browser. Nothing is sent anywhere.",
      units: "Lessons",
      notStarted: "Not started",
      inProgress: "In progress",
      completed: "Completed",
      quizNotAttempted: "Quiz: not attempted",
      quizPassed: "Quiz: {score}/{total} ✓ Passed",
      quizFailed: "Quiz: {score}/{total} — Try again",
      back: "Back",
      next: "Next",
      previous: "Previous",
      takeQuiz: "Take the quiz",
      screenOf: "Screen {current} of {total}",
      lessonN: "Lesson {n}",
      quizTitle: "Quiz",
      submit: "Submit answers",
      retry: "Retry quiz",
      reviewLesson: "Review the lesson",
      nextLesson: "Next lesson",
      passBanner: "Passed — {score}/{total} ({pct}%)",
      failBanner: "Not yet — {score}/{total} ({pct}%). Pass mark is 80%.",
      failHint: "Questions marked ✕ need another look. The correct answers and explanations appear once you pass. Each retry shuffles the options.",
      qCorrect: "✓ Correct",
      qIncorrect: "✕ Not quite",
      selectAllWarning: "Please answer every question before submitting.",
      loadError: "Could not load this lesson. Try reloading the page.",
      findYourPlan: "Find your plan",
      choosePaceLabel: "Choose your pace",
      choosePaceHint: "Free during launch. You can change it at any time.",
      yourPace: "Your pace: {plan}",
      change: "Change",
      freeLabel: "FREE",
      freeBannerText: "Free access during launch — standard prices shown apply later.",
      yourBaselineLabel: "Your baseline: {text}",
      diagnosticQ2Title: "Optional: pick one task you do often, and how long it typically takes you today",
      diagnosticQ2Placeholder: "e.g. Monthly report: about 3 hours",
      diagnosticSave: "Save and see my plan",
      diagnosticSkip: "Skip this question",
      diagnosticResultTitle: "Your plan",
      diagnosticResultBody: "You chose:",
      diagnosticBaselineSaved: "Baseline saved: {text}",
      viewPlanDetails: "View plan details",
      backToHome: "Back to home",
      testOut: "Test out: take the quiz",
      lessonsInTrack: "{done}/{n} passed",
      overallProgress: "{done} of {total} lessons passed",
      startCourse: "Start: Lesson 1",
      continueLesson: "Continue: Lesson {n}",
      optionalOnSprint: "Optional on the 7-Day Sprint",
      copy: "Copy",
      copied: "Copied ✓",
      copyFailed: "Select and copy",
      certCardTitle: "Your certificate",
      certCardLocked: "Pass all {total} lesson quizzes to unlock it. Passed so far: {done}.",
      certCardReady: "Unlocked. Add your name, then print it or save it as a PDF.",
      certTitle: "Certificate of completion",
      certCourse: "AI for All — understanding and using AI with confidence",
      certPresented: "This certifies that",
      certBody: "has completed all {total} lessons of the course and passed every lesson quiz with a score of 80% or more.",
      certDate: "Completed on {date}",
      certFine: "This certifies completion of an online course. It is not a professional licence or accreditation. It is generated in the learner's browser from their quiz results. Independent course, not affiliated with or endorsed by Anthropic, OpenAI, Google, Meta, Microsoft or any other AI company.",
      certNameLabel: "Your name, as it should appear",
      certNamePlaceholder: "Full name",
      certPrint: "Print or save as PDF",
      certLockedTitle: "Not unlocked yet",
      viewCertificate: "View your certificate"
    },
    fr: {
      siteTitle: "L'IA pour tous",
      heroEyebrow: "28 leçons · 5 parcours · Claude, ChatGPT et plus · FR/EN",
      heroTagline: "L'IA, c'est pour tout le monde. Levez le mystère avec des leçons pratiques sur Claude, ChatGPT, Gemini, Meta AI, Copilot et d'autres, à votre rythme.",
      footerNote: "La progression est enregistrée uniquement dans ce navigateur. Rien n'est envoyé ailleurs.",
      units: "Leçons",
      notStarted: "Non commencé",
      inProgress: "En cours",
      completed: "Terminé",
      quizNotAttempted: "Quiz : non tenté",
      quizPassed: "Quiz : {score}/{total} ✓ Réussi",
      quizFailed: "Quiz : {score}/{total} — Réessayer",
      back: "Retour",
      next: "Suivant",
      previous: "Précédent",
      takeQuiz: "Faire le quiz",
      screenOf: "Écran {current} sur {total}",
      lessonN: "Leçon {n}",
      quizTitle: "Quiz",
      submit: "Valider les réponses",
      retry: "Refaire le quiz",
      reviewLesson: "Revoir la leçon",
      nextLesson: "Leçon suivante",
      passBanner: "Réussi — {score}/{total} ({pct} %)",
      failBanner: "Pas encore — {score}/{total} ({pct} %). La note de passage est 80 %.",
      failHint: "Les questions marquées ✕ sont à revoir. Les bonnes réponses et les explications s'affichent une fois le quiz réussi. Chaque nouvelle tentative mélange les options.",
      qCorrect: "✓ Correct",
      qIncorrect: "✕ Pas tout à fait",
      selectAllWarning: "Veuillez répondre à toutes les questions avant de valider.",
      loadError: "Impossible de charger cette leçon. Essayez de recharger la page.",
      findYourPlan: "Trouver ma formule",
      choosePaceLabel: "Choisissez votre rythme",
      choosePaceHint: "Gratuit pendant le lancement. Vous pouvez le modifier à tout moment.",
      yourPace: "Votre rythme : {plan}",
      change: "Modifier",
      freeLabel: "GRATUIT",
      freeBannerText: "Accès gratuit pendant le lancement — les prix standards indiqués s'appliqueront plus tard.",
      yourBaselineLabel: "Votre situation de départ : {text}",
      diagnosticQ2Title: "Optionnel : choisissez une tâche que vous faites souvent, et le temps qu'elle vous prend habituellement aujourd'hui",
      diagnosticQ2Placeholder: "ex. : Rapport mensuel : environ 3 heures",
      diagnosticSave: "Enregistrer et voir ma formule",
      diagnosticSkip: "Passer cette question",
      diagnosticResultTitle: "Votre formule",
      diagnosticResultBody: "Vous avez choisi :",
      diagnosticBaselineSaved: "Situation de départ enregistrée : {text}",
      viewPlanDetails: "Voir les détails de la formule",
      backToHome: "Retour à l'accueil",
      testOut: "Test de dispense : faire le quiz",
      lessonsInTrack: "{done}/{n} réussies",
      overallProgress: "{done} leçons réussies sur {total}",
      startCourse: "Commencer : leçon 1",
      continueLesson: "Continuer : leçon {n}",
      optionalOnSprint: "Facultative pour le Sprint de 7 jours",
      copy: "Copier",
      copied: "Copié ✓",
      copyFailed: "Sélectionnez et copiez",
      certCardTitle: "Votre attestation",
      certCardLocked: "Réussissez les {total} quiz de leçon pour la débloquer. Réussis à ce jour : {done}.",
      certCardReady: "Débloquée. Ajoutez votre nom, puis imprimez-la ou enregistrez-la en PDF.",
      certTitle: "Attestation de fin de formation",
      certCourse: "L'IA pour tous — comprendre et utiliser l'IA en toute confiance",
      certPresented: "Nous attestons que",
      certBody: "a suivi les {total} leçons de la formation et réussi chaque quiz de leçon avec un score d'au moins 80 %.",
      certDate: "Terminée le {date}",
      certFine: "Cette attestation certifie la fin d'une formation en ligne. Ce n'est ni une licence professionnelle ni une accréditation. Elle est générée dans le navigateur de l'apprenant à partir de ses résultats aux quiz. Cours indépendant, ni affilié à Anthropic, OpenAI, Google, Meta, Microsoft ou toute autre entreprise d'IA, ni approuvé par elles.",
      certNameLabel: "Votre nom, tel qu'il doit apparaître",
      certNamePlaceholder: "Nom complet",
      certPrint: "Imprimer ou enregistrer en PDF",
      certLockedTitle: "Pas encore débloquée",
      viewCertificate: "Voir votre attestation"
    }
  };

  // ---------- storage helpers (local only, never sent anywhere) ----------

  function safeGet(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }
  function safeSet(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { /* storage unavailable, degrade silently */ }
  }
  function getJson(key) {
    try { return JSON.parse(safeGet(key) || "{}") || {}; }
    catch (e) { return {}; }
  }

  function getLang() {
    return safeGet("aiw_lang") === "fr" ? "fr" : "en";
  }
  function setLang(lang) {
    safeSet("aiw_lang", lang);
  }

  function getProgress() { return getJson("aiw_progress"); }
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
  // Keeps the best score: a pass is never undone by a later, weaker retry.
  function saveQuizResult(unitId, score, total) {
    var p = getProgress();
    var u = p[unitId] = p[unitId] || {};
    u.lastScore = score;
    if (u.quizScore == null || score > u.quizScore) u.quizScore = score;
    u.quizTotal = total;
    u.quizPassed = !!u.quizPassed || (score / total) >= PASS_RATIO;
    saveProgress(p);
  }

  function getDiagnostic() { return getJson("aiw_diagnostic"); }
  function saveDiagnostic(data) {
    safeSet("aiw_diagnostic", JSON.stringify(data));
  }

  // Where the learner last was, so the home screen can offer "Continue".
  function getLast() { return getJson("aiw_last"); }
  function saveLast(unitId, screen) {
    safeSet("aiw_last", JSON.stringify({ id: unitId, screen: screen }));
  }

  function getCert() { return getJson("aiw_cert"); }
  function saveCert(data) {
    safeSet("aiw_cert", JSON.stringify(data));
  }

  function fmt(str, vars) {
    return str.replace(/\{(\w+)\}/g, function (_, k) { return vars[k] != null ? vars[k] : ""; });
  }

  // ---------- tiny local Markdown -> HTML parser ----------
  // Supports: # headings, blockquotes, numbered/bulleted lists, tables, hr, bold/italic/links/code, paragraphs.

  function escapeHtml(text) {
    return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
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
        // Lesson sources write "### Title: ..." / "### Titre : ..."; the label is noise on screen.
        var headingText = line.replace(/^#{1,4}\s+/, "").replace(/^(Title|Titre)\s*:\s*/, "");
        html += "<h" + level + ">" + inlineMd(headingText) + "</h" + level + ">";
        i++; continue;
      }

      if (isHr(line)) { html += "<hr>"; i++; continue; }

      // Blockquotes hold the example prompts, so each gets a Copy button.
      if (isQuote(line)) {
        var qbuf = [];
        while (i < n && isQuote(lines[i])) {
          qbuf.push(inlineMd(lines[i].replace(/^>\s?/, "")));
          i++;
        }
        html += '<div class="prompt-card"><blockquote>' + qbuf.join("<br>") + "</blockquote>" +
          '<button type="button" class="copy-btn">' + t("copy") + "</button></div>";
        continue;
      }

      if (isTableRow(line)) {
        var rows = [];
        while (i < n && isTableRow(lines[i])) { rows.push(lines[i]); i++; }
        rows = rows.filter(function (r) { return !isTableSep(r); });
        var tbl = '<div class="table-wrap"><table>';
        rows.forEach(function (r, idx) {
          var cells = r.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")
            .map(function (c) { return inlineMd(c.trim()); });
          var tag = idx === 0 ? "th" : "td";
          tbl += "<tr>" + cells.map(function (c) { return "<" + tag + ">" + c + "</" + tag + ">"; }).join("") + "</tr>";
        });
        tbl += "</table></div>";
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

  // ---------- pagination into screens that fit the viewport ----------

  function htmlToBlocks(html) {
    var wrapper = document.createElement("div");
    wrapper.innerHTML = html;
    return Array.prototype.slice.call(wrapper.children);
  }

  // Headings, bold-only paragraphs and lead-ins ending in ":" belong with the block after them,
  // so they should start a screen rather than end one.
  function keepWithNext(el) {
    if (/^H[1-4]$/.test(el.tagName)) return true;
    if (el.tagName !== "P") return false;
    if (/:\s*$/.test(el.textContent)) return true;
    return el.children.length === 1 && el.firstElementChild.tagName === "STRONG" &&
      el.textContent.trim() === el.firstElementChild.textContent.trim();
  }

  // Measures real rendered heights at the current width, so each screen fits without scrolling
  // (a block taller than the screen still gets a screen of its own).
  function paginateBlocks(blocks) {
    var budget = Math.max(320, window.innerHeight - SCREEN_CHROME_PX);
    var probe = document.createElement("div");
    probe.className = "screen-block";
    probe.style.cssText = "position:absolute;left:-10000px;top:0;visibility:hidden;display:flow-root;width:" +
      app.clientWidth + "px";
    document.body.appendChild(probe);

    var screens = [];
    var current = [];
    blocks.forEach(function (b) {
      probe.appendChild(b);
      if (probe.offsetHeight > budget && current.length) {
        var carry = [];
        while (current.length > 1 && keepWithNext(current[current.length - 1])) carry.unshift(current.pop());
        screens.push(current);
        current = carry;
        probe.innerHTML = "";
        current.forEach(function (c) { probe.appendChild(c); });
        probe.appendChild(b);
      }
      current.push(b);
    });
    if (current.length) screens.push(current);
    if (!screens.length) screens.push([]);
    document.body.removeChild(probe);
    return screens;
  }

  // ---------- app state ----------

  var state = {
    lang: getLang(),
    view: "home", // home | unit | quiz | pace | diagnostic | certificate
    unitId: null,
    screens: [],
    screenIndex: 0,
    pagedFor: "", // unit id + language + viewport size the screens were measured for
    quizData: null,
    quizOrder: [],
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
    homeBtn.setAttribute("aria-label", t("backToHome"));
    siteTitleEl.textContent = t("siteTitle");
    footerNoteEl.textContent = t("footerNote");
  }

  function unitTitle(u) { return state.lang === "en" ? u.titleEn : u.titleFr; }
  function unitDuration(u) { return state.lang === "en" ? u.durationEn : u.durationFr; }
  function unitIndex(id) {
    for (var i = 0; i < UNITS.length; i++) if (UNITS[i].id === id) return i;
    return -1;
  }
  function planLabel(paceId, short) {
    var plan = PACE_PLANS.filter(function (p) { return p.id === paceId; })[0];
    if (!plan) return paceId;
    return state.lang === "en" ? (short ? plan.shortEn : plan.labelEn) : (short ? plan.shortFr : plan.labelFr);
  }
  function passedCount(progress, units) {
    return units.filter(function (u) { return (progress[u.id] || {}).quizPassed; }).length;
  }

  function go(hash) {
    if (location.hash === hash) route();
    else location.hash = hash;
  }

  function progressBar(done, total) {
    var pct = total ? Math.round((done / total) * 100) : 0;
    return '<div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="' + total +
      '" aria-valuenow="' + done + '"><span style="width:' + pct + '%"></span></div>';
  }

  function renderError() {
    app.innerHTML = '<div class="card"><p>' + t("loadError") + "</p>" +
      '<button class="btn secondary" id="backHomeErr">' + t("back") + "</button></div>";
    document.getElementById("backHomeErr").addEventListener("click", function () { go("#/"); });
  }

  // ---------- renderers ----------

  // The lesson "Continue" should open: the last lesson visited if it is not passed yet,
  // otherwise the first lesson not yet passed. Null when everything is passed.
  function continueTarget(progress) {
    var last = getLast();
    if (last.id && unitIndex(last.id) >= 0 && !(progress[last.id] || {}).quizPassed) {
      return { unit: UNITS[unitIndex(last.id)], screen: last.screen || 1 };
    }
    var next = UNITS.filter(function (u) { return !(progress[u.id] || {}).quizPassed; })[0];
    return next ? { unit: next, screen: 1 } : null;
  }

  function renderHome() {
    state.view = "home";
    applyChrome();
    var progress = getProgress();
    var diagnostic = getDiagnostic();
    var done = passedCount(progress, UNITS);
    var html = "";

    html += '<div class="hero">' +
      '<span class="hero-eyebrow">' + t("heroEyebrow") + "</span>" +
      '<h2 tabindex="-1" data-focus>' + t("siteTitle") + "</h2>" +
      "<p>" + t("heroTagline") + "</p>" +
      "</div>";

    // Continue card: overall progress plus one tap back into the course.
    var target = continueTarget(progress);
    var anyOpened = UNITS.some(function (u) { return (progress[u.id] || {}).opened; });
    html += '<div class="continue-card">' +
      '<p class="continue-progress">' + t("overallProgress", { done: done, total: UNITS.length }) + "</p>" +
      progressBar(done, UNITS.length);
    if (target) {
      var n = unitIndex(target.unit.id) + 1;
      html += '<button class="btn" id="continueBtn">' +
        (anyOpened ? t("continueLesson", { n: n }) : t("startCourse")) +
        '<span class="btn-sub">' + inlineMd(unitTitle(target.unit)) + "</span></button>";
    } else {
      html += '<button class="btn" id="continueBtn">' + t("viewCertificate") + "</button>";
    }
    html += "</div>";

    // Pace: one compact line once chosen; the full picker lives on its own screen.
    html += '<div class="pace-line">';
    if (diagnostic.paceId) {
      html += "<span>" + t("yourPace", { plan: "<strong>" + planLabel(diagnostic.paceId, true) + "</strong>" }) + "</span>" +
        '<button type="button" class="link-btn" id="paceBtn">' + t("change") + "</button>";
    } else {
      html += "<span><strong>" + t("choosePaceLabel") + "</strong><br><small>" + t("choosePaceHint") + "</small></span>" +
        '<button type="button" class="btn small" id="paceBtn">' + t("choosePaceLabel") + "</button>";
    }
    html += "</div>";

    html += '<h2 class="sr-title">' + t("units") + "</h2>";
    var stepNo = 0;
    TRACKS.forEach(function (tr) {
      var trackUnits = UNITS.filter(function (u) { return u.track === tr.id; });
      var trackDone = passedCount(progress, trackUnits);
      html += '<section class="track">' +
        '<div class="track-head"><h2>' + (state.lang === "en" ? tr.titleEn : tr.titleFr) + "</h2>" +
        '<span class="track-count">' + t("lessonsInTrack", { done: trackDone, n: trackUnits.length }) + "</span></div>" +
        progressBar(trackDone, trackUnits.length) +
        '<p class="track-desc">' + (state.lang === "en" ? tr.descEn : tr.descFr) + "</p>" +
        '<div class="track-list">';
      trackUnits.forEach(function (u) {
        stepNo++;
        var p = progress[u.id] || {};
        var done = !!p.quizPassed;
        var statusLabel = done ? t("completed") : (p.opened ? t("inProgress") : t("notStarted"));
        var statusClass = done ? "done" : "";
        var quizLabel = (p.quizTotal != null)
          ? t(p.quizPassed ? "quizPassed" : "quizFailed", { score: p.quizScore, total: p.quizTotal })
          : t("quizNotAttempted");
        var quizClass = p.quizTotal != null ? (p.quizPassed ? "pass" : "fail") : "";
        var meta = unitDuration(u);
        if (u.id === WORKSHOP_ID && diagnostic.paceId === "A") meta += " · " + t("optionalOnSprint");
        html += '<div class="unit-wrap">' +
          '<button class="unit-card" data-unit="' + u.id + '">' +
          '<div class="unit-card-row">' +
          '<span class="step-badge' + (done ? " done" : "") + '">' + (done ? "✓" : stepNo) + "</span>" +
          '<div class="unit-card-text">' +
          "<h3>" + inlineMd(unitTitle(u)) + "</h3>" +
          '<p class="unit-meta">' + inlineMd(meta) + "</p>" +
          '<span class="badge ' + statusClass + '">' + statusLabel + "</span> " +
          '<span class="badge ' + quizClass + '">' + quizLabel + "</span>" +
          "</div></div></button>";
        // Foundations: learners who already use AI can test out by going straight to the quiz.
        if (tr.id === "foundations" && !p.quizPassed) {
          html += '<button class="testout-link" data-testout="' + u.id + '">' + t("testOut") + "</button>";
        }
        html += "</div>";
      });
      html += "</div></section>";
    });

    html += '<div class="extra-cards">';
    INFO_PAGES.forEach(function (ip) {
      html += '<button class="unit-card info-card" data-unit="' + ip.id + '">' +
        "<h3>" + (state.lang === "en" ? ip.titleEn : ip.titleFr) + "</h3>" +
        '<p class="unit-meta">' + (state.lang === "en" ? ip.descEn : ip.descFr) + "</p>" +
        "</button>";
    });
    html += '<button class="unit-card info-card cert-card' + (done === UNITS.length ? " unlocked" : "") + '" id="certCardBtn">' +
      "<h3>" + t("certCardTitle") + "</h3>" +
      '<p class="unit-meta">' + (done === UNITS.length ? t("certCardReady") : t("certCardLocked", { total: UNITS.length, done: done })) + "</p>" +
      "</button>";
    html += "</div>";

    app.innerHTML = html;

    Array.prototype.forEach.call(app.querySelectorAll(".unit-card[data-unit]"), function (card) {
      card.addEventListener("click", function () {
        var id = card.getAttribute("data-unit");
        var last = getLast();
        go("#/lesson/" + id + "/" + (last.id === id && last.screen ? last.screen : 1));
      });
    });
    Array.prototype.forEach.call(app.querySelectorAll(".testout-link"), function (btn) {
      btn.addEventListener("click", function () {
        markUnitOpened(btn.getAttribute("data-testout"));
        go("#/quiz/" + btn.getAttribute("data-testout"));
      });
    });
    document.getElementById("continueBtn").addEventListener("click", function () {
      if (target) go("#/lesson/" + target.unit.id + "/" + target.screen);
      else go("#/certificate");
    });
    document.getElementById("paceBtn").addEventListener("click", function () { go("#/pace"); });
    document.getElementById("certCardBtn").addEventListener("click", function () { go("#/certificate"); });
  }

  // ---------- pace choice and optional baseline question ----------

  function renderPacePicker() {
    state.view = "pace";
    applyChrome();
    var diagnostic = getDiagnostic();
    var html = '<div class="pace-top">';
    html += '<h2 class="pace-top-label" tabindex="-1" data-focus>' + t("choosePaceLabel") + "</h2>";
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
    html += '<button class="btn secondary" id="backHomePace">' + t("backToHome") + "</button>";
    app.innerHTML = html;

    Array.prototype.forEach.call(app.querySelectorAll(".pace-card"), function (card) {
      card.addEventListener("click", function () { go("#/pace/" + card.getAttribute("data-pace")); });
    });
    document.getElementById("viewPlansBtn").addEventListener("click", function () { go("#/lesson/plans/1"); });
    document.getElementById("backHomePace").addEventListener("click", function () { go("#/"); });
  }

  function openDiagnosticQ2(paceId) {
    state.view = "diagnostic";
    applyChrome();
    var html = '<h2 tabindex="-1" data-focus>' + t("findYourPlan") + "</h2>";
    html += '<p class="question">' + inlineMd(planLabel(paceId)) + "</p>";
    html += '<label class="question" for="baselineInput">' + t("diagnosticQ2Title") + "</label>";
    html += '<input type="text" id="baselineInput" class="text-input" placeholder="' + escapeHtml(t("diagnosticQ2Placeholder")) + '">';
    html += '<button class="btn" id="saveDiagBtn">' + t("diagnosticSave") + "</button>";
    html += '<button class="btn secondary" id="skipDiagBtn">' + t("diagnosticSkip") + "</button>";
    html += '<button class="btn secondary" id="backHomeDiag">' + t("back") + "</button>";
    app.innerHTML = html;

    document.getElementById("saveDiagBtn").addEventListener("click", function () {
      finishDiagnostic(paceId, document.getElementById("baselineInput").value.trim());
    });
    document.getElementById("skipDiagBtn").addEventListener("click", function () {
      finishDiagnostic(paceId, "");
    });
    document.getElementById("backHomeDiag").addEventListener("click", function () { go("#/pace"); });
  }

  function finishDiagnostic(paceId, baseline) {
    saveDiagnostic({ paceId: paceId, baseline: baseline, savedAt: new Date().toISOString() });
    go("#/pace/" + paceId + "/done");
  }

  function renderDiagnosticResult(paceId) {
    state.view = "diagnostic";
    applyChrome();
    var baseline = getDiagnostic().baseline;
    var html = '<div class="result-banner pass" tabindex="-1" data-focus>' + t("diagnosticResultTitle") + "</div>";
    html += "<p>" + t("diagnosticResultBody") + "</p>";
    html += '<p class="question">' + inlineMd(planLabel(paceId)) + "</p>";
    if (baseline) html += '<p class="small-note">' + t("diagnosticBaselineSaved", { text: inlineMd(baseline) }) + "</p>";
    html += '<div class="btn-row">' +
      '<button class="btn" id="viewPlansBtn2">' + t("viewPlanDetails") + "</button>" +
      '<button class="btn secondary" id="backHomeDiag2">' + t("backToHome") + "</button>" +
      "</div>";
    app.innerHTML = html;

    document.getElementById("viewPlansBtn2").addEventListener("click", function () { go("#/lesson/plans/1"); });
    document.getElementById("backHomeDiag2").addEventListener("click", function () { go("#/"); });
  }

  // ---------- lessons ----------

  function pageKey(unitId) {
    return unitId + "|" + state.lang + "|" + app.clientWidth + "x" + window.innerHeight;
  }

  function paginateUnit(unitId) {
    var raw = window.AIW_CONTENT && window.AIW_CONTENT[unitId];
    if (!raw) return false;
    var sections = splitLangSections(raw);
    state.screens = paginateBlocks(htmlToBlocks(mdToHtml(state.lang === "en" ? sections.en : sections.fr)));
    state.pagedFor = pageKey(unitId);
    return true;
  }

  function showLesson(unitId, screen) {
    if (!window.AIW_CONTENT || !window.AIW_CONTENT[unitId]) { renderError(); return; }
    state.view = "unit";
    applyChrome(); // language must be set before the content is measured
    if (state.unitId !== unitId || state.pagedFor !== pageKey(unitId)) paginateUnit(unitId);
    state.unitId = unitId;
    markUnitOpened(unitId);
    state.screenIndex = Math.min(Math.max(screen, 1), state.screens.length) - 1;
    renderUnitScreen();
  }

  function renderUnitScreen() {
    var unitId = state.unitId;
    var idx = unitIndex(unitId);
    var hasQuiz = !!(window.AIW_QUIZZES && window.AIW_QUIZZES[unitId]) && idx >= 0;
    var total = state.screens.length;
    var current = state.screenIndex + 1;
    var isLast = current === total;
    if (idx >= 0) saveLast(unitId, current);

    var blockHtml = state.screens[state.screenIndex]
      .map(function (el) { return el.outerHTML; }).join("");

    var html = "";
    html += '<p class="progress-line" tabindex="-1" data-focus>' +
      (idx >= 0 ? t("lessonN", { n: idx + 1 }) + " · " : "") +
      t("screenOf", { current: current, total: total }) + "</p>";
    html += progressBar(current, total);
    html += '<div class="screen-block">' + blockHtml + "</div>";

    html += '<div class="btn-row">';
    html += '<button class="btn secondary" id="prevBtn"' + (current === 1 ? " disabled" : "") + ">" + t("previous") + "</button>";
    if (!isLast) {
      html += '<button class="btn" id="nextBtn">' + t("next") + "</button>";
    } else if (hasQuiz) {
      html += '<button class="btn" id="quizBtn">' + t("takeQuiz") + "</button>";
    }
    html += "</div>";
    html += '<button class="btn secondary" id="backHomeBtn">' + t("backToHome") + "</button>";

    app.innerHTML = html;

    var base = "#/lesson/" + unitId + "/";
    var prevBtn = document.getElementById("prevBtn");
    prevBtn.addEventListener("click", function () { if (current > 1) go(base + (current - 1)); });
    var nextBtn = document.getElementById("nextBtn");
    if (nextBtn) nextBtn.addEventListener("click", function () { go(base + (current + 1)); });
    var quizBtn = document.getElementById("quizBtn");
    if (quizBtn) quizBtn.addEventListener("click", function () {
      markUnitRead(unitId);
      go("#/quiz/" + unitId);
    });
    document.getElementById("backHomeBtn").addEventListener("click", function () { go("#/"); });
    bindCopyButtons();
  }

  function copyText(text, onDone, onFail) {
    function fallback() {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.cssText = "position:fixed;top:0;left:0;opacity:0";
      document.body.appendChild(ta);
      ta.select();
      var ok = false;
      try { ok = document.execCommand("copy"); } catch (e) { ok = false; }
      document.body.removeChild(ta);
      if (ok) onDone(); else onFail();
    }
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(onDone, fallback);
    } else {
      fallback();
    }
  }

  function bindCopyButtons() {
    Array.prototype.forEach.call(app.querySelectorAll(".copy-btn"), function (btn) {
      btn.addEventListener("click", function () {
        var quote = btn.parentNode.querySelector("blockquote");
        copyText(quote.innerText.trim(), function () {
          btn.textContent = t("copied");
          btn.classList.add("ok");
          setTimeout(function () { btn.textContent = t("copy"); btn.classList.remove("ok"); }, 1800);
        }, function () {
          // Clipboard blocked: select the text so a long-press copy is one step away.
          var range = document.createRange();
          range.selectNodeContents(quote);
          var sel = window.getSelection();
          sel.removeAllRanges();
          sel.addRange(range);
          btn.textContent = t("copyFailed");
        });
      });
    });
  }

  // ---------- quizzes ----------

  function shuffledIndices(n) {
    var order = [];
    for (var i = 0; i < n; i++) order.push(i);
    for (var j = n - 1; j > 0; j--) {
      var k = Math.floor(Math.random() * (j + 1));
      var tmp = order[j]; order[j] = order[k]; order[k] = tmp;
    }
    return order;
  }

  // Every attempt shows the options in a new order, so a retry cannot be passed from memory of positions.
  function openQuiz(unitId) {
    var questions = window.AIW_QUIZZES && window.AIW_QUIZZES[unitId];
    if (unitIndex(unitId) < 0 || !questions) { renderError(); return; }
    state.view = "quiz";
    state.unitId = unitId;
    state.quizData = questions;
    state.quizOrder = questions.map(function (q) { return shuffledIndices(q.options_en.length); });
    state.quizAnswers = {};
    state.quizSubmitted = false;
    renderQuiz();
  }

  function renderQuiz() {
    applyChrome();
    var unitId = state.unitId;
    var idx = unitIndex(unitId);
    var questions = state.quizData;
    var total = questions.length;
    var score = questions.reduce(function (acc, q, qi) {
      return acc + (state.quizAnswers[qi] === q.answer_index ? 1 : 0);
    }, 0);
    var passed = state.quizSubmitted && (score / total) >= PASS_RATIO;
    // Correct answers and explanations are only revealed on a pass; a failed attempt shows
    // which questions were wrong, not what the right option was.
    var reveal = passed;

    var html = '<p class="progress-line">' + t("lessonN", { n: idx + 1 }) + " · " + inlineMd(unitTitle(UNITS[idx])) + "</p>";
    html += '<h2 tabindex="-1" data-focus>' + t("quizTitle") + "</h2>";

    if (state.quizSubmitted) {
      var pct = Math.round((score / total) * 100);
      html = '<div class="result-banner ' + (passed ? "pass" : "fail") + '" tabindex="-1" data-focus>' +
        t(passed ? "passBanner" : "failBanner", { score: score, total: total, pct: pct }) + "</div>" +
        (passed ? "" : '<p class="small-note fail-hint">' + t("failHint") + "</p>") +
        html.replace(" data-focus", "");
    }

    questions.forEach(function (q, qi) {
      var questionText = state.lang === "en" ? q.question_en : q.question_fr;
      var options = state.lang === "en" ? q.options_en : q.options_fr;
      var explanation = state.lang === "en" ? q.explanation_en : q.explanation_fr;
      var selected = state.quizAnswers[qi];
      var gotIt = selected === q.answer_index;

      html += '<div class="quiz-q">';
      html += '<p class="question">' + (qi + 1) + ". " + inlineMd(questionText) + "</p>";
      state.quizOrder[qi].forEach(function (oi) {
        var cls = "option";
        if (selected === oi) cls += " selected";
        if (state.quizSubmitted) {
          if (reveal && oi === q.answer_index) cls += " correct";
          else if (reveal && oi === selected) cls += " incorrect";
        }
        html += '<button class="' + cls + '" data-q="' + qi + '" data-o="' + oi + '"' +
          (state.quizSubmitted ? " disabled" : "") + ' aria-pressed="' + (selected === oi) + '">' + inlineMd(options[oi]) + "</button>";
      });
      if (state.quizSubmitted) {
        html += '<p class="q-verdict ' + (gotIt ? "pass" : "fail") + '">' + t(gotIt ? "qCorrect" : "qIncorrect") + "</p>";
        if (reveal || gotIt) html += '<p class="explanation">' + inlineMd(explanation) + "</p>";
      }
      html += "</div>";
    });

    if (state.quizSubmitted) {
      var nextUnit = UNITS[idx + 1];
      html += '<div class="btn-row">';
      if (passed) {
        html += '<button class="btn secondary" id="homeBtn2">' + t("backToHome") + "</button>" +
          '<button class="btn" id="nextLessonBtn">' + (nextUnit ? t("nextLesson") : t("viewCertificate")) + "</button>";
      } else {
        html += '<button class="btn secondary" id="reviewBtn">' + t("reviewLesson") + "</button>" +
          '<button class="btn" id="retryBtn">' + t("retry") + "</button>";
      }
      html += "</div>";
      app.innerHTML = html;

      if (passed) {
        document.getElementById("homeBtn2").addEventListener("click", function () { go("#/"); });
        document.getElementById("nextLessonBtn").addEventListener("click", function () {
          go(nextUnit ? "#/lesson/" + nextUnit.id + "/1" : "#/certificate");
        });
      } else {
        document.getElementById("reviewBtn").addEventListener("click", function () { go("#/lesson/" + unitId + "/1"); });
        document.getElementById("retryBtn").addEventListener("click", function () {
          openQuiz(unitId);
          window.scrollTo(0, 0);
        });
      }
    } else {
      html += '<p id="quizWarning" class="explanation" hidden>' + t("selectAllWarning") + "</p>";
      html += '<button class="btn" id="submitBtn">' + t("submit") + "</button>";
      html += '<button class="btn secondary" id="backHomeBtn2">' + t("backToHome") + "</button>";
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
        saveQuizResult(unitId, score, total);
        renderQuiz();
        window.scrollTo(0, 0);
        focusMain();
      });
      document.getElementById("backHomeBtn2").addEventListener("click", function () { go("#/"); });
    }
  }

  // ---------- certificate ----------

  function renderCertificate() {
    state.view = "certificate";
    applyChrome();
    var progress = getProgress();
    var done = passedCount(progress, UNITS);
    var html;

    if (done < UNITS.length) {
      html = '<div class="card"><h2 tabindex="-1" data-focus>' + t("certLockedTitle") + "</h2>" +
        "<p>" + t("certCardLocked", { total: UNITS.length, done: done }) + "</p>" +
        progressBar(done, UNITS.length) + "</div>" +
        '<button class="btn secondary" id="certBack">' + t("backToHome") + "</button>";
      app.innerHTML = html;
      document.getElementById("certBack").addEventListener("click", function () { go("#/"); });
      return;
    }

    var cert = getCert();
    if (!cert.completedAt) { cert.completedAt = new Date().toISOString(); saveCert(cert); }
    var date = new Date(cert.completedAt).toLocaleDateString(state.lang === "en" ? "en-GB" : "fr-FR",
      { year: "numeric", month: "long", day: "numeric" });

    html = '<div class="no-print">' +
      '<label class="question" for="certNameInput">' + t("certNameLabel") + "</label>" +
      '<input type="text" id="certNameInput" class="text-input" autocomplete="name" placeholder="' +
      escapeHtml(t("certNamePlaceholder")) + '" value="' + escapeHtml(cert.name || "") + '">' +
      "</div>";
    html += '<div class="certificate">' +
      '<p class="cert-kicker">AI for All · L\'IA pour tous</p>' +
      '<h2 tabindex="-1" data-focus>' + t("certTitle") + "</h2>" +
      "<p>" + t("certPresented") + "</p>" +
      '<p class="cert-name" id="certName">' + (cert.name ? escapeHtml(cert.name) : "&nbsp;") + "</p>" +
      "<p>" + t("certBody", { total: UNITS.length }) + "</p>" +
      '<p class="cert-course">' + t("certCourse") + "</p>" +
      '<p class="cert-date">' + t("certDate", { date: date }) + "</p>" +
      '<p class="cert-fine">' + t("certFine") + "</p>" +
      "</div>";
    html += '<div class="no-print">' +
      '<button class="btn" id="certPrint">' + t("certPrint") + "</button>" +
      '<button class="btn secondary" id="certBack">' + t("backToHome") + "</button>" +
      "</div>";
    app.innerHTML = html;

    var input = document.getElementById("certNameInput");
    input.addEventListener("input", function () {
      var name = input.value.trim();
      document.getElementById("certName").innerHTML = name ? escapeHtml(name) : "&nbsp;";
      var c = getCert();
      c.name = name;
      saveCert(c);
    });
    document.getElementById("certPrint").addEventListener("click", function () { window.print(); });
    document.getElementById("certBack").addEventListener("click", function () { go("#/"); });
  }

  // ---------- routing ----------

  var firstRoute = true;

  // Moves keyboard and screen-reader focus to the new view's heading (not on first load).
  function focusMain() {
    var target = app.querySelector("[data-focus]");
    if (target && target.focus) {
      try { target.focus({ preventScroll: true }); } catch (e) { target.focus(); }
    }
  }

  function route() {
    var parts = location.hash.replace(/^#\/?/, "").split("/");
    var view = parts[0];
    if (view === "lesson") showLesson(parts[1], parseInt(parts[2], 10) || 1);
    else if (view === "quiz") { markUnitOpened(parts[1]); openQuiz(parts[1]); }
    else if (view === "pace" && !parts[1]) renderPacePicker();
    else if (view === "pace" && parts[2] === "done") renderDiagnosticResult(parts[1]);
    else if (view === "pace") openDiagnosticQ2(parts[1]);
    else if (view === "certificate") renderCertificate();
    else renderHome();
    window.scrollTo(0, 0);
    if (!firstRoute) focusMain();
    firstRoute = false;
  }

  // ---------- chrome events ----------

  langToggle.addEventListener("click", function () {
    state.lang = state.lang === "en" ? "fr" : "en";
    setLang(state.lang);
    // Keep quiz answers when switching language mid-quiz; everything else re-renders from the URL.
    if (state.view === "quiz") renderQuiz();
    else route();
  });

  homeBtn.addEventListener("click", function () { go("#/"); });
  window.addEventListener("hashchange", route);

  // Re-measure lesson screens when the viewport changes size (rotation, desktop window resize),
  // keeping the reader on the screen that holds the block they were looking at.
  var resizeTimer = null;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      if (state.view !== "unit" || state.pagedFor === pageKey(state.unitId)) return;
      var firstBlock = 0;
      for (var i = 0; i < state.screenIndex; i++) firstBlock += state.screens[i].length;
      paginateUnit(state.unitId);
      var count = 0;
      state.screenIndex = state.screens.length - 1;
      for (var s = 0; s < state.screens.length; s++) {
        count += state.screens[s].length;
        if (count > firstBlock) { state.screenIndex = s; break; }
      }
      history.replaceState(null, "", "#/lesson/" + state.unitId + "/" + (state.screenIndex + 1));
      renderUnitScreen();
    }, 250);
  });

  // ---------- boot ----------

  applyChrome();
  route();
})();
