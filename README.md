# AI for All / L'IA pour tous

A free, bilingual (English/French) course that takes the mystery out of AI, for everyone: the time to run away from AI is over. It teaches people to use Claude and ChatGPT with confidence, in daily life and at work. It has 24 lessons in four tracks:

1. **Foundations** (5 lessons). Learners who pass a lesson's quiz can skip it ("test out").
2. **Claude in practice** (6): setup and privacy, long documents, Projects, artifacts and file creation, web search/Research/connectors, Claude as a thinking partner.
3. **ChatGPT in practice** (6): setup and data controls, data analysis, Canvas, Projects and custom GPTs, search and deep research, voice/images/tasks/agent mode.
4. **Advanced daily workflows** (7): prompt chaining and self-checks, a daily AI routine, a data → report → slides pipeline, choosing and cross-checking tools, automation with a human in the loop, a measured AI playbook, and a live workshop.

- **Start here:** `index.html`, the course overview and pricing
- **Lesson site:** `site/index.html`, the course itself (mobile-first, no signup). It also opens straight from disk, with no server needed.
- **Printable workbook:** `workbook/workbook.html`

No personal data is collected. Progress, the chosen pace and the certificate name are stored only in your own browser.

Learners get a printable certificate of completion once they pass all 24 lesson quizzes (80% pass mark). It is generated in their browser and states completion only.

This is an independent course. It is not affiliated with or endorsed by Anthropic or OpenAI.

## Editing the track lessons

Track lessons are written in `content/tracks/*.md`, and their quizzes in `quizzes/tracks/*.json`. After editing, rebuild the site data:

```
node scripts/generate-tracks-data.js
```

This writes `site/tracks-data.js`. The script checks that every quiz question has both languages and a valid answer. It also reorders answer options in a fixed, repeatable way so the correct answer is not always in the same position. `content/tracks/plans.md` replaces the original pacing-plans page.

The five Foundations lessons live in `site/content-data.js` and `site/quiz-data.js` and are edited by hand. The 22 units retired from the original 28-unit course are kept in `archive/retired-units.json`, which the site does not load.

Claude and ChatGPT change often. Review the Claude and ChatGPT tracks every quarter against each vendor's help centre.
