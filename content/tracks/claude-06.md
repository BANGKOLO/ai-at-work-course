# Claude · Lesson 6

## English

### Title: Claude as a thinking partner: critique, decisions and hard conversations

**Duration:** 30 minutes

#### Content

The highest-value use of Claude for many professionals is not writing. It is thinking: stress-testing a plan, spotting what is missing, preparing for pushback. This needs a different way of prompting, because by default AI assistants tend to agree with you.

**Counter the agreement bias**

If you ask "Is this a good plan?", you will usually hear that it is. Ask for the opposite explicitly:

> Here is my proposal to move our invoicing to a new system in January.
> Act as a sceptical finance director who has seen two failed system migrations.
> List the five strongest objections you would raise, in order of seriousness.
> For each: what evidence would change your mind?
> Do not soften the objections and do not suggest solutions yet.

Separating "find the problems" from "propose solutions" gives sharper problems. Ask for solutions in a second message.

**Pre-mortem**

> Assume it is six months from now and this project has clearly failed. Write the three most likely reasons it failed, based only on the plan I shared. Then tell me which early warning sign I could monitor for each.

This is one of the most useful prompts in this course: imagining the failure makes it easier to name risks that a "will this work?" question hides.

**Decision memo**

For a decision you must explain to others:

> I need to decide between option A and option B (details below).
> Write a one-page decision memo: the decision, the criteria (ask me to confirm the criteria and their weights before scoring), a scoring table, the main risk of the recommended option, and what would make us revisit the decision.

Asking Claude to *confirm the criteria with you first* keeps the judgement yours. The AI structures the decision; you own it.

**Use extended thinking for this work**

Turn on extended thinking with the most capable model. For multi-step reasoning such as reconciling conflicting information, weighing trade-offs or checking logic, it makes a visible difference.

**Prepare for difficult conversations**

> I need to tell a long-standing supplier we are reducing their volume by 40%. Play the supplier's account manager. Be realistic: push back on the reasons, mention our history, ask for a transition period. After each of my replies, stay in character. When I type "pause", step out and give me feedback on what I said: what was clear, what sounded defensive, what I should have said.

Practising with a "pause" for feedback is far more effective than reading tips about difficult conversations.

**Limits that matter**

- Claude cannot know your organisation's politics, history or relationships unless you tell it, and you should only share what your data rules allow. Its critique is only as good as the context you give.
- It can produce persuasive but wrong reasoning. If a conclusion surprises you, ask: "Walk me through the reasoning step by step and tell me which step you are least sure about."
- Decisions about people (hiring, discipline, performance) need human judgement and your HR process. Use AI to structure your thinking, never to make or justify the decision on its own.

#### Worked example

An operations manager is about to propose a new shift pattern. He runs a pre-mortem and Claude flags that the plan assumes all drivers have phones that receive the scheduling app's notifications, which is not stated anywhere. He checks and finds 6 of 30 drivers who do not. He adds an SMS fallback before presenting, and the objection never comes up in the meeting.

#### Activity

1. Take a real plan or proposal you are working on (removing anything your data rules forbid).
2. Run the sceptic prompt and the pre-mortem prompt.
3. Write down one risk you had not considered, and what you will do about it.

#### Check

Take the 5-question quiz for this lesson.

---

## Français

### Titre : Claude comme partenaire de réflexion : critique, décisions et conversations difficiles

**Durée :** 30 minutes

#### Contenu

Pour beaucoup de professionnels, l'usage le plus précieux de Claude n'est pas la rédaction. C'est la réflexion : éprouver un plan, repérer ce qui manque, se préparer aux objections. Il faut pour cela formuler ses demandes autrement, car par défaut les assistants d'IA ont tendance à vous donner raison.

**Contrer le biais d'approbation**

Si vous demandez « Est-ce un bon plan ? », on vous répondra souvent que oui. Demandez explicitement l'inverse :

> Voici ma proposition de migrer notre facturation vers un nouveau système en janvier.
> Joue un directeur financier sceptique qui a vécu deux migrations ratées.
> Liste les cinq objections les plus fortes que tu soulèverais, par ordre de gravité.
> Pour chacune : quelle preuve te ferait changer d'avis ?
> N'adoucis pas les objections et ne propose pas encore de solutions.

Séparer « trouver les problèmes » et « proposer des solutions » donne des problèmes mieux cernés. Demandez les solutions dans un second message.

**Le pré-mortem**

> Imagine que nous sommes dans six mois et que ce projet a clairement échoué. Écris les trois raisons les plus probables de cet échec, uniquement à partir du plan que je t'ai donné. Puis indique-moi pour chacune quel signal d'alerte précoce je pourrais surveiller.

C'est l'un des prompts les plus utiles de ce cours : imaginer l'échec aide à nommer des risques qu'une question « est-ce que ça va marcher ? » laisse dans l'ombre.

**La note de décision**

Pour une décision que vous devrez expliquer :

> Je dois choisir entre l'option A et l'option B (détails ci-dessous).
> Rédige une note de décision d'une page : la décision, les critères (demande-moi de confirmer les critères et leur poids avant de noter), un tableau de notation, le principal risque de l'option recommandée, et ce qui nous ferait revoir la décision.

Demander à Claude de *confirmer d'abord les critères avec vous* vous laisse le jugement. L'IA structure la décision ; c'est vous qui en êtes responsable.

**Utiliser la réflexion approfondie pour ce travail**

Activez la réflexion approfondie (extended thinking) avec le modèle le plus puissant. Pour un raisonnement en plusieurs étapes, comme concilier des informations contradictoires, peser des compromis ou vérifier une logique, la différence est visible.

**Se préparer aux conversations difficiles**

> Je dois annoncer à un fournisseur de longue date que nous réduisons son volume de 40 %. Joue le rôle de son chargé de compte. Sois réaliste : conteste les raisons, rappelle notre historique, demande une période de transition. Après chacune de mes réponses, reste dans ton rôle. Quand j'écris « pause », sors du rôle et fais-moi un retour sur ce que j'ai dit : ce qui était clair, ce qui sonnait défensif, ce que j'aurais dû dire.

S'entraîner avec une « pause » pour le retour est bien plus efficace que lire des conseils sur les conversations difficiles.

**Les limites importantes**

- Claude ne connaît ni la politique interne, ni l'histoire, ni les relations de votre organisation, sauf si vous les lui dites, et vous ne devez partager que ce que vos règles de données autorisent. Sa critique ne vaut que par le contexte fourni.
- Il peut produire un raisonnement convaincant mais faux. Si une conclusion vous surprend, demandez : « Détaille ton raisonnement étape par étape et dis-moi de quelle étape tu es le moins sûr. »
- Les décisions sur des personnes (recrutement, sanction, performance) exigent un jugement humain et votre processus RH. Utilisez l'IA pour structurer votre réflexion, jamais pour prendre ou justifier seule la décision.

#### Exemple détaillé

Un responsable d'exploitation s'apprête à proposer une nouvelle organisation des équipes. Il lance un pré-mortem et Claude signale que le plan suppose que tous les chauffeurs ont un téléphone qui reçoit les notifications de l'application de planning, ce qui n'est écrit nulle part. Il vérifie : 6 chauffeurs sur 30 n'en ont pas. Il ajoute un relais par SMS avant de présenter, et l'objection n'est jamais soulevée en réunion.

#### Activité

1. Prenez un vrai plan ou une vraie proposition en cours (en retirant ce que vos règles de données interdisent).
2. Lancez le prompt du sceptique et le prompt du pré-mortem.
3. Notez un risque que vous n'aviez pas envisagé, et ce que vous allez faire.

#### Vérification

Faites le quiz de 5 questions de cette leçon.
