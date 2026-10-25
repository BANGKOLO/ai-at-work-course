# Advanced · Lesson 1

## English

### Title: Beyond the basic prompt: examples, chaining and self-checks

**Duration:** 35 minutes

#### Content

The structured prompt (Role, Context, Task, Format, Constraints) from the Foundations track gets you a decent first answer. These six techniques get you a *reliable* one. All of them work in Claude and in ChatGPT.

**1. Show, don't describe: give examples**

Describing a style ("professional but warm") is vague. Two examples are precise:

> Write a reply to the client email below in the same style as these two past replies.
> <example_1> ... </example_1>
> <example_2> ... </example_2>
> <client_email> ... </client_email>

Pick examples that differ from each other (one short, one longer; one positive, one declining), so the AI copies the *style* and not one specific answer.

**2. Separate inputs with tags**

Whenever a prompt contains material (notes, emails, data) as well as instructions, wrap the material in labelled tags like the ones above. It prevents the AI from confusing your instructions with the content, and it lets you refer to parts precisely ("using only <data>...").

**3. Make it ask before it answers**

> Before you start, ask me up to three questions whose answers would most change your output. Wait for my answers.

For any task where you are tempted to write a long prompt, this is faster: the AI identifies what is missing.

**4. Chain: one step per message**

Complex work fails when crammed into one prompt. Split it:
1. "Extract the facts from these notes as a list. No interpretation."
2. (you check the list)
3. "Using only that list, identify the three main issues."
4. (you check)
5. "Draft a one-page memo on those issues for the director."

Each checkpoint catches an error before it gets built upon. This is how professionals get long outputs that are right.

**5. Build in a self-check**

> After drafting, check your draft against these criteria and report pass/fail for each: (a) every number appears in the source data; (b) under 200 words; (c) no promise of a delivery date; (d) answers the client's two questions. Then give the corrected version.

Self-checks are not perfect. The AI can mark something "pass" wrongly. But they catch a large share of obvious slips, and the criteria list doubles as *your* review checklist.

**6. Ask for options, then choose**

> Give me three different openings for this speech: one with a story, one with a figure, one with a question. Label them A, B, C.

Choosing between options is faster and gives better results than describing the perfect version up front. Then: "Continue with B, but use the figure from A."

**Diagnosing a bad output**

When an answer is wrong, do not just say "try again". Name the problem:
- **Too generic:** add context or examples.
- **Wrong format:** specify format with a mini-template.
- **Invented facts:** "use only the data inside <data>; write 'not available' otherwise."
- **Off-target:** state the reader and the purpose: "the reader will use this to decide X."

#### Worked example

An M&E officer needed quarterly narrative reports from field data, and the single big prompt kept producing nice-sounding text with wrong figures. She switched to a chain: extract indicators → check against the spreadsheet → identify three trends → draft. She added a self-check that every number must appear in the extracted list. Errors dropped to the occasional wording issue, and her checking time fell because each step was small enough to verify at a glance.

#### Activity

1. Take a task where AI output has disappointed you before.
2. Rebuild it as a chain of at least three steps with a checkpoint after each.
3. Add one example and one self-check.
4. Compare with your original approach. Note the time taken and the number of corrections.

#### Check

Take the 5-question quiz for this lesson.

---

## Français

### Titre : Au-delà du prompt de base : exemples, enchaînement et auto-contrôle

**Durée :** 35 minutes

#### Contenu

Le prompt structuré (Rôle, Contexte, Tâche, Format, Contraintes) du parcours Fondamentaux donne une première réponse correcte. Ces six techniques en donnent une *fiable*. Elles fonctionnent toutes dans Claude et dans ChatGPT.

**1. Montrer plutôt que décrire : donner des exemples**

Décrire un style (« professionnel mais chaleureux ») est vague. Deux exemples sont précis :

> Rédige une réponse à l'email du client ci-dessous dans le même style que ces deux réponses passées.
> <exemple_1> ... </exemple_1>
> <exemple_2> ... </exemple_2>
> <email_client> ... </email_client>

Choisissez des exemples différents l'un de l'autre (un court, un plus long ; un positif, un refus), pour que l'IA copie le *style* et non une réponse précise.

**2. Séparer les éléments avec des balises**

Dès qu'un prompt contient de la matière (notes, emails, données) en plus des consignes, entourez cette matière de balises nommées comme ci-dessus. Cela évite que l'IA confonde vos consignes avec le contenu, et permet de désigner précisément une partie (« en utilisant uniquement <donnees>... »).

**3. Lui faire poser des questions avant de répondre**

> Avant de commencer, pose-moi jusqu'à trois questions dont les réponses changeraient le plus ton résultat. Attends mes réponses.

Pour toute tâche où vous seriez tenté d'écrire un long prompt, c'est plus rapide : l'IA identifie ce qui manque.

**4. Enchaîner : une étape par message**

Un travail complexe échoue quand on l'entasse dans un seul prompt. Découpez :
1. « Extrais les faits de ces notes sous forme de liste. Aucune interprétation. »
2. (vous vérifiez la liste)
3. « À partir de cette liste uniquement, identifie les trois problèmes principaux. »
4. (vous vérifiez)
5. « Rédige une note d'une page sur ces problèmes pour le directeur. »

Chaque point de contrôle intercepte une erreur avant qu'on construise dessus. C'est ainsi que les professionnels obtiennent des textes longs et justes.

**5. Intégrer un auto-contrôle**

> Après la rédaction, vérifie ton brouillon selon ces critères et indique réussi/échoué pour chacun : (a) chaque chiffre figure dans les données sources ; (b) moins de 200 mots ; (c) aucune promesse de date de livraison ; (d) répond aux deux questions du client. Puis donne la version corrigée.

L'auto-contrôle n'est pas parfait. L'IA peut marquer « réussi » à tort. Mais il intercepte une bonne part des erreurs évidentes, et la liste de critères sert aussi de grille de relecture *pour vous*.

**6. Demander des options, puis choisir**

> Propose trois débuts différents pour ce discours : un avec une anecdote, un avec un chiffre, un avec une question. Nomme-les A, B, C.

Choisir entre des options est plus rapide et donne de meilleurs résultats que de décrire d'avance la version parfaite. Puis : « Continue avec B, mais utilise le chiffre de A. »

**Diagnostiquer un mauvais résultat**

Quand une réponse est mauvaise, ne dites pas seulement « recommence ». Nommez le problème :
- **Trop générique :** ajoutez du contexte ou des exemples.
- **Mauvais format :** précisez le format avec un mini-modèle.
- **Faits inventés :** « utilise uniquement les données dans <donnees> ; écris "non disponible" sinon. »
- **À côté du sujet :** précisez le lecteur et l'objectif : « le lecteur s'en servira pour décider X. »

#### Exemple détaillé

Une chargée de suivi-évaluation devait produire des rapports narratifs trimestriels à partir des données de terrain, et son grand prompt unique donnait un texte agréable avec des chiffres faux. Elle est passée à un enchaînement : extraire les indicateurs → vérifier avec le tableur → identifier trois tendances → rédiger. Elle a ajouté un auto-contrôle : chaque chiffre doit figurer dans la liste extraite. Les erreurs se sont réduites à quelques problèmes de formulation, et son temps de vérification a baissé car chaque étape était assez petite pour être contrôlée d'un coup d'œil.

#### Activité

1. Prenez une tâche où le résultat de l'IA vous a déjà déçu.
2. Reconstruisez-la en enchaînement d'au moins trois étapes avec un point de contrôle après chacune.
3. Ajoutez un exemple et un auto-contrôle.
4. Comparez avec votre approche initiale. Notez le temps passé et le nombre de corrections.

#### Vérification

Faites le quiz de 5 questions de cette leçon.
