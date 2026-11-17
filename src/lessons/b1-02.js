// Book 1 · Video 2 — Unit 1 (التحية والتعارف), book lesson 3 (pp. 6–7) + teacher's summary pages
// Source: Al-ʿArabiyyah Bayna Yadayk Book 1 + Al-Lisan video commentary (lesson 2 transcript)
(function () {
  // helpers to build forms with correct harakat
  const POSS = [
    { k: "my", label: "ـي my", sfx: "ِي", tr: "ī", en: "my" },
    { k: "our", label: "ـنا our", sfx: "ُنا", tr: "unā", en: "our" },
    { k: "m", label: "ـكَ your (m)", sfx: "ُكَ", tr: "uka", en: "your (to a male)" },
    { k: "f", label: "ـكِ your (f)", sfx: "ُكِ", tr: "uki", en: "your (to a female)" },
    { k: "his", label: "ـهُ his", sfx: "ُهُ", tr: "uhu", en: "his" },
    { k: "her", label: "ـها her", sfx: "ُها", tr: "uhā", en: "her" }
  ];
  const NOUNS = [
    { k: "kitab", stem: "كِتاب", tr: "kitāb", en: "book", pic: "📕" },
    { k: "qalam", stem: "قَلَم", tr: "qalam", en: "pen", pic: "🖊️" },
    { k: "bayt", stem: "بَيْت", tr: "bayt", en: "house", pic: "🏠" },
    { k: "sadiqa", stem: "صَدِيقَت", tr: "ṣadīqat", en: "friend (f)", pic: "👭", note: "صَدِيقَة ends in ة, so the ة becomes ت before the ending: صَدِيقَة → صَدِيقَتـ" }
  ];
  const possOut = {};
  NOUNS.forEach(n => POSS.forEach(p => {
    const word = n.stem + p.sfx;
    possOut[n.k + "|" + p.k] = [word, n.tr + p.tr, `${p.en} ${n.en}`, n.note || ""];
  }));

  const PEOPLE = [
    { k: "akh", ar: "أَخِي", g: "m", tr: "akhī", en: "my brother" },
    { k: "ukht", ar: "أُخْتِي", g: "f", tr: "ukhtī", en: "my sister" },
    { k: "sadiq", ar: "صَدِيقِي", g: "m", tr: "ṣadīqī", en: "my friend (m)" },
    { k: "sadiqa", ar: "صَدِيقَتِي", g: "f", tr: "ṣadīqatī", en: "my friend (f)" }
  ];
  const JOBS = [
    { k: "mudarris", m: ["مُدَرِّسٌ", "mudarris"], f: ["مُدَرِّسَةٌ", "mudarrisa"], en: "a teacher" },
    { k: "tabib", m: ["طَبِيبٌ", "ṭabīb"], f: ["طَبِيبَةٌ", "ṭabība"], en: "a doctor" },
    { k: "muhandis", m: ["مُهَنْدِسٌ", "muhandis"], f: ["مُهَنْدِسَةٌ", "muhandisa"], en: "an engineer" },
    { k: "talib", m: ["طالِبٌ", "ṭālib"], f: ["طالِبَةٌ", "ṭāliba"], en: "a student" }
  ];
  const introOut = {};
  PEOPLE.forEach(p => JOBS.forEach(j => {
    const m = p.g === "m", job = m ? j.m : j.f;
    introOut[p.k + "|" + j.k] = [
      `${m ? "هَذا" : "هَذِهِ"} ${p.ar}. ${m ? "هُوَ" : "هِيَ"} ${job[0]}.`,
      `${m ? "hādhā" : "hādhihi"} ${p.tr}. ${m ? "huwa" : "hiya"} ${job[1]}.`,
      `This is ${p.en}. ${m ? "He" : "She"} is ${j.en}.`,
      m ? "Male person → هَذا … هُوَ … and the job without ة" : "Female person → هَذِهِ … هِيَ … and the job with ة"
    ];
  }));

  LESSONS.push({
    id: "b1-02",
    book: 1,
    num: 2,
    unit: "الوَحْدَةُ الأُولَى · التَّحِيَّةُ وَالتَّعارُف",
    unitEn: "Unit 1 · Greetings & Getting to Know Each Other",
    title: "This Is My Brother: Introducing People",
    titleAr: "هَذا أَخِي",
    covers: "Book pages 6–7 · Dialogue 3 (a, b) + the teacher's summary: pronouns, question words, numbers 1–10",
    video: "https://www.youtube.com/playlist?list=PLDS9YrkKMtPR4-S3ih8wad7oXMyrdEdXY",
    goals: [
      "Introduce someone: هَذا أَخِي، هَذِهِ صَدِيقَتِي",
      "Say what someone does: هُوَ مُدَرِّسٌ، هِيَ طَبِيبَةٌ",
      "Turn a male noun into a female one with ة, and change ة to ت before an ending",
      "Use every possessive ending: my, our, your, his, her",
      "Point near and far: هَذا / ذَلِكَ · هَذِهِ / تِلْكَ",
      "Recognise the main question words and count from 1 to 10",
      "Say goodbye: مَعَ السَّلامَةِ"
    ],

    // listening drill "male or female?" for this lesson (tested on text without harakat)
    gender: { any: "هذا|هذه|هو |هي ", fem: "هذه|هي ", q: "Is this sentence about a male or a female?" },

    dialogues: [
      {
        id: "d3a", title: "Dialogue 3 (a)", titleAr: "الحِوارُ الثّالِثُ (أ)",
        note: "Aḥmad introduces his brother and his friend to Badr.",
        people: { "أَحْمَد": "m3", "بَدْر": "m2", "الأَخ": "m1" },
        lines: [
          ["أَحْمَد", "السَّلامُ عَلَيْكُمْ.", "as-salāmu ʿalaykum.", "Peace be upon you."],
          ["بَدْر", "وَعَلَيْكُمُ السَّلامُ.", "wa ʿalaykumu s-salām.", "And upon you be peace."],
          ["أَحْمَد", "هَذا أَخِي. هُوَ مُدَرِّسٌ.", "hādhā akhī. huwa mudarris.", "This is my brother. He is a teacher."],
          ["بَدْر", "أَهْلًا وَسَهْلًا.", "ahlan wa sahlan.", "Welcome! / Nice to meet you."],
          ["أَحْمَد", "هَذا صَدِيقِي. هُوَ مُهَنْدِسٌ.", "hādhā ṣadīqī. huwa muhandis.", "This is my friend. He is an engineer."],
          ["الأَخ", "أَهْلًا وَسَهْلًا.", "ahlan wa sahlan.", "Welcome! (the brother replies)"],
          ["أَحْمَد", "مَعَ السَّلامَةِ.", "maʿa s-salāma.", "Goodbye."],
          ["بَدْر", "مَعَ السَّلامَةِ.", "maʿa s-salāma.", "Goodbye."]
        ]
      },
      {
        id: "d3b", title: "Dialogue 3 (b)", titleAr: "الحِوارُ الثّالِثُ (ب)",
        note: "Nadā introduces her sister and her friend to Hudā. Notice هَذِهِ, هِيَ and the ة.",
        people: { "نَدَى": "f1", "هُدَى": "f2", "الأُخْت": "f3" },
        lines: [
          ["نَدَى", "السَّلامُ عَلَيْكُمْ.", "as-salāmu ʿalaykum.", "Peace be upon you."],
          ["هُدَى", "وَعَلَيْكُمُ السَّلامُ.", "wa ʿalaykumu s-salām.", "And upon you be peace."],
          ["نَدَى", "هَذِهِ أُخْتِي. هِيَ طَبِيبَةٌ.", "hādhihi ukhtī. hiya ṭabība.", "This is my sister. She is a doctor."],
          ["هُدَى", "أَهْلًا وَسَهْلًا.", "ahlan wa sahlan.", "Welcome! / Nice to meet you."],
          ["نَدَى", "هَذِهِ صَدِيقَتِي. هِيَ طالِبَةٌ.", "hādhihi ṣadīqatī. hiya ṭāliba.", "This is my friend. She is a student."],
          ["الأُخْت", "أَهْلًا وَسَهْلًا.", "ahlan wa sahlan.", "Welcome! (the sister replies)"],
          ["نَدَى", "مَعَ السَّلامَةِ.", "maʿa s-salāma.", "Goodbye."],
          ["هُدَى", "مَعَ السَّلامَةِ.", "maʿa s-salāma.", "Goodbye."]
        ]
      }
    ],

    vocab: [
      { ar: "أَخٌ", tr: "akh", en: "brother", pic: "👦", cat: "People" },
      { ar: "أُخْتٌ", tr: "ukht", en: "sister", pic: "👧", cat: "People" },
      { ar: "صَدِيقٌ", tr: "ṣadīq", en: "friend (m)", pic: "🧑‍🤝‍🧑", cat: "People" },
      { ar: "صَدِيقَةٌ", tr: "ṣadīqa", en: "friend (f)", pic: "👭", cat: "People" },
      { ar: "مُدَرِّسٌ", tr: "mudarris", en: "teacher (m)", pic: "👨‍🏫", cat: "Jobs" },
      { ar: "مُدَرِّسَةٌ", tr: "mudarrisa", en: "teacher (f)", pic: "👩‍🏫", cat: "Jobs", extra: true },
      { ar: "مُهَنْدِسٌ", tr: "muhandis", en: "engineer (m)", pic: "👷", cat: "Jobs" },
      { ar: "طَبِيبٌ", tr: "ṭabīb", en: "doctor (m)", pic: "👨‍⚕️", cat: "Jobs", extra: true },
      { ar: "طَبِيبَةٌ", tr: "ṭabība", en: "doctor (f)", pic: "👩‍⚕️", cat: "Jobs" },
      { ar: "طالِبٌ", tr: "ṭālib", en: "student (m)", pic: "👨‍🎓", cat: "Jobs", extra: true },
      { ar: "طالِبَةٌ", tr: "ṭāliba", en: "student (f)", pic: "👩‍🎓", cat: "Jobs" },

      { ar: "هَذا", tr: "hādhā", en: "this (m)", pic: "👇📕", cat: "Pointing" },
      { ar: "هَذِهِ", tr: "hādhihi", en: "this (f)", pic: "👇🐈", cat: "Pointing" },
      { ar: "ذَلِكَ", tr: "dhālika", en: "that (m), far away", pic: "👉📕", cat: "Pointing", extra: true },
      { ar: "تِلْكَ", tr: "tilka", en: "that (f), far away", pic: "👉🐈", cat: "Pointing", extra: true },
      { ar: "هُنا", tr: "hunā", en: "here", pic: "📍", cat: "Pointing", extra: true },
      { ar: "هُناكَ", tr: "hunāka", en: "there", pic: "🗺️", cat: "Pointing", extra: true },

      { ar: "هُوَ", tr: "huwa", en: "he", pic: "👨", cat: "Pronouns" },
      { ar: "هِيَ", tr: "hiya", en: "she", pic: "👩", cat: "Pronouns" },
      { ar: "نَحْنُ", tr: "naḥnu", en: "we", pic: "👨‍👩‍👧", cat: "Pronouns", extra: true },

      { ar: "مَعَ السَّلامَةِ", tr: "maʿa s-salāma", en: "goodbye (literally: with safety)", pic: "👋", cat: "Phrases" },
      { ar: "مَعَ", tr: "maʿa", en: "with", pic: "➕", cat: "Phrases", extra: true },
      { ar: "قِطَّةٌ", tr: "qiṭṭa", en: "cat", pic: "🐈", cat: "Phrases", extra: true },
      { ar: "بَيْتٌ", tr: "bayt", en: "house", pic: "🏠", cat: "Phrases", extra: true },

      { ar: "مَنْ", tr: "man", en: "who?", pic: "🧑❓", cat: "Questions", extra: true },
      { ar: "ماذا", tr: "mādhā", en: "what? (before a verb)", pic: "🛠️❓", cat: "Questions", extra: true },
      { ar: "لِماذا", tr: "limādhā", en: "why?", pic: "🤔", cat: "Questions", extra: true },
      { ar: "أَيُّ", tr: "ayyu", en: "which?", pic: "👈👉", cat: "Questions", extra: true },
      { ar: "مَتَى", tr: "matā", en: "when?", pic: "🕒", cat: "Questions", extra: true },
      { ar: "كَمْ", tr: "kam", en: "how many? / how much?", pic: "🔢", cat: "Questions", extra: true },

      { ar: "واحِدٌ", tr: "wāḥid", en: "one", pic: "١ · 1", cat: "Numbers", extra: true },
      { ar: "اِثْنانِ", tr: "ithnān", en: "two", pic: "٢ · 2", cat: "Numbers", extra: true },
      { ar: "ثَلاثَةٌ", tr: "thalātha", en: "three", pic: "٣ · 3", cat: "Numbers", extra: true },
      { ar: "أَرْبَعَةٌ", tr: "arbaʿa", en: "four", pic: "٤ · 4", cat: "Numbers", extra: true },
      { ar: "خَمْسَةٌ", tr: "khamsa", en: "five", pic: "٥ · 5", cat: "Numbers", extra: true },
      { ar: "سِتَّةٌ", tr: "sitta", en: "six", pic: "٦ · 6", cat: "Numbers", extra: true },
      { ar: "سَبْعَةٌ", tr: "sabʿa", en: "seven", pic: "٧ · 7", cat: "Numbers", extra: true },
      { ar: "ثَمانِيَةٌ", tr: "thamāniya", en: "eight", pic: "٨ · 8", cat: "Numbers", extra: true },
      { ar: "تِسْعَةٌ", tr: "tisʿa", en: "nine", pic: "٩ · 9", cat: "Numbers", extra: true },
      { ar: "عَشَرَةٌ", tr: "ʿashara", en: "ten", pic: "١٠ · 10", cat: "Numbers", extra: true }
    ],

    grammar: [
      {
        id: "g-this",
        title: "This is…: هَذا · هَذِهِ, and he / she: هُوَ · هِيَ",
        body: [
          "<b>هَذا</b> (hādhā) = <i>this</i>, for something or someone <b>masculine</b>: هَذا أَخِي <i>This is my brother</i>.",
          "<b>هَذِهِ</b> (hādhihi) = <i>this</i>, for something or someone <b>feminine</b>: هَذِهِ أُخْتِي <i>This is my sister</i>.",
          "<b>هُوَ</b> (huwa) = <i>he</i> and <b>هِيَ</b> (hiya) = <i>she</i>. Arabic has no word for <i>is</i> here: هُوَ مُدَرِّسٌ is literally <i>he teacher</i>, meaning <i>He is a teacher</i>.",
          "Everything must agree: a female person takes هَذِهِ, هِيَ and the job word with <b>ة</b>."
        ],
        table: { head: ["", "Arabic", "Say it", "Meaning"], rows: [
          ["👇👨", "هَذا", "hādhā", "this (m)"],
          ["👇👩", "هَذِهِ", "hādhihi", "this (f)"],
          ["👨", "هُوَ", "huwa", "he"],
          ["👩", "هِيَ", "hiya", "she"]
        ]},
        widget: {
          type: "combo", label: "Introduce someone · pick a person, then a job",
          rows: PEOPLE.map(p => ({ k: p.k, label: `${p.ar} · ${p.en}` })),
          cols: JOBS.map(j => ({ k: j.k, label: `${j.m[0].replace(/[ٌ]/g, "")} · ${j.en.replace(/^an? /, "")}` })),
          out: introOut
        }
      },
      {
        id: "g-fem",
        title: "Male → female: add ة",
        body: [
          "Most words for people and jobs become feminine when you add <b>ة</b> (tāʾ marbūṭa) at the end:",
          "مُدَرِّس → <b>مُدَرِّسَة</b> &nbsp;·&nbsp; طالِب → <b>طالِبَة</b> &nbsp;·&nbsp; طَبِيب → <b>طَبِيبَة</b> &nbsp;·&nbsp; مُهَنْدِس → <b>مُهَنْدِسَة</b> &nbsp;·&nbsp; صَدِيق → <b>صَدِيقَة</b>",
          "The teacher's example: in the picture the doctor is a woman, so the book says طَبِيبَة. Without the ة, طَبِيب is a male doctor."
        ],
        widget: {
          type: "combo", label: "Switch the gender",
          rows: [["mudarris", "مُدَرِّس", "teacher"], ["talib", "طالِب", "student"], ["tabib", "طَبِيب", "doctor"], ["muhandis", "مُهَنْدِس", "engineer"], ["sadiq", "صَدِيق", "friend"]].map(r => ({ k: r[0], label: `${r[1]} · ${r[2]}` })),
          cols: [{ k: "m", label: "👨 male" }, { k: "f", label: "👩 female (+ة)" }],
          out: {
            "mudarris|m": ["مُدَرِّسٌ", "mudarris", "teacher (m)"], "mudarris|f": ["مُدَرِّسَةٌ", "mudarrisa", "teacher (f)"],
            "talib|m": ["طالِبٌ", "ṭālib", "student (m)"], "talib|f": ["طالِبَةٌ", "ṭāliba", "student (f)"],
            "tabib|m": ["طَبِيبٌ", "ṭabīb", "doctor (m)"], "tabib|f": ["طَبِيبَةٌ", "ṭabība", "doctor (f)"],
            "muhandis|m": ["مُهَنْدِسٌ", "muhandis", "engineer (m)"], "muhandis|f": ["مُهَنْدِسَةٌ", "muhandisa", "engineer (f)"],
            "sadiq|m": ["صَدِيقٌ", "ṣadīq", "friend (m)"], "sadiq|f": ["صَدِيقَةٌ", "ṣadīqa", "friend (f)"]
          }
        }
      },
      {
        id: "g-ta",
        title: "ة turns into ت before an ending",
        body: [
          "The teacher's rule: when a word ends in <b>ة</b> and you add an ending such as <i>my</i>, <i>your</i> or <i>her</i>, the ة becomes an ordinary <b>ت</b>.",
          "صَدِيقَة + ي → <b>صَدِيقَتِي</b> (my friend, f) &nbsp;·&nbsp; مُدَرِّسَة + ي → <b>مُدَرِّسَتِي</b> &nbsp;·&nbsp; طالِبَة + ي → <b>طالِبَتِي</b>",
          "This is why the dialogue says هَذِهِ صَدِيقَتِي, with a ت in the middle."
        ],
        table: { head: ["", "Arabic", "Say it", "Meaning"], rows: [
          ["👭", "صَدِيقَتِي", "ṣadīqatī", "my friend (f)"],
          ["👩‍🏫", "مُدَرِّسَتِي", "mudarrisatī", "my teacher (f)"],
          ["👩‍🎓", "طالِبَتُكَ", "ṭālibatuka", "your student (f), said to a male"],
          ["🐈", "قِطَّتُها", "qiṭṭatuhā", "her cat"]
        ]}
      },
      {
        id: "g-pron",
        title: "Personal pronouns so far",
        body: [
          "The teacher's summary page. <b>نَحْنُ</b> (naḥnu) = <i>we</i> is new: نَحْنُ فِي مِصْرَ <i>We are in Egypt</i>, and نَحْنُ بِخَيْرٍ <i>We are well</i>.",
          "Example: أَنْتِ طَبِيبَةٌ <i>You are a doctor</i>, said to a woman."
        ],
        table: { head: ["", "Arabic", "Say it", "Meaning"], rows: [
          ["🙋", "أَنا", "anā", "I"],
          ["👨‍👩‍👧", "نَحْنُ", "naḥnu", "we"],
          ["👉👨", "أَنْتَ", "anta", "you (m)"],
          ["👉👩", "أَنْتِ", "anti", "you (f)"],
          ["👨", "هُوَ", "huwa", "he"],
          ["👩", "هِيَ", "hiya", "she"]
        ]}
      },
      {
        id: "g-poss",
        title: "Possessive endings: my · our · your · his · her",
        body: [
          "Lesson 1 had ـي, ـكَ and ـكِ. The full set from the teacher's summary:",
          "<b>ـي</b> my · <b>ـنا</b> our · <b>ـكَ</b> your (m) · <b>ـكِ</b> your (f) · <b>ـهُ</b> his · <b>ـها</b> her",
          "The teacher's examples: قَلَمِي (my pen), كِتابُنا and رَبُّنا (our book, our Lord), اِسْمُكَ (your name), بَيْتُهُ and رَبُّهُ (his house, his Lord), قَلَمُها and كِتابُها (her pen, her book)."
        ],
        widget: {
          type: "combo", label: "Build it yourself · pick a noun, then an ending",
          rows: NOUNS.map(n => ({ k: n.k, label: `${n.pic} ${n.en}` })),
          cols: POSS.map(p => ({ k: p.k, label: p.label })),
          out: possOut
        }
      },
      {
        id: "g-far",
        title: "Near and far: هَذا / ذَلِكَ · هَذِهِ / تِلْكَ",
        body: [
          "هَذا and هَذِهِ point at something <b>close</b> (<i>this</i>). For something <b>far away</b> (<i>that</i>), use:",
          "<b>ذَلِكَ</b> (dhālika) for masculine and <b>تِلْكَ</b> (tilka) for feminine.",
          "The teacher's examples: هَذا كِتابٌ <i>This is a book</i> (next to me), ذَلِكَ كِتابٌ <i>That is a book</i> (over there). For قِطَّة (cat), which is feminine: هَذِهِ قِطَّتِي and تِلْكَ قِطَّتِي."
        ],
        widget: {
          type: "combo", label: "Point at it · pick a thing, then near or far",
          rows: [{ k: "kitab", label: "📕 book (m)" }, { k: "qalam", label: "🖊️ pen (m)" }, { k: "qitta", label: "🐈 my cat (f)" }, { k: "talib", label: "👩‍🎓 student (f)" }],
          cols: [{ k: "near", label: "👇 near: this" }, { k: "far", label: "👉 far: that" }],
          out: {
            "kitab|near": ["هَذا كِتابٌ.", "hādhā kitāb.", "This is a book."], "kitab|far": ["ذَلِكَ كِتابٌ.", "dhālika kitāb.", "That is a book."],
            "qalam|near": ["هَذا قَلَمٌ.", "hādhā qalam.", "This is a pen."], "qalam|far": ["ذَلِكَ قَلَمٌ.", "dhālika qalam.", "That is a pen."],
            "qitta|near": ["هَذِهِ قِطَّتِي.", "hādhihi qiṭṭatī.", "This is my cat."], "qitta|far": ["تِلْكَ قِطَّتِي.", "tilka qiṭṭatī.", "That is my cat."],
            "talib|near": ["هَذِهِ طالِبَةٌ.", "hādhihi ṭāliba.", "This is a student (f)."], "talib|far": ["تِلْكَ طالِبَةٌ.", "tilka ṭāliba.", "That is a student (f)."]
          }
        }
      },
      {
        id: "g-q",
        title: "Question words: the full list",
        body: [
          "From the teacher's summary page. You don't need to use all of them yet, but learn to recognise them. They come up again and again in the book.",
          "<b>ما</b> and <b>ماذا</b> both mean <i>what</i>. ماذا usually comes before a verb: ماذا تَفْعَلُ؟ <i>What are you doing?</i>",
          "<b>هَلْ</b> still has no translation. It only starts a yes/no question."
        ],
        table: { head: ["", "Arabic", "Say it", "Meaning · example"], rows: [
          ["❓", "ما", "mā", "what? · ما اسْمُكَ؟ What's your name?"],
          ["🛠️", "ماذا", "mādhā", "what? (before verbs) · ماذا تَفْعَلُ؟ What are you doing?"],
          ["🤔", "لِماذا", "limādhā", "why? · لِماذا أَنْتَ هُنا؟ Why are you here?"],
          ["👈👉", "أَيُّ", "ayyu", "which? · أَيُّ قَلَمٍ؟ Which pen?"],
          ["🧑", "مَنْ", "man", "who? · مَنْ هَذا؟ Who is this (m)? · مَنْ هَذِهِ؟ Who is this (f)?"],
          ["📍", "أَيْنَ", "ayna", "where? · أَيْنَ أَحْمَدُ؟ Where is Aḥmad?"],
          ["🕒", "مَتَى", "matā", "when?"],
          ["🙂", "كَيْفَ", "kayfa", "how? · كَيْفَ حالُكَ؟ How are you?"],
          ["⁉️", "هَلْ", "hal", "(yes/no) · هَلْ أَنْتَ مِصْرِيٌّ؟ Are you Egyptian?"],
          ["🔢", "كَمْ", "kam", "how many? · كَمْ قَلَمًا لَدَيْكَ؟ How many pens do you have?"]
        ]}
      },
      {
        id: "g-num",
        title: "Numbers 1–10",
        body: [
          "The teacher says to read them again and again, and write them down until you know them by heart. Notice the Arabic digits: these are the forms printed on the page numbers of your book.",
          "Practise counting up and down out loud. You'll be tested on them in the Listening tab."
        ],
        table: { head: ["", "Arabic", "Say it", "Number"], rows: [
          ["١", "واحِدٌ", "wāḥid", "1"], ["٢", "اِثْنانِ", "ithnān", "2"], ["٣", "ثَلاثَةٌ", "thalātha", "3"],
          ["٤", "أَرْبَعَةٌ", "arbaʿa", "4"], ["٥", "خَمْسَةٌ", "khamsa", "5"], ["٦", "سِتَّةٌ", "sitta", "6"],
          ["٧", "سَبْعَةٌ", "sabʿa", "7"], ["٨", "ثَمانِيَةٌ", "thamāniya", "8"], ["٩", "تِسْعَةٌ", "tisʿa", "9"],
          ["١٠", "عَشَرَةٌ", "ʿashara", "10"]
        ]}
      }
    ],

    sounds: {
      intro: "New sounds in this lesson's words. Two of them, ذ and ث, are like the two ways English says “th”. Tap, listen and repeat, using the slow speed first.",
      letters: [
        { l: "ذ", name: "dhāl", tip: "The “th” in “this” and “that”, with the tongue between the teeth and the sound voiced. Handy, because هَذا means “this”!", ex: ["هَذا", "هَذِهِ", "ذَلِكَ", "ماذا"] },
        { l: "ث", name: "thāʾ", tip: "The “th” in “think” and “three”, with no voice. ثَلاثَة (three) has two of them.", ex: ["ثَلاثَةٌ", "ثَمانِيَةٌ", "اِثْنانِ"] },
        { l: "ط", name: "ṭāʾ", tip: "A heavy t. Press the tongue up and back and lower the jaw, and the vowels after it sound deeper. Compare it with the light ت.", ex: ["طَبِيبَةٌ", "طالِبَةٌ", "قِطَّةٌ"] },
        { l: "ص", name: "ṣād", tip: "A heavy s, the partner of ط. Your mouth feels “full”.", ex: ["صَدِيقٌ", "صَدِيقَتِي"] },
        { l: "ع", name: "ʿayn", tip: "The throat squeeze from Lesson 1. It appears in مَعَ and in three of the numbers.", ex: ["مَعَ السَّلامَةِ", "أَرْبَعَةٌ", "سَبْعَةٌ", "تِسْعَةٌ", "عَشَرَةٌ"] },
        { l: "ة / ت", name: "tāʾ marbūṭa → tāʾ", tip: "At the end of a word ة sounds like “-a”. Once an ending is added it becomes ت and you hear a clear “t”: ṣadīqa → ṣadīqatī.", ex: ["صَدِيقَةٌ", "صَدِيقَتِي", "قِطَّتُها"] }
      ],
      pairs: [
        { a: ["هَذا", "hādhā", "this (m)"], b: ["هَذِهِ", "hādhihi", "this (f)"], note: "m vs f" },
        { a: ["هُوَ", "huwa", "he"], b: ["هِيَ", "hiya", "she"], note: "u vs i" },
        { a: ["أَخِي", "akhī", "my brother"], b: ["أُخْتِي", "ukhtī", "my sister"], note: "m vs f" },
        { a: ["تِينٌ", "tīn", "figs"], b: ["طِينٌ", "ṭīn", "mud"], note: "ت vs ط" },
        { a: ["سَيْفٌ", "sayf", "sword"], b: ["صَيْفٌ", "ṣayf", "summer"], note: "س vs ص" },
        { a: ["ذَلِكَ", "dhālika", "that (m)"], b: ["تِلْكَ", "tilka", "that (f)"], note: "m vs f, far" }
      ]
    },

    tips: [
      { icon: "🧠", t: "Memorise words early", d: "The teacher's main warning: don't put off learning the vocabulary. A solid base makes every later lesson easier. Do the Review tab every day." },
      { icon: "👇", t: "هَذا for him, هَذِهِ for her", d: "هَذا points at something masculine and هَذِهِ at something feminine. The word you point at decides which one you use." },
      { icon: "🎩", t: "ة means female", d: "طَبِيب is a male doctor and طَبِيبَة a female one. The same goes for طالِب / طالِبَة and صَدِيق / صَدِيقَة." },
      { icon: "🔁", t: "ة becomes ت before an ending", d: "صَدِيقَة + ي = صَدِيقَتِي. The round ة opens into an ordinary ت whenever something is added after it." },
      { icon: "👋", t: "مَعَ السَّلامَةِ means “go with safety”", d: "مَعَ = with and سَلامَة = safety, so it's like saying “be safe”. It's the everyday goodbye, and the reply is the same phrase." },
      { icon: "📏", t: "Near vs far", d: "هَذا / هَذِهِ for things close to you, ذَلِكَ / تِلْكَ for things over there. Likewise هُنا (here) vs هُناكَ (there)." },
      { icon: "❓", t: "ما vs ماذا", d: "Both mean “what”. ماذا tends to come before a verb: ماذا تَفْعَلُ؟ What are you doing?" },
      { icon: "✍️", t: "Write the numbers by hand", d: "Read 1–10 aloud again and again and write them down, including the Arabic digits ١ ٢ ٣ …, until you know them by heart." }
    ],

    practice: [
      { type: "mcq", q: "Aḥmad introduces his BROTHER. He says: ___ أَخِي.", options: ["هَذِهِ", "هَذا", "هِيَ"], answer: 1, explain: "أَخ (brother) is masculine, so use هَذا." },
      { type: "mcq", q: "Nadā introduces her SISTER. She says: ___ أُخْتِي.", options: ["هَذا", "هُوَ", "هَذِهِ"], answer: 2, explain: "أُخْت (sister) is feminine, so use هَذِهِ." },
      { type: "mcq", q: "The sister is a doctor. Complete: هِيَ ___", options: ["طَبِيبٌ", "طَبِيبَةٌ", "طَبِيبِي"], answer: 1, explain: "She is female, so the job takes ة." },
      { type: "mcq", q: "How do you say “my friend” to mean a female friend?", options: ["صَدِيقَةِي", "صَدِيقِي", "صَدِيقَتِي"], answer: 2, explain: "ة becomes ت before an ending: صَدِيقَة → صَدِيقَتِي." },
      { type: "mcq", q: "What does مَعَ السَّلامَةِ literally mean?", options: ["peace be upon you", "with safety", "welcome"], answer: 1, explain: "مَعَ = with, سَلامَة = safety. It is the everyday “goodbye”." },
      { type: "mcq", q: "A book is far away from you. You say: ___ كِتابٌ.", options: ["هَذا", "ذَلِكَ", "تِلْكَ"], answer: 1, explain: "Far + masculine = ذَلِكَ. تِلْكَ is far + feminine." },
      { type: "mcq", q: "Which ending means “her”?", options: ["ـهُ", "ـها", "ـنا"], answer: 1, explain: "ـها = her, ـهُ = his, ـنا = our." },
      { type: "mcq", q: "كِتابُنا means…", options: ["my book", "our book", "his book"], answer: 1 },
      { type: "mcq", q: "Which question word means “why?”", options: ["لِماذا", "ماذا", "مَتَى"], answer: 0 },
      { type: "mcq", q: "Which question word means “who?”", options: ["ما", "مَنْ", "مِنْ"], answer: 1, explain: "Careful: مَنْ (man) = who, but مِنْ (min) = from." },
      { type: "mcq", q: "What is نَحْنُ?", options: ["we", "he", "here"], answer: 0 },
      { type: "fill", sentence: "هَذا صَدِيقِي. ___ مُهَنْدِسٌ.", en: "This is my friend. He is an engineer.", options: ["هِيَ", "هُوَ", "أَنا"], answer: 1 },
      { type: "fill", sentence: "هَذِهِ صَدِيقَتِي. هِيَ ___.", en: "This is my friend. She is a student.", options: ["طالِبٌ", "طالِبَةٌ", "طالِبِي"], answer: 1 },
      { type: "fill", sentence: "___ قِطَّتِي.", en: "That is my cat. (far away)", options: ["ذَلِكَ", "هَذا", "تِلْكَ"], answer: 2 },
      { type: "order", words: ["هَذا", "أَخِي."], en: "This is my brother." },
      { type: "order", words: ["هِيَ", "طَبِيبَةٌ."], en: "She is a doctor." },
      { type: "order", words: ["هَذِهِ", "صَدِيقَتِي."], en: "This is my friend (f)." },
      { type: "order", words: ["لِماذا", "أَنْتَ", "هُنا؟"], en: "Why are you here?" },
      { type: "reply", prompt: "مَعَ السَّلامَةِ.", en: "Choose a logical reply", options: ["أَهْلًا وَسَهْلًا.", "مَعَ السَّلامَةِ.", "هُوَ مُدَرِّسٌ."], answer: 1 },
      { type: "reply", prompt: "هَذا صَدِيقِي.", en: "Choose a logical reply", options: ["أَهْلًا وَسَهْلًا.", "وَعَلَيْكُمُ السَّلامُ.", "نَعَمْ، هِيَ طالِبَةٌ."], answer: 0 },
      { type: "reply", prompt: "مَنْ هَذِهِ؟", en: "Choose a logical reply", options: ["هَذا أَخِي.", "هَذِهِ أُخْتِي.", "هُوَ مُهَنْدِسٌ."], answer: 1 },
      { type: "listen", q: "Which number did you hear?", say: "ثَلاثَةٌ", options: ["3", "8", "2", "6"], answer: 0 },
      { type: "listen", q: "Which number did you hear?", say: "سَبْعَةٌ", options: ["9", "7", "4", "1"], answer: 1 },
      { type: "listen", q: "Which number did you hear?", say: "عَشَرَةٌ", options: ["5", "2", "10", "6"], answer: 2 },
      { type: "listen", q: "Which number did you hear?", say: "ثَمانِيَةٌ", options: ["3", "6", "4", "8"], answer: 3 }
    ],

    roleplay: [
      { them: "السَّلامُ عَلَيْكُمْ.", you: "وَعَلَيْكُمُ السَّلامُ.", hint: "Return the greeting" },
      { them: "مَنْ هَذا؟", you: "هَذا أَخِي. هُوَ … (job)", hint: "Introduce your brother and say his job" },
      { them: "أَهْلًا وَسَهْلًا. وَمَنْ هَذِهِ؟", you: "هَذِهِ صَدِيقَتِي. هِيَ … (job + ة)", hint: "Introduce a female friend, and remember the ة" },
      { them: "هَلْ هِيَ طَبِيبَةٌ؟", you: "نَعَمْ، هِيَ طَبِيبَةٌ. / لا، هِيَ طالِبَةٌ.", hint: "Answer yes or no" },
      { them: "هَلْ أَنْتَ طالِبٌ؟", you: "نَعَمْ، أَنا طالِبٌ. / لا، أَنا …", hint: "Talk about yourself" },
      { them: "مَعَ السَّلامَةِ.", you: "مَعَ السَّلامَةِ.", hint: "Say goodbye" }
    ]
  });
})();
