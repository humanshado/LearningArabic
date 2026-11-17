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
- [ ] Book 1 · Videos 3–40 (Chapters 1–8 are in Book 1 Part 1; Chapters 9–16 are in Book 1 Part 2)
- [ ] Books 2–4
