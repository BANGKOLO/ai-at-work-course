# Advanced · Lesson 5

## English

### Title: Automating recurring work, with a human in the loop

**Duration:** 30 minutes

#### Content

Once a task works reliably by hand with AI, the next step is to stop starting it by hand. This lesson covers the automation ladder, from simplest to most powerful, and the controls each rung needs.

**The automation ladder**

**Rung 1: Saved prompts.** A prompt library, a Claude Project, or a custom GPT. You still start each run, but the setup is instant. *Most people should spend a month here before climbing.*

**Rung 2: Scheduled reminders and tasks.** ChatGPT scheduled tasks or a calendar reminder that opens your saved prompt: "Every Friday 15:00: weekly report checklist."

**Rung 3: Connected tools.** Connectors let the AI fetch inputs itself (the latest file in Drive, this week's calendar, the email thread) instead of you pasting them. You still read the output before anything goes out.

**Rung 4: Workflow automation platforms.** Tools such as Microsoft Power Automate, Zapier or Make can trigger an AI step automatically: "When a form is submitted, have AI categorise the request and draft a reply, then put the draft in my review queue." Many organisations already license one of these. Ask IT before creating your own accounts.

**Rung 5: Agents.** ChatGPT agent mode, Claude in Chrome or desktop agent features perform multi-step tasks across websites and files. They are powerful and the least predictable. Keep them on tasks where you review the result before it has any effect.

**Choosing what to automate: the 3R test**

Automate a task only if it is:
- **Repeated:** at least weekly. Otherwise the setup time is not repaid.
- **Rule-based:** you can write down how a good output looks, as a checklist.
- **Reversible:** a mistake can be caught and undone before it causes harm. Drafts are reversible; sent emails, payments and deleted files are not.

**The human-in-the-loop rule**

Every automation that produces something **leaving your team** (to a client, a regulator, the public, a payment system) must end in a **human review step**, never in direct sending. Design it like this:

> Trigger → AI drafts → draft goes to a review queue (folder, draft email, task) → human approves → sent.

This single rule prevents most serious automation incidents.

**Controls for any automation**

- **Owner:** one named person responsible for it.
- **Log:** keep the inputs and outputs (where your data rules allow) for spot-checks.
- **Spot-check:** review a sample weekly, for example 1 in 10 outputs, even when it seems to work.
- **Kill switch:** know how to pause it in one step.
- **Data:** an automation sends data to the AI every time it runs. Make sure each run complies with your data classification, not just the first one you tested.
- **Prompt injection:** if the automation reads emails, forms or web pages from outside, those can contain text designed to manipulate the AI. Never let such an automation take irreversible actions on its own.

#### Worked example

An office manager receives 30 supplier invoices a week by email. She automates in stages: first a saved prompt that extracts invoice fields into a table (Rung 1). A month later, a Power Automate flow, set up with IT, runs the extraction when an invoice email arrives and adds a row to a review spreadsheet (Rung 4). She approves each row before it goes to accounting. In week three, the weekly spot-check catches the AI reading a due date in US format (month/day). She adds a rule to the prompt, and approval remains the gate.

#### Activity

1. List five recurring tasks and score each on the 3R test.
2. Pick the best candidate and decide its rung. Most should start at Rung 1 or 2.
3. Draw the workflow as trigger → AI step → review → output, and name the owner, the spot-check rate, and the kill switch.

#### Check

Take the 5-question quiz for this lesson.

---

## Français

### Titre : Automatiser le travail récurrent, avec un humain dans la boucle

**Durée :** 30 minutes

#### Contenu

Une fois qu'une tâche fonctionne de façon fiable à la main avec l'IA, l'étape suivante est de ne plus la lancer à la main. Cette leçon présente l'échelle de l'automatisation, du plus simple au plus puissant, et les contrôles nécessaires à chaque échelon.

**L'échelle de l'automatisation**

**Échelon 1 : prompts enregistrés.** Une bibliothèque de prompts, un Projet Claude ou un GPT personnalisé. Vous lancez encore chaque exécution, mais la mise en place est instantanée. *La plupart des gens devraient rester un mois ici avant de monter.*

**Échelon 2 : rappels et tâches planifiées.** Les tâches planifiées de ChatGPT ou un rappel d'agenda qui ouvre votre prompt enregistré : « Chaque vendredi 15 h : liste de contrôle du rapport hebdomadaire. »

**Échelon 3 : outils connectés.** Les connecteurs permettent à l'IA d'aller chercher elle-même les éléments (le dernier fichier du Drive, l'agenda de la semaine, le fil d'emails) au lieu que vous les colliez. Vous lisez toujours le résultat avant que quoi que ce soit ne parte.

**Échelon 4 : plateformes d'automatisation.** Des outils comme Microsoft Power Automate, Zapier ou Make peuvent déclencher une étape d'IA automatiquement : « Quand un formulaire est soumis, l'IA classe la demande et rédige une réponse, puis place le brouillon dans ma file de validation. » Beaucoup d'organisations ont déjà une licence pour l'un de ces outils. Demandez à l'informatique avant de créer vos propres comptes.

**Échelon 5 : les agents.** Le mode agent de ChatGPT, Claude in Chrome ou les fonctions d'agent de bureau accomplissent des tâches en plusieurs étapes sur des sites et des fichiers. Ils sont puissants et les moins prévisibles. Réservez-les aux tâches dont vous relisez le résultat avant qu'il ait le moindre effet.

**Choisir quoi automatiser : le test des 3R**

N'automatisez une tâche que si elle est :
- **Répétée :** au moins chaque semaine. Sinon le temps de mise en place n'est pas rentabilisé.
- **Réglée :** vous pouvez écrire à quoi ressemble un bon résultat, sous forme de liste de contrôle.
- **Réversible :** une erreur peut être repérée et annulée avant de causer du tort. Un brouillon est réversible ; un email envoyé, un paiement ou un fichier supprimé ne le sont pas.

**La règle de l'humain dans la boucle**

Toute automatisation qui produit quelque chose **qui sort de votre équipe** (vers un client, un régulateur, le public, un système de paiement) doit se terminer par une **étape de validation humaine**, jamais par un envoi direct. Concevez-la ainsi :

> Déclencheur → l'IA rédige → le brouillon va dans une file de validation (dossier, brouillon d'email, tâche) → un humain valide → envoi.

Cette seule règle évite la plupart des incidents graves d'automatisation.

**Les contrôles de toute automatisation**

- **Responsable :** une personne nommée qui en répond.
- **Journal :** conservez les entrées et sorties (si vos règles de données le permettent) pour les contrôles.
- **Contrôle par sondage :** relisez un échantillon chaque semaine, par exemple 1 résultat sur 10, même quand tout semble fonctionner.
- **Bouton d'arrêt :** sachez la mettre en pause en une seule action.
- **Données :** une automatisation envoie des données à l'IA à chaque exécution. Assurez-vous que chaque exécution respecte votre classification des données, pas seulement la première que vous avez testée.
- **Injection de prompt :** si l'automatisation lit des emails, formulaires ou pages web venant de l'extérieur, ils peuvent contenir un texte conçu pour manipuler l'IA. Ne laissez jamais une telle automatisation effectuer seule des actions irréversibles.

#### Exemple détaillé

Une responsable des services généraux reçoit 30 factures fournisseurs par semaine par email. Elle automatise par étapes : d'abord un prompt enregistré qui extrait les champs des factures dans un tableau (échelon 1). Un mois plus tard, un flux Power Automate, mis en place avec l'informatique, lance l'extraction à l'arrivée d'un email de facture et ajoute une ligne dans un tableur de validation (échelon 4). Elle valide chaque ligne avant transmission à la comptabilité. En troisième semaine, le contrôle hebdomadaire révèle que l'IA lit une date d'échéance au format américain (mois/jour). Elle ajoute une règle au prompt, et la validation reste le verrou.

#### Activité

1. Listez cinq tâches récurrentes et notez chacune avec le test des 3R.
2. Choisissez la meilleure candidate et décidez de son échelon. La plupart devraient commencer à l'échelon 1 ou 2.
3. Dessinez le flux déclencheur → étape IA → validation → résultat, et nommez le responsable, le taux de contrôle par sondage et le bouton d'arrêt.

#### Vérification

Faites le quiz de 5 questions de cette leçon.
