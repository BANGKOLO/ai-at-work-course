# Advanced · Lesson 3

## English

### Title: From data to report to slides: a reliable pipeline

**Duration:** 35 minutes

#### Content

Monthly reports, quarterly reviews, board packs: this is where many professionals lose the most hours, and where AI can save the most. It is also where a wrong number does the most damage. The answer is a **pipeline**: fixed steps, each with a check, that you run the same way every time.

**The five-stage pipeline**

**Stage 1: Data in, checked.** Upload or paste the data. Ask for row counts, totals and data problems before anything else (see ChatGPT Lesson 2). Compare one total with your source system. *Check: totals match.*

**Stage 2: Numbers table.** Ask for the key figures you report every period in a fixed table: current period, previous period, change, change %. Same table structure every month.
> Produce the standard KPI table: [list of KPIs with exact definitions]. Show the calculation for each change %.
*Check: recompute two figures yourself.*

**Stage 3: Findings, not prose.** Ask for findings as short statements tied to figures:
> Using only the KPI table, list up to five findings. Each finding: one sentence, the figure that supports it, and whether it is a change from last period or a continuing trend. Do not speculate about causes.
Then *you* add the causes from what you know about the business. This is the part AI cannot do for you, and the part your manager most values.

**Stage 4: Narrative.** Now draft the report:
> Write the report using the template in <template>. Use only the KPI table, the findings, and the causes I added. Lead with the decision or attention points. Max 2 pages.
*Check: run the "list every number in the document" pass and tick each against the table.*

**Stage 5: Slides.** Turn the report into a deck:
> Create a 5-slide deck from this report: one slide per key message, headline as a full sentence, max 3 bullets, a simple chart where a figure is the message. Speaker notes with the detail.
*Check: open in PowerPoint; read every headline and chart label.*

**Why stages beat one big prompt**

- An error is caught at the stage where it happens, not on slide 4 in front of the director.
- Each stage's output is reusable: the KPI table goes into the dashboard, the findings into the email summary.
- Once it works, save the stage prompts in a Claude Project or a ChatGPT Project/GPT. Next month is mostly re-running.

**Automate carefully**

Once the pipeline is stable, parts can be automated: scheduled reminders, a GPT or Project that always applies the template, connectors that fetch the latest file. Keep **Stage 1 and Stage 4 checks human** for anything that leaves your team.

**Charts that do not mislead**

When asking for charts, specify: a y-axis starting at zero for bar charts, the same scale when comparing periods, labelled units and currency, and a source line. AI-generated charts sometimes truncate axes in ways that exaggerate changes.

#### Worked example

A finance analyst used to spend two days on the monthly management pack. With the pipeline in a shared Claude Project (template, KPI definitions and two past packs as knowledge), the first month took one day, mainly spent fixing definitions. By the third month it took half a day. In month two, Stage 2's recomputation caught a change % calculated on the wrong base. It would have shown a 12% fall as a 14% fall in the board pack.

#### Activity

1. Take one report you produce regularly.
2. Write the Stage 2 KPI definitions and the Stage 3 findings prompt for it.
3. Run Stages 1–4 on last period's data and compare with what you actually sent. Note one improvement and one error the checks caught (or would have caught).

#### Check

Take the 5-question quiz for this lesson.

---

## Français

### Titre : Des données au rapport puis aux diapositives : une chaîne fiable

**Durée :** 35 minutes

#### Contenu

Rapports mensuels, revues trimestrielles, dossiers pour le conseil : c'est là que beaucoup de professionnels perdent le plus d'heures, et là que l'IA peut en faire gagner le plus. C'est aussi là qu'un chiffre faux fait le plus de dégâts. La réponse est une **chaîne** : des étapes fixes, chacune avec un contrôle, exécutées de la même façon à chaque fois.

**La chaîne en cinq étapes**

**Étape 1 : données entrantes, vérifiées.** Importez ou collez les données. Demandez nombre de lignes, totaux et problèmes de données avant tout (voir leçon ChatGPT 2). Comparez un total avec votre système source. *Contrôle : les totaux concordent.*

**Étape 2 : tableau des chiffres.** Demandez les chiffres clés de chaque période dans un tableau fixe : période actuelle, période précédente, écart, écart %. Même structure chaque mois.
> Produis le tableau d'indicateurs standard : [liste des indicateurs avec définitions exactes]. Montre le calcul de chaque écart %.
*Contrôle : recalculez deux chiffres vous-même.*

**Étape 3 : des constats, pas de la prose.** Demandez des constats courts reliés aux chiffres :
> À partir du tableau d'indicateurs uniquement, liste jusqu'à cinq constats. Chaque constat : une phrase, le chiffre qui l'appuie, et s'il s'agit d'un changement par rapport à la période précédente ou d'une tendance qui se poursuit. Ne spécule pas sur les causes.
Puis c'est *vous* qui ajoutez les causes, d'après votre connaissance de l'activité. C'est la partie que l'IA ne peut pas faire à votre place, et celle que votre responsable apprécie le plus.

**Étape 4 : le récit.** Rédigez maintenant le rapport :
> Rédige le rapport avec le modèle dans <modele>. Utilise uniquement le tableau d'indicateurs, les constats et les causes que j'ai ajoutées. Commence par la décision ou les points d'attention. 2 pages maximum.
*Contrôle : faites la passe « liste chaque chiffre du document » et pointez chacun dans le tableau.*

**Étape 5 : les diapositives.** Transformez le rapport en présentation :
> Crée une présentation de 5 diapositives à partir de ce rapport : une diapo par message clé, titre en phrase complète, 3 puces maximum, un graphique simple quand un chiffre est le message. Notes de l'orateur avec le détail.
*Contrôle : ouvrez dans PowerPoint ; relisez chaque titre et chaque libellé de graphique.*

**Pourquoi des étapes valent mieux qu'un grand prompt**

- Une erreur est interceptée à l'étape où elle survient, pas sur la diapo 4 devant le directeur.
- Le résultat de chaque étape est réutilisable : le tableau d'indicateurs va dans le tableau de bord, les constats dans l'email de synthèse.
- Une fois que cela fonctionne, enregistrez les prompts dans un Projet Claude ou un Projet/GPT ChatGPT. Le mois suivant, il suffit surtout de relancer.

**Automatiser avec prudence**

Une fois la chaîne stable, certaines parties peuvent être automatisées : rappels planifiés, un GPT ou un Projet qui applique toujours le modèle, des connecteurs qui récupèrent le dernier fichier. Gardez **humains les contrôles des étapes 1 et 4** pour tout ce qui sort de votre équipe.

**Des graphiques qui ne trompent pas**

Quand vous demandez un graphique, précisez : un axe vertical qui part de zéro pour les barres, la même échelle pour comparer des périodes, des unités et une devise indiquées, et une ligne de source. Les graphiques générés par l'IA tronquent parfois les axes d'une manière qui exagère les variations.

#### Exemple détaillé

Un analyste financier passait deux jours sur le dossier mensuel de gestion. Avec la chaîne dans un Projet Claude partagé (modèle, définitions des indicateurs et deux anciens dossiers en connaissances), le premier mois a pris une journée, surtout pour corriger des définitions. Au troisième mois, une demi-journée. Au deuxième mois, le recalcul de l'étape 2 a intercepté un écart % calculé sur la mauvaise base. Une baisse de 12 % serait apparue comme une baisse de 14 % dans le dossier du conseil.

#### Activité

1. Prenez un rapport que vous produisez régulièrement.
2. Rédigez les définitions d'indicateurs de l'étape 2 et le prompt de constats de l'étape 3.
3. Exécutez les étapes 1 à 4 sur les données de la période précédente et comparez avec ce que vous avez réellement envoyé. Notez une amélioration et une erreur que les contrôles ont interceptée (ou auraient interceptée).

#### Vérification

Faites le quiz de 5 questions de cette leçon.
