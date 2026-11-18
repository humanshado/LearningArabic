# Learning Arabic: interactive course

Interactive lessons for **Al-ʿArabiyyah Bayna Yadayk** (العربية بين يديك), Books 1–4. They follow the
[Al-Lisan video series](https://www.youtube.com/playlist?list=PLDS9YrkKMtPR4-S3ih8wad7oXMyrdEdXY).

Each lesson page has the following sections:

| Section | What you do |
|---|---|
| 💬 Dialogues | Read the book's dialogues with illustrations, audio, transliteration and translation. **Shadow mode** pauses after each line so you can repeat it. **Hide text** turns a dialogue into a listening test. |
| 🗂️ Vocabulary | Browse word cards by category, then study them as flashcards in either direction (spaced repetition). |
| 🧩 Grammar | Read the rules from the video, with builders you can click: possessive endings and nationality endings. |
| 🗣️ Pronunciation | Practise hard letters, minimal pairs, a "which did you hear?" game, and record yourself. |
| 🎧 Listening | Answer audio-only quizzes on words, dialogue lines, and whether a sentence is masculine or feminine. |
| ✍️ Quiz | Answer multiple choice, fill-in-the-blank, sentence-building, logical-reply and matching questions. |
| 🎙️ Speaking | Role-play a conversation with model answers. |
| 💡 Teacher's tips | Read the memory aids and warnings from the video. |
| 🔁 Review | See your progress and the words that are due for review. |

Audio comes from the browser's Arabic text-to-speech voice. Progress is saved in your browser's localStorage.

## Tests

The teacher sets a test after every two units. Each test page (`src/tests/<id>.js`) has three tabs:

- **📘 Book test:** an interactive version of the book's *اختبر نفسك* page, with the same six question types and the same marks. You can check each section on its own, and the answers come with the teacher's explanations.
- **🎯 Mastery test:** about 30 new randomised questions on each attempt, drawn from all the lessons the test covers (vocabulary, listening, grammar and dialogues).
- **📈 Results:** your attempt history, your best scores, and the lessons to revise first.

To add a test, copy `src/tests/b1-t1.js`. Set `covers` to the lesson ids, `after` to the lesson it follows, and fill in the sections. The section types are `sort`, `fill`, `odd`, `correct`, `match` and `choose`.

## Use it

Enable **GitHub Pages**: Settings → Pages → Deploy from a branch → `main`, folder `/docs`.
Then open `https://humanshado.github.io/LearningArabic/`. You can also open `docs/index.html` locally.

## Structure

```
src/engine.js          shared lesson engine (all features)
src/style.css          shared styles
src/lessons/b1-01.js   lesson content: Book 1, video 1 (one file per video)
build.py               builds docs/ (site + index) or dist/ (--standalone pages)
docs/                  built site served by GitHub Pages
```

## Add a lesson

1. Copy `src/lessons/b1-01.js` to `src/lessons/b1-02.js` and replace the content: dialogues, vocab, grammar, sounds, tips, practice and roleplay.
2. Run `python3 build.py`. The new lesson appears on the course home page.

## Progress

- [x] Book 1 · Video 1: Greetings, names and nationalities (book pp. 2–5)
- [x] Book 1 · Video 2: Introducing people, pronouns, question words, numbers 1–10 (book pp. 6–7)
- [x] Book 1 · Video 3: My family (Unit 2, pp. 28–31)
- [x] Book 1 · Video 4: Where are the children? Big/small, plurals (pp. 32–33)
- [x] Book 1 · Video 5: Present-tense verbs (teacher's special lesson)
- [x] Book 1 · Test 1: Units 1–2 (pp. 53–54)
- [ ] Book 1 · Videos 7–40 (Chapters 1–8 are in Book 1 Part 1; Chapters 9–16 are in Book 1 Part 2)
- [ ] Books 2–4
