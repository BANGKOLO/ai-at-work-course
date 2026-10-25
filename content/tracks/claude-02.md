# Claude · Lesson 2

## English

### Title: Long documents and files: getting answers you can trust

**Duration:** 35 minutes

#### Content

Claude can read long documents: contracts, tenders, policy manuals, annual reports, spreadsheets, scanned PDFs. Reading is not the hard part. The hard part is getting answers you can check in seconds rather than re-reading 60 pages to verify them.

**The rule: quotes first, then answer**

Ask Claude to extract the exact passages before it interprets them. This turns a confident summary into a checkable one.

> I have attached our supplier contract (PDF).
> Step 1: Quote, word for word, every clause that deals with late delivery, penalties or termination. Give the clause number for each.
> Step 2: Using only those quotes, explain in plain language what happens if the supplier delivers 10 days late.
> If the contract does not answer the question, say so — do not fill the gap with general legal knowledge.

You can now check Step 2 against Step 1 in under a minute, and check Step 1 against the PDF by searching for the clause number.

**Label multiple documents clearly**

When you upload several files, refer to each by name and ask Claude to say which file each point comes from. For pasted text, wrap each document in simple tags so nothing blurs together:

> <offer_A> ...paste... </offer_A>
> <offer_B> ...paste... </offer_B>
> Compare the two offers in a table: price, delivery time, payment terms, warranty. Add a column "Source" giving the document and section for each cell. Mark "not stated" where a document is silent.

Claude follows tags well. The "not stated" instruction is what stops it from guessing.

**Put the question after the document**

For very long material, paste or attach the document first and put your question at the end. Answers are noticeably more accurate that way.

**Spreadsheets and CSV files**

Claude can run code to analyse uploaded spreadsheets: totals, pivots, charts, outliers. Always ask it to state the row count it loaded and to show the formula or method behind each figure. If the row count is wrong, nothing after it can be trusted.

**Scans and images**

Claude reads photos of documents, whiteboards and screenshots. Handwriting and low-quality scans cause misreads, especially in numbers. For anything financial, ask Claude to transcribe the figures in a table first, check that table yourself, and only then ask for analysis.

**Know the limits**

- Very large files may be truncated or summarised internally. Ask: "Did you read the whole document? What is the last section heading you can see?"
- Claude does not know your organisation's unwritten context. A contract clause that looks harmless may conflict with a side agreement it has never seen.
- A contract, legal or medical reading is a first pass for you to check, not advice. Escalate to the person accountable.

#### Worked example

A procurement officer receives three tender responses of 40 pages each. She uploads all three and asks for a comparison table with a source column and "not stated" markings. Claude flags that one bidder never states a warranty period. That gap would have been easy to miss reading manually at 6 p.m. She checks four cells at random against the PDFs, finds them correct, and sends a clarification request to the bidder the same day.

#### Activity

Take a real document of at least 10 pages that you are allowed to share with an AI tool (a public annual report or policy works well).
1. Ask a question using the quotes-first pattern.
2. Verify three of the quotes against the source.
3. Ask the "did you read the whole document?" question and note the answer.

#### Check

Take the 5-question quiz for this lesson.

---

## Français

### Titre : Documents longs et fichiers : obtenir des réponses fiables

**Durée :** 35 minutes

#### Contenu

Claude sait lire des documents longs : contrats, appels d'offres, manuels de procédures, rapports annuels, tableurs, PDF scannés. La lecture n'est pas la difficulté. La difficulté, c'est d'obtenir des réponses vérifiables en quelques secondes, au lieu de relire 60 pages pour les contrôler.

**La règle : d'abord les citations, ensuite la réponse**

Demandez à Claude d'extraire les passages exacts avant de les interpréter. Un résumé assuré devient ainsi un résumé vérifiable.

> J'ai joint notre contrat fournisseur (PDF).
> Étape 1 : Cite, mot pour mot, chaque clause qui traite des retards de livraison, des pénalités ou de la résiliation. Donne le numéro de chaque clause.
> Étape 2 : En utilisant uniquement ces citations, explique simplement ce qui se passe si le fournisseur livre avec 10 jours de retard.
> Si le contrat ne répond pas à la question, dis-le — ne comble pas le vide avec des connaissances juridiques générales.

Vous pouvez maintenant contrôler l'étape 2 avec l'étape 1 en moins d'une minute, et l'étape 1 avec le PDF en cherchant le numéro de clause.

**Nommer clairement plusieurs documents**

Quand vous joignez plusieurs fichiers, désignez chacun par son nom et demandez à Claude d'indiquer de quel fichier vient chaque point. Pour du texte collé, entourez chaque document de balises simples pour que rien ne se mélange :

> <offre_A> ...coller... </offre_A>
> <offre_B> ...coller... </offre_B>
> Compare les deux offres dans un tableau : prix, délai de livraison, conditions de paiement, garantie. Ajoute une colonne « Source » indiquant le document et la section pour chaque cellule. Indique « non précisé » quand un document ne dit rien.

Claude respecte bien les balises. La consigne « non précisé » est ce qui l'empêche de deviner.

**Mettre la question après le document**

Pour un document très long, collez ou joignez d'abord le document et placez votre question à la fin. Les réponses sont nettement plus exactes ainsi.

**Tableurs et fichiers CSV**

Claude peut exécuter du code pour analyser un tableur importé : totaux, tableaux croisés, graphiques, valeurs aberrantes. Demandez-lui toujours d'indiquer le nombre de lignes chargées et de montrer la formule ou la méthode derrière chaque chiffre. Si le nombre de lignes est faux, rien de ce qui suit n'est fiable.

**Scans et images**

Claude lit des photos de documents, de tableaux blancs et des captures d'écran. L'écriture manuscrite et les scans de mauvaise qualité provoquent des erreurs de lecture, surtout sur les chiffres. Pour tout ce qui est financier, demandez d'abord à Claude de retranscrire les chiffres dans un tableau, vérifiez ce tableau vous-même, et seulement ensuite demandez l'analyse.

**Connaître les limites**

- Les très gros fichiers peuvent être tronqués ou résumés en interne. Demandez : « As-tu lu tout le document ? Quel est le dernier titre de section que tu vois ? »
- Claude ne connaît pas le contexte non écrit de votre organisation. Une clause anodine en apparence peut contredire un accord annexe qu'il n'a jamais vu.
- Une lecture juridique, contractuelle ou médicale est une première analyse à vérifier, pas un avis. Remontez à la personne responsable.

#### Exemple détaillé

Une acheteuse reçoit trois réponses à un appel d'offres de 40 pages chacune. Elle les joint toutes et demande un tableau comparatif avec colonne source et mentions « non précisé ». Claude signale qu'un soumissionnaire n'indique jamais de durée de garantie. C'est le genre d'oubli qu'on rate facilement en lisant à 18 h. Elle vérifie quatre cellules au hasard dans les PDF, les trouve exactes, et envoie une demande de précision au soumissionnaire le jour même.

#### Activité

Prenez un vrai document d'au moins 10 pages que vous avez le droit de partager avec un outil d'IA (un rapport annuel public ou une politique publique conviennent bien).
1. Posez une question avec la méthode « citations d'abord ».
2. Vérifiez trois citations dans la source.
3. Posez la question « as-tu lu tout le document ? » et notez la réponse.

#### Vérification

Faites le quiz de 5 questions de cette leçon.
