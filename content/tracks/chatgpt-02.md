# ChatGPT · Lesson 2

## English

### Title: Data analysis: spreadsheets, charts and numbers you can defend

**Duration:** 35 minutes

#### Content

When you upload a spreadsheet or CSV, ChatGPT can write and run Python code to analyse it: clean data, compute totals, build pivot tables, find outliers, and draw charts. This is one of its most valuable work features. It is also where confident mistakes cost the most, because the numbers look precise.

**Step 1: Make it describe the data before analysing it**

> I have uploaded sales_2026.xlsx. Before any analysis:
> 1. Tell me how many rows and columns you loaded, and the column names.
> 2. Show the first 5 rows.
> 3. List data problems: blank cells, duplicates, inconsistent dates, text in number columns, unusual values.
> Do not change anything yet.

Compare the row count with what you see in Excel. If they differ (hidden sheets, merged header rows, a total row at the bottom), fix that first. Everything else depends on it.

**Step 2: Agree cleaning rules explicitly**

> Apply these cleaning rules: remove exact duplicate rows; treat blank "Region" as "Unknown"; exclude the total row at the bottom. Report how many rows each rule affected.

Never accept "I cleaned the data" without the counts.

**Step 3: Ask the business question, with the method visible**

> What were total sales by region per month, and which region's growth slowed most between Q2 and Q3? Show the table, and state the exact calculation you used for "growth".

"Growth" can mean several things (month on month, quarter on quarter, absolute, percentage). Making the definition explicit is what makes the answer defensible in a meeting.

**Step 4: Charts that make a point**

> Make one bar chart of Q3 sales by region, sorted from highest to lowest, with the title stating the main finding as a sentence, e.g. "North fell behind Centre in Q3". Label values on the bars. Then let me download it as PNG.

A title that states the finding is more useful to a busy reader than "Sales by region".

**Step 5: Verify before you present**

- Recompute **one total** yourself in Excel.
- Ask: "Show me the code you used for the growth calculation." Even without coding knowledge, you can usually see which columns it used.
- Ask: "What could make this conclusion wrong?" Typical answers: missing months, a currency mix, one large one-off order.
- Download the cleaned file and keep it with your report, so anyone can re-check.

**Limits**

- Session files are temporary. Download what you need.
- Very large or messy files (multiple tables per sheet, merged cells) cause misreads. Simplify the sheet first.
- Follow your data rules: customer names, salaries and personal data may not belong in an AI tool at all. Anonymise first (replace names with IDs) when allowed.

#### Worked example

A finance assistant uploads 14 months of expense data. ChatGPT reports 3,412 rows and Excel shows 3,413: the difference is a total row, which they exclude. The analysis then shows travel costs up 38%, but the "what could make this wrong?" question surfaces that one month was recorded in USD, not XAF. After converting, the real increase is 9%. Without step 5, the 38% figure would have gone to the director.

#### Activity

Use a spreadsheet you are allowed to share (or a public dataset).
1. Run Step 1 and compare the row count with Excel.
2. Ask one business question with an explicit definition.
3. Recompute one figure yourself and ask "What could make this conclusion wrong?" Write down the answer.

#### Check

Take the 5-question quiz for this lesson.

---

## Français

### Titre : Analyse de données : tableurs, graphiques et chiffres défendables

**Durée :** 35 minutes

#### Contenu

Quand vous importez un tableur ou un CSV, ChatGPT peut écrire et exécuter du code Python pour l'analyser : nettoyer les données, calculer des totaux, construire des tableaux croisés, trouver des valeurs aberrantes, tracer des graphiques. C'est l'une de ses fonctions les plus précieuses au travail. C'est aussi là que les erreurs assurées coûtent le plus cher, parce que les chiffres ont l'air précis.

**Étape 1 : lui faire décrire les données avant de les analyser**

> J'ai importé ventes_2026.xlsx. Avant toute analyse :
> 1. Indique combien de lignes et de colonnes tu as chargées, et le nom des colonnes.
> 2. Montre les 5 premières lignes.
> 3. Liste les problèmes : cellules vides, doublons, dates incohérentes, texte dans des colonnes numériques, valeurs inhabituelles.
> Ne modifie rien pour l'instant.

Comparez le nombre de lignes avec ce que vous voyez dans Excel. S'ils diffèrent (feuilles masquées, en-têtes fusionnés, ligne de total en bas), corrigez d'abord cela. Tout le reste en dépend.

**Étape 2 : convenir explicitement des règles de nettoyage**

> Applique ces règles : supprime les lignes en double exact ; remplace « Région » vide par « Inconnue » ; exclus la ligne de total en bas. Indique combien de lignes chaque règle a touchées.

N'acceptez jamais « j'ai nettoyé les données » sans les chiffres.

**Étape 3 : poser la question métier, avec la méthode visible**

> Quel est le total des ventes par région et par mois, et quelle région a le plus ralenti entre le T2 et le T3 ? Montre le tableau et indique le calcul exact utilisé pour la « croissance ».

La « croissance » peut vouloir dire plusieurs choses (d'un mois à l'autre, d'un trimestre à l'autre, en valeur, en pourcentage). Rendre la définition explicite rend la réponse défendable en réunion.

**Étape 4 : des graphiques qui disent quelque chose**

> Fais un seul diagramme en barres des ventes du T3 par région, trié du plus haut au plus bas, avec un titre qui énonce la conclusion en une phrase, par ex. « Le Nord est passé derrière le Centre au T3 ». Affiche les valeurs sur les barres. Puis permets-moi de le télécharger en PNG.

Un titre qui énonce la conclusion est plus utile à un lecteur pressé que « Ventes par région ».

**Étape 5 : vérifier avant de présenter**

- Recalculez **un total** vous-même dans Excel.
- Demandez : « Montre-moi le code utilisé pour le calcul de croissance. » Même sans savoir coder, on voit généralement quelles colonnes il a utilisées.
- Demandez : « Qu'est-ce qui pourrait rendre cette conclusion fausse ? » Réponses typiques : mois manquants, mélange de devises, une grosse commande ponctuelle.
- Téléchargez le fichier nettoyé et gardez-le avec votre rapport pour que chacun puisse revérifier.

**Limites**

- Les fichiers d'une session sont temporaires. Téléchargez ce dont vous avez besoin.
- Les fichiers très volumineux ou désordonnés (plusieurs tableaux par feuille, cellules fusionnées) provoquent des erreurs de lecture. Simplifiez d'abord la feuille.
- Respectez vos règles de données : noms de clients, salaires et données personnelles n'ont parfois rien à faire dans un outil d'IA. Anonymisez d'abord (remplacez les noms par des identifiants) quand c'est autorisé.

#### Exemple détaillé

Une assistante financière importe 14 mois de données de dépenses. ChatGPT annonce 3 412 lignes, Excel en affiche 3 413 : la différence est une ligne de total, qu'elle exclut. L'analyse montre ensuite des frais de déplacement en hausse de 38 %, mais la question « qu'est-ce qui pourrait rendre cela faux ? » révèle qu'un mois a été saisi en USD et non en XAF. Après conversion, la hausse réelle est de 9 %. Sans l'étape 5, le chiffre de 38 % serait parti chez le directeur.

#### Activité

Utilisez un tableur que vous avez le droit de partager (ou un jeu de données public).
1. Faites l'étape 1 et comparez le nombre de lignes avec Excel.
2. Posez une question métier avec une définition explicite.
3. Recalculez un chiffre vous-même et demandez « Qu'est-ce qui pourrait rendre cette conclusion fausse ? ». Notez la réponse.

#### Vérification

Faites le quiz de 5 questions de cette leçon.
