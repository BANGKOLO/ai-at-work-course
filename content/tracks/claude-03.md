# Claude · Lesson 3

## English

### Title: Projects: build a reusable workspace for recurring work

**Duration:** 35 minutes

#### Content

If you re-explain the same background every week ("we are a logistics company, the report goes to the board, use these headings..."), you need a **Project**. A Project is a workspace with two things every chat inside it inherits:

- **Project instructions:** standing rules for every chat in the project.
- **Project knowledge:** files Claude can draw on: templates, past examples, glossaries, policies, product sheets.

Projects are available on paid plans. On Team and Enterprise plans they can be shared with colleagues, which turns one person's good setup into the team's standard.

**What makes a good Project**

One Project per *recurring job*, not per topic. "Monthly board report" is a good Project. "Finance" is too broad: its instructions end up contradicting each other.

**Writing project instructions that work**

Good instructions read like a handover note to a capable new colleague:

> Purpose: help me produce the monthly operations report for the board.
> Audience: board members. Non-specialists, they read on their phone, they want the decision first.
> Structure: always use the template in "report-template.docx". Max 2 pages.
> Data rules: only use figures I paste in the chat or that appear in the attached files. Never estimate a figure. If something is missing, list it under "Data needed" at the top.
> Tone: factual, no adjectives like "excellent" or "disappointing" unless a figure supports it.
> Before drafting: list the three most important changes since last month and wait for my confirmation.

Note the last line. It builds a checkpoint into every run, so you catch a wrong reading before 2 pages are written on top of it.

**Choosing knowledge files**

- **Include:** your template, two good past examples, a glossary of internal terms and acronyms, and the rules the output must respect.
- **Exclude:** anything outdated (Claude cannot tell an old policy from a current one unless you label it), and anything your data rules forbid.
- **Name files clearly:** "2026-policy-CURRENT.pdf" is better than "policy_final_v3.pdf".
- **Refresh:** when a policy changes, replace the file. Do not just add the new one next to the old.

**Test the Project before trusting it**

Run three past months through the Project, where you already know what a good report looked like. Compare. Fix the instructions where outputs drift. This takes 20 minutes and saves hours of quiet errors.

**Projects and Skills**

Claude also supports **Skills**: packaged instructions and files that Claude loads automatically when a task needs them, for example a company brand guideline used whenever it creates a document. Think of a Project as *where* a recurring job lives, and a Skill as a *capability* Claude can use anywhere. Your administrator may already provide company Skills. Check before building your own.

#### Worked example

An HR officer answers the same staff questions about leave and allowances every week. She creates a "Staff policy helper" Project. Knowledge: the current handbook (labelled CURRENT) and a one-page FAQ. Instructions: answer only from the handbook, quote the section, say "check with HR" when the handbook is silent, and never give advice on individual disputes. She tests it with 10 real past questions, fixes two instructions, and now drafts replies in a minute. Every reply carries a section reference she can check.

#### Activity

1. Pick one task you repeat at least monthly.
2. Write project instructions (8–12 lines) covering purpose, audience, structure, data rules, tone, and one checkpoint.
3. Choose at most four knowledge files and name them clearly.
4. Test it on two past examples. Write down one instruction you changed after testing.

#### Check

Take the 5-question quiz for this lesson.

---

## Français

### Titre : Les Projets : un espace réutilisable pour le travail récurrent

**Durée :** 35 minutes

#### Contenu

Si vous réexpliquez chaque semaine le même contexte (« nous sommes une entreprise de logistique, le rapport va au conseil, utilise ces titres... »), il vous faut un **Projet**. Un Projet est un espace de travail dont chaque conversation hérite de deux éléments :

- **Instructions du projet :** des règles permanentes pour toutes les conversations du projet.
- **Connaissances du projet :** des fichiers que Claude peut utiliser : modèles, exemples passés, glossaires, politiques, fiches produits.

Les Projets sont disponibles sur les offres payantes. Sur les offres Team et Enterprise, ils peuvent être partagés avec des collègues, ce qui transforme la bonne configuration d'une personne en standard d'équipe.

**Ce qui fait un bon Projet**

Un Projet par *tâche récurrente*, pas par thème. « Rapport mensuel au conseil » est un bon Projet. « Finance » est trop large : ses instructions finissent par se contredire.

**Rédiger des instructions qui fonctionnent**

De bonnes instructions se lisent comme une note de passation à un nouveau collègue compétent :

> Objectif : m'aider à produire le rapport mensuel d'exploitation pour le conseil.
> Public : membres du conseil. Non spécialistes, ils lisent sur téléphone, ils veulent la décision en premier.
> Structure : toujours utiliser le modèle « modele-rapport.docx ». 2 pages maximum.
> Règles de données : n'utilise que les chiffres que je colle dans la conversation ou qui figurent dans les fichiers joints. N'estime jamais un chiffre. S'il manque quelque chose, liste-le sous « Données nécessaires » en haut.
> Ton : factuel, pas d'adjectifs comme « excellent » ou « décevant » sans chiffre à l'appui.
> Avant de rédiger : liste les trois changements les plus importants depuis le mois dernier et attends ma confirmation.

Notez la dernière ligne. Elle crée un point de contrôle à chaque utilisation : vous repérez une mauvaise lecture avant que 2 pages soient écrites dessus.

**Choisir les fichiers de connaissances**

- **À inclure :** votre modèle, deux bons exemples passés, un glossaire des termes et sigles internes, et les règles que le résultat doit respecter.
- **À exclure :** tout ce qui est périmé (Claude ne distingue pas une ancienne politique de l'actuelle si vous ne l'étiquetez pas), et tout ce que vos règles de données interdisent.
- **Nommer clairement :** « politique-2026-EN-VIGUEUR.pdf » vaut mieux que « politique_finale_v3.pdf ».
- **Mettre à jour :** quand une politique change, remplacez le fichier. N'ajoutez pas simplement le nouveau à côté de l'ancien.

**Tester le Projet avant de lui faire confiance**

Faites passer trois mois passés dans le Projet, pour lesquels vous savez déjà à quoi ressemblait un bon rapport. Comparez. Corrigez les instructions là où les résultats dérivent. Cela prend 20 minutes et évite des heures d'erreurs silencieuses.

**Projets et Skills**

Claude prend aussi en charge les **Skills** : des instructions et fichiers regroupés que Claude charge automatiquement quand une tâche en a besoin, par exemple une charte graphique utilisée dès qu'il crée un document. Voyez le Projet comme *l'endroit* où vit une tâche récurrente, et le Skill comme une *compétence* que Claude peut utiliser partout. Votre administrateur fournit peut-être déjà des Skills d'entreprise. Vérifiez avant d'en créer.

#### Exemple détaillé

Une chargée RH répond chaque semaine aux mêmes questions du personnel sur les congés et les indemnités. Elle crée un Projet « Aide politique RH ». Connaissances : le règlement en vigueur (étiqueté EN VIGUEUR) et une FAQ d'une page. Instructions : répondre uniquement à partir du règlement, citer la section, dire « à vérifier avec les RH » quand le règlement ne dit rien, ne jamais conseiller sur un litige individuel. Elle le teste avec 10 vraies questions passées, corrige deux instructions, et rédige désormais ses réponses en une minute. Chaque réponse porte une référence de section qu'elle peut vérifier.

#### Activité

1. Choisissez une tâche que vous répétez au moins une fois par mois.
2. Rédigez des instructions de projet (8 à 12 lignes) : objectif, public, structure, règles de données, ton et un point de contrôle.
3. Choisissez quatre fichiers de connaissances au maximum et nommez-les clairement.
4. Testez sur deux exemples passés. Notez une instruction que vous avez modifiée après le test.

#### Vérification

Faites le quiz de 5 questions de cette leçon.
