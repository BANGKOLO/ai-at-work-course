# ChatGPT · Lesson 4

## English

### Title: Projects and custom GPTs: build your own assistants

**Duration:** 35 minutes

#### Content

ChatGPT has two ways to stop repeating yourself. They solve different problems.

**Projects: a folder with memory for one piece of work**

A Project groups chats and files around one ongoing piece of work, such as "Q4 budget", "Office move" or "Client X onboarding". It has its own instructions and files, and chats inside it can draw on each other. Use a Project when:
- the work runs over weeks and you keep coming back to it;
- you want related chats in one place instead of scattered in your history;
- the context (files, decisions so far) keeps growing.

Good habit: start each new chat in the Project with "Summarise where we are on this project and what is still open." Correct anything wrong before continuing.

**Custom GPTs: a reusable tool for one repeated task**

A custom GPT is a configured assistant you (and, if you share it, colleagues) can open any time. It has a name, instructions, optional knowledge files, and selected capabilities (web search, data analysis, image generation, and on some plans, connections to other apps). Use a GPT when the *same task* is repeated by you or your team with different inputs each time, for example "Turn meeting notes into minutes in our format", "Check a job ad against our inclusive-language guide", or "Draft a customer reply in our support style".

**Building a GPT that actually works**

Use the **Configure** tab rather than only chatting with the builder, so you control the exact instructions. A strong instruction set has five parts:

> Role and goal: You turn raw meeting notes into formal minutes for [Company].
> Input: The user pastes notes or a transcript. If no date, attendee list or meeting title is given, ask for them first.
> Output format: Title, date, attendees, then sections Decisions / Actions (owner, deadline) / Open questions. Use the template in "minutes-template.docx".
> Rules: Only record decisions explicitly stated in the notes. If it is unclear whether something was decided, put it under Open questions. Never invent an owner or a deadline.
> Tone and language: formal; answer in the language of the notes.

Then add **conversation starters** (example first messages), so colleagues know how to use it without training.

**Test like a professional**

Before sharing a GPT, test it with five real inputs, including at least two awkward ones: notes with no clear decisions, a transcript mixing French and English, a missing date. Write down what went wrong, fix the instructions, and re-run all five. This turns a demo into a dependable tool.

**Sharing and safety**

- Share within your workspace on business plans. Be careful with public links.
- Anyone using a GPT may be able to get it to reveal its instructions and knowledge files. **Never put confidential data in a GPT's knowledge** unless your plan and policy allow it and access is restricted.
- Name a person responsible for keeping each shared GPT up to date. An unmaintained GPT with an outdated policy file is worse than none.

**Project or GPT?**

- **Project:** one ongoing piece of work, with context that grows.
- **GPT:** one repeated task, with stable instructions and different inputs each time.

#### Worked example

A customer-service team lead builds a "Reply drafter" GPT with the team's tone guide and refund policy as knowledge, and a rule to quote the policy section for any refund statement. Testing with five past tickets reveals it promised a refund timeline the policy does not specify. She adds "Never state a timeline unless it appears in the policy" and re-tests. Shared with six agents, it cuts first-draft time, and the policy quotation makes supervisor review faster.

#### Activity

1. Identify one task you or your team repeat at least weekly.
2. Build a GPT with the five-part instruction set and two conversation starters (or, if GPT creation is not available on your plan, write the instructions as a Project).
3. Test with five inputs, two of them awkward. Record one failure and how you fixed it.

#### Check

Take the 5-question quiz for this lesson.

---

## Français

### Titre : Projets et GPT personnalisés : créer vos propres assistants

**Durée :** 35 minutes

#### Contenu

ChatGPT propose deux façons d'arrêter de vous répéter. Elles ne règlent pas le même problème.

**Les Projets : un dossier avec mémoire pour un travail donné**

Un Projet regroupe des conversations et des fichiers autour d'un travail en cours, comme « Budget T4 », « Déménagement des bureaux » ou « Intégration du client X ». Il a ses propres instructions et fichiers, et les conversations qu'il contient peuvent s'appuyer les unes sur les autres. Utilisez un Projet quand :
- le travail dure des semaines et vous y revenez souvent ;
- vous voulez les conversations liées au même endroit plutôt que dispersées dans l'historique ;
- le contexte (fichiers, décisions prises) ne cesse de grandir.

Bonne habitude : commencez chaque nouvelle conversation du Projet par « Résume où nous en sommes sur ce projet et ce qui reste ouvert. » Corrigez ce qui est faux avant de continuer.

**Les GPT personnalisés : un outil réutilisable pour une tâche répétée**

Un GPT personnalisé est un assistant configuré que vous (et, si vous le partagez, vos collègues) pouvez ouvrir à tout moment. Il a un nom, des instructions, d'éventuels fichiers de connaissances et des capacités choisies (recherche web, analyse de données, génération d'images et, sur certaines offres, connexions à d'autres applications). Utilisez un GPT quand *la même tâche* est répétée par vous ou votre équipe avec des données différentes à chaque fois, par exemple « Transformer des notes de réunion en procès-verbal à notre format », « Vérifier une offre d'emploi au regard de notre guide de langage inclusif » ou « Rédiger une réponse client dans notre style ».

**Créer un GPT qui fonctionne vraiment**

Utilisez l'onglet **Configurer** plutôt que de discuter seulement avec l'assistant de création, pour maîtriser les instructions exactes. Un bon jeu d'instructions a cinq parties :

> Rôle et objectif : Tu transformes des notes de réunion brutes en procès-verbal formel pour [Entreprise].
> Entrée : l'utilisateur colle des notes ou une transcription. S'il manque la date, la liste des participants ou le titre de la réunion, demande-les d'abord.
> Format de sortie : titre, date, participants, puis sections Décisions / Actions (responsable, échéance) / Questions ouvertes. Utilise le modèle « modele-pv.docx ».
> Règles : n'enregistre que les décisions explicitement mentionnées dans les notes. S'il n'est pas clair qu'une chose a été décidée, mets-la dans Questions ouvertes. N'invente jamais de responsable ni d'échéance.
> Ton et langue : formel ; réponds dans la langue des notes.

Ajoutez ensuite des **amorces de conversation** (exemples de premiers messages), pour que vos collègues sachent l'utiliser sans formation.

**Tester comme un professionnel**

Avant de partager un GPT, testez-le avec cinq vraies entrées, dont au moins deux difficiles : des notes sans décision claire, une transcription qui mélange français et anglais, une date manquante. Notez ce qui ne va pas, corrigez les instructions, relancez les cinq. Une démo devient ainsi un outil fiable.

**Partage et sécurité**

- Partagez au sein de votre espace sur les offres professionnelles. Méfiez-vous des liens publics.
- Un utilisateur d'un GPT peut parfois l'amener à révéler ses instructions et ses fichiers. **Ne mettez jamais de données confidentielles dans les connaissances d'un GPT**, sauf si votre offre et votre politique le permettent et que l'accès est restreint.
- Désignez une personne chargée de tenir chaque GPT partagé à jour. Un GPT non entretenu avec une politique périmée est pire que pas de GPT.

**Projet ou GPT ?**

- **Projet :** un travail en cours, dont le contexte grandit.
- **GPT :** une tâche répétée, avec des instructions stables et des données différentes à chaque fois.

#### Exemple détaillé

Une responsable du service client crée un GPT « Rédacteur de réponses » avec le guide de ton de l'équipe et la politique de remboursement en connaissances, et une règle : citer la section de la politique pour toute affirmation sur un remboursement. Le test avec cinq anciens tickets révèle qu'il promet un délai de remboursement que la politique ne précise pas. Elle ajoute « N'indique jamais de délai s'il ne figure pas dans la politique » et teste à nouveau. Partagé avec six agents, il réduit le temps de premier jet, et la citation de la politique accélère la relecture par la superviseure.

#### Activité

1. Identifiez une tâche que vous ou votre équipe répétez au moins chaque semaine.
2. Créez un GPT avec les instructions en cinq parties et deux amorces de conversation (ou, si la création de GPT n'est pas disponible sur votre offre, rédigez les instructions dans un Projet).
3. Testez avec cinq entrées, dont deux difficiles. Notez un échec et comment vous l'avez corrigé.

#### Vérification

Faites le quiz de 5 questions de cette leçon.
