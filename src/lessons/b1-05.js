// Book 1 · Video 5 — Teacher's special video on verbs: الفعل المضارع (present / future tense)
// Not from the book pages: rebuilt from the teacher's own slides as described in the audio (lesson 5 transcript)
(function () {
  const PERSONS = [
    { k: "ana", ar: "أَنا", en: "I", tag: "I" },
    { k: "nahnu", ar: "نَحْنُ", en: "we", tag: "we" },
    { k: "anta", ar: "أَنْتَ", en: "you (m)", tag: "you (m)" },
    { k: "anti", ar: "أَنْتِ", en: "you (f)", tag: "you (f)" },
    { k: "huwa", ar: "هُوَ", en: "he", tag: "he" },
    { k: "hiya", ar: "هِيَ", en: "she", tag: "she" }
  ];
  // [ar, translit] per person, in PERSONS order
  const VERBS = [
    { k: "faal", en: "do", ing: "doing", pic: "🛠️", forms: [["أَفْعَلُ", "afʿalu"], ["نَفْعَلُ", "nafʿalu"], ["تَفْعَلُ", "tafʿalu"], ["تَفْعَلِينَ", "tafʿalīna"], ["يَفْعَلُ", "yafʿalu"], ["تَفْعَلُ", "tafʿalu"]] },
    { k: "qara", en: "read", ing: "reading", pic: "📖", forms: [["أَقْرَأُ", "aqraʾu"], ["نَقْرَأُ", "naqraʾu"], ["تَقْرَأُ", "taqraʾu"], ["تَقْرَئِينَ", "taqraʾīna"], ["يَقْرَأُ", "yaqraʾu"], ["تَقْرَأُ", "taqraʾu"]] },
    { k: "kataba", en: "write", ing: "writing", pic: "✍️", forms: [["أَكْتُبُ", "aktubu"], ["نَكْتُبُ", "naktubu"], ["تَكْتُبُ", "taktubu"], ["تَكْتُبِينَ", "taktubīna"], ["يَكْتُبُ", "yaktubu"], ["تَكْتُبُ", "taktubu"]] },
    { k: "wudu", en: "do wuḍūʾ", ing: "doing wuḍūʾ", pic: "💧", forms: [["أَتَوَضَّأُ", "atawaḍḍaʾu"], ["نَتَوَضَّأُ", "natawaḍḍaʾu"], ["تَتَوَضَّأُ", "tatawaḍḍaʾu"], ["تَتَوَضَّئِينَ", "tatawaḍḍaʾīna"], ["يَتَوَضَّأُ", "yatawaḍḍaʾu"], ["تَتَوَضَّأُ", "tatawaḍḍaʾu"]] },
    { k: "salla", en: "pray", ing: "praying", pic: "🧎", forms: [["أُصَلِّي", "uṣallī"], ["نُصَلِّي", "nuṣallī"], ["تُصَلِّي", "tuṣallī"], ["تُصَلِّينَ", "tuṣallīna"], ["يُصَلِّي", "yuṣallī"], ["تُصَلِّي", "tuṣallī"]] }
  ];
  const PREFIX = { ana: "أ", nahnu: "ن", anta: "ت", anti: "ت … ينَ", huwa: "ي", hiya: "ت" };
  const conjOut = {}, futOut = {};
  VERBS.forEach(v => PERSONS.forEach((p, i) => {
    const [a, t] = v.forms[i];
    const be = { ana: "am", nahnu: "are", anta: "are", anti: "are", huwa: "is", hiya: "is" }[p.k];
    conjOut[v.k + "|" + p.k] = [`${p.ar} ${a}`, `${p.k === "ana" ? "anā" : p.k === "nahnu" ? "naḥnu" : p.k} ${t}`, `${p.en} ${be} ${v.ing}`, `Starts with ${PREFIX[p.k]}${p.k === "anti" ? " (the extra ينَ marks a female “you”)" : ""}`];
    futOut[v.k + "|" + p.k] = [`سَ${a}`, `sa-${t}`, `${p.en} will ${v.en}`, "سَـ (or سَوْفَ) in front makes it future"];
  }));

  LESSONS.push({
    id: "b1-05",
    book: 1,
    num: 5,
    unit: "الفِعْلُ المُضارِعُ · دَرْسٌ خاصٌّ",
    unitEn: "Special lesson · Verbs (after Unit 2)",
    title: "Present-Tense Verbs: I, We, You, He, She",
    titleAr: "الفِعْلُ المُضارِعُ",
    covers: "The teacher's dedicated video on verbs. Not in the book pages: built from his own slides as described in the video",
    video: "https://www.youtube.com/playlist?list=PLDS9YrkKMtPR4-S3ih8wad7oXMyrdEdXY",
    goals: [
      "Know the three kinds of verb: past (ماضٍ), present/future (مُضارِع) and command (أَمْر)",
      "Know that every present verb starts with one of four letters: أ ن ي ت",
      "Conjugate for أَنا، نَحْنُ، أَنْتَ، أَنْتِ، هُوَ، هِيَ, including the ـينَ for a female “you”",
      "Make the future with سَـ or سَوْفَ",
      "Ask and answer ماذا تَفْعَلُ؟ ماذا تَقْرَأُ؟ ماذا يَفْعَلُ…؟",
      "Put the verb before the doer: يُصَلِّي عُثْمانُ"
    ],
    gender: { any: "تفعلين|تكتبين|تفعل |يفعل|يصلي|تصلي|تتوضأ", fem: "تفعلين|تكتبين|تصلي|تتوضأ|تفعل مريم|تفعل زينب", q: "Is the person doing it male or female?" },

    dialogues: [
      {
        id: "v1", title: "Practice dialogue 1 · between men", titleAr: "حِوارٌ بَيْنَ رِجالٍ",
        note: "From the teacher's slide (reconstructed from the audio). Watch the first letter of every verb: ت when talking to someone, أ about yourself, ي about another man.",
        people: { "حامِد": "m3", "سَعِيد": "m2" },
        lines: [
          ["حامِد", "ماذا تَفْعَلُ يا سَعِيدُ؟", "mādhā tafʿalu yā Saʿīd?", "What are you doing, Saʿīd?"],
          ["سَعِيد", "أَقْرَأُ.", "aqraʾu.", "I'm reading."],
          ["حامِد", "ماذا تَقْرَأُ؟", "mādhā taqraʾu?", "What are you reading?"],
          ["سَعِيد", "أَقْرَأُ القُرْآنَ. وَماذا يَفْعَلُ عُثْمانُ؟", "aqraʾu l-qurʾān. wa mādhā yafʿalu ʿUthmān?", "I'm reading the Qurʾān. And what is ʿUthmān doing?"],
          ["حامِد", "يُصَلِّي.", "yuṣallī.", "He's praying."],
          ["سَعِيد", "ماذا يُصَلِّي؟", "mādhā yuṣallī?", "Which prayer is he praying?"],
          ["حامِد", "يُصَلِّي الفَجْرَ.", "yuṣalli l-fajr.", "He's praying Fajr (the dawn prayer)."]
        ]
      },
      {
        id: "v2", title: "Practice dialogue 2 · between women", titleAr: "حِوارٌ بَيْنَ نِساءٍ",
        note: "The same idea between women. Talking to a woman, the verb gets ـينَ on the end: تَفْعَلِينَ، تَكْتُبِينَ.",
        people: { "مَرْيَم": "f3", "فاطِمَة": "f1" },
        lines: [
          ["مَرْيَم", "ماذا تَفْعَلِينَ يا فاطِمَةُ؟", "mādhā tafʿalīna yā Fāṭima?", "What are you doing, Fāṭima?"],
          ["فاطِمَة", "أَكْتُبُ.", "aktubu.", "I'm writing."],
          ["مَرْيَم", "ماذا تَكْتُبِينَ؟", "mādhā taktubīna?", "What are you writing?"],
          ["فاطِمَة", "أَكْتُبُ كِتابًا. وَماذا تَفْعَلُ زَيْنَبُ؟", "aktubu kitāban. wa mādhā tafʿalu Zaynab?", "I'm writing a book. And what is Zaynab doing?"],
          ["مَرْيَم", "تَتَوَضَّأُ وَتُصَلِّي.", "tatawaḍḍaʾu wa tuṣallī.", "She's doing wuḍūʾ and praying."],
          ["فاطِمَة", "أَيْنَ تَتَوَضَّأُ؟", "ayna tatawaḍḍaʾu?", "Where is she doing wuḍūʾ?"],
          ["مَرْيَم", "تَتَوَضَّأُ فِي الحَمّامِ.", "tatawaḍḍaʾu fi l-ḥammām.", "She's doing wuḍūʾ in the bathroom."]
        ]
      }
    ],

    vocab: [
      { ar: "فِعْلٌ", tr: "fiʿl", en: "verb", pic: "🏃", cat: "Grammar words" },
      { ar: "الماضِي", tr: "al-māḍī", en: "the past tense", pic: "⏪", cat: "Grammar words", extra: true },
      { ar: "المُضارِعُ", tr: "al-muḍāriʿ", en: "the present / future tense", pic: "▶️", cat: "Grammar words" },
      { ar: "الأَمْرُ", tr: "al-amr", en: "the command form", pic: "📢", cat: "Grammar words", extra: true },
      { ar: "يَفْعَلُ", tr: "yafʿalu", en: "he does", pic: "🛠️", cat: "Verbs" },
      { ar: "يَقْرَأُ", tr: "yaqraʾu", en: "he reads", pic: "📖", cat: "Verbs" },
      { ar: "يَكْتُبُ", tr: "yaktubu", en: "he writes", pic: "✍️", cat: "Verbs" },
      { ar: "يَتَوَضَّأُ", tr: "yatawaḍḍaʾu", en: "he does wuḍūʾ", pic: "💧", cat: "Verbs" },
      { ar: "يُصَلِّي", tr: "yuṣallī", en: "he prays", pic: "🧎", cat: "Verbs" },
      { ar: "أَقْرَأُ", tr: "aqraʾu", en: "I read", pic: "🙋📖", cat: "Forms" },
      { ar: "نَكْتُبُ", tr: "naktubu", en: "we write", pic: "👨‍👩‍👧✍️", cat: "Forms" },
      { ar: "تَفْعَلُ", tr: "tafʿalu", en: "you (m) do / she does", pic: "👉👨🛠️", cat: "Forms" },
      { ar: "تَفْعَلِينَ", tr: "tafʿalīna", en: "you (f) do", pic: "👉👩🛠️", cat: "Forms" },
      { ar: "تُصَلِّي", tr: "tuṣallī", en: "she prays / you (m) pray", pic: "👩🧎", cat: "Forms" },
      { ar: "سَـ", tr: "sa-", en: "will (future prefix)", pic: "⏩", cat: "Future" },
      { ar: "سَوْفَ", tr: "sawfa", en: "will (future word)", pic: "⏩", cat: "Future" },
      { ar: "سَأَقْرَأُ", tr: "sa-aqraʾu", en: "I will read", pic: "⏩📖", cat: "Future" },
      { ar: "ماذا", tr: "mādhā", en: "what? (before a verb)", pic: "❓", cat: "Questions" }
    ],

    grammar: [
      {
        id: "g-kinds",
        title: "Three kinds of verb",
        body: [
          "A verb is a <b>فِعْل</b> (fiʿl). Arabic has three kinds:",
          "<b>الماضِي</b> (past) · <b>المُضارِعُ</b> (present / future) · <b>الأَمْرُ</b> (command or request).",
          "The teacher calls verbs \"a long story\" in Arabic, so this lesson covers only <b>المُضارِع</b>. For now we'll just call it the present tense."
        ]
      },
      {
        id: "g-prefix",
        title: "The four added letters: أ · ن · ي · ت",
        body: [
          "Every present verb <b>must begin with one of four added letters</b>. They're not part of the verb's root. They're added to show <b>who</b> is doing it:",
          "<b>أ</b> → أَنا (I) · <b>ن</b> → نَحْنُ (we) · <b>ت</b> → أَنْتَ / أَنْتِ / هِيَ (you, she) · <b>ي</b> → هُوَ (he)",
          "A classic way to remember them is the word <b>أَنَيْتُ</b>: it uses exactly these four letters. (That memory aid is ours, not from the video.)",
          "Speaking to a <b>woman</b>, the verb also gets <b>ـينَ</b> at the end: أَنْتِ تَكْتُبِينَ (you write).",
          "⚠️ تَكْتُبُ can mean <i>you (m) write</i> or <i>she writes</i>. Context, or the pronoun, tells you which."
        ],
        table: { head: ["Who", "Verb", "Say it", "Meaning"], rows: [
          ["أَنا", "أَكْتُبُ", "aktubu", "I write (أ)"],
          ["نَحْنُ", "نَكْتُبُ", "naktubu", "we write (ن)"],
          ["أَنْتَ", "تَكْتُبُ", "taktubu", "you (m) write (ت)"],
          ["أَنْتِ", "تَكْتُبِينَ", "taktubīna", "you (f) write (ت … ينَ)"],
          ["هُوَ", "يَكْتُبُ", "yaktubu", "he writes (ي)"],
          ["هِيَ", "تَكْتُبُ", "taktubu", "she writes (ت)"]
        ]},
        widget: {
          type: "combo", label: "Conjugate it · pick a verb, then a person",
          rows: VERBS.map(v => ({ k: v.k, label: `${v.pic} ${v.en}` })),
          cols: PERSONS.map(p => ({ k: p.k, label: `${p.ar} ${p.en}` })),
          out: conjOut
        }
      },
      {
        id: "g-damma",
        title: "The ending: usually ـُ (u)",
        body: [
          "A present verb normally ends with a <b>ḍamma</b> (ـُ): أَقْرَأُ، أَكْتُبُ، يَفْعَلُ.",
          "When something is attached to the end, as with ـينَ in تَكْتُبِينَ, the ending changes. The teacher saves the full story for a later video.",
          "Verbs that end in ي, like يُصَلِّي, have no visible ḍamma."
        ]
      },
      {
        id: "g-future",
        title: "The future: add سَـ or سَوْفَ",
        body: [
          "المُضارِع covers present <b>and</b> future. To make the future clear, put <b>سَـ</b> (joined to the verb) or <b>سَوْفَ</b> (a separate word) in front:",
          "أَقْرَأُ الكِتابَ <i>I read the book</i> → <b>سَ</b>أَقْرَأُ الكِتابَ <i>I will read the book</i>.",
          "The teacher's examples: ماذا تَكْتُبُ؟ <i>What are you writing?</i> → ماذا <b>سَ</b>تَكْتُبُ؟ <i>What will you write?</i> And to a woman: ماذا <b>سَوْفَ</b> تَفْعَلِينَ؟ <i>What are you going to do?</i>"
        ],
        widget: {
          type: "combo", label: "Make it future · pick a verb, then a person",
          rows: VERBS.map(v => ({ k: v.k, label: `${v.pic} ${v.en}` })),
          cols: PERSONS.map(p => ({ k: p.k, label: `${p.ar} ${p.en}` })),
          out: futOut
        }
      },
      {
        id: "g-order",
        title: "Verb first, then the doer",
        body: [
          "In English the doer comes first: <i>Ḥāmid does…</i>. In Arabic the default is <b>verb first</b>: ماذا <b>يَفْعَلُ</b> حامِدٌ؟ <i>What is Ḥāmid doing?</i> and <b>يُصَلِّي</b> عُثْمانُ <i>ʿUthmān is praying</i>.",
          "A verb that comes before a named person uses the هُوَ / هِيَ form: <b>يَ</b>فْعَلُ حامِدٌ (male) · <b>تَ</b>فْعَلُ زَيْنَبُ (female).",
          "Asking about the person you're talking to? Use the ت form, e.g. ماذا <b>تَ</b>فْعَلُ؟, and answer with the أ form: <b>أَ</b>قْرَأُ."
        ]
      }
    ],

    sounds: {
      intro: "In this lesson the sound that matters most is the first letter of each verb. Listen closely: aqraʾu, naqraʾu, taqraʾu, yaqraʾu.",
      letters: [
        { l: "أ", name: "hamza (I)", tip: "A clean start in the throat: a-. أَقْرَأُ, أَكْتُبُ. For يُصَلِّي the vowel changes to u: أُصَلِّي.", ex: ["أَقْرَأُ", "أَكْتُبُ", "أُصَلِّي"] },
        { l: "ن", name: "nūn (we)", tip: "Plain English n.", ex: ["نَقْرَأُ", "نَكْتُبُ", "نُصَلِّي"] },
        { l: "ت", name: "tāʾ (you / she)", tip: "A light t, keep it clearly different from the heavy ط.", ex: ["تَقْرَأُ", "تَكْتُبِينَ", "تُصَلِّينَ"] },
        { l: "ي", name: "yāʾ (he)", tip: "Like English y.", ex: ["يَقْرَأُ", "يَكْتُبُ", "يُصَلِّي"] },
        { l: "ق", name: "qāf", tip: "The deep k from the very back of the throat, as in يَقْرَأُ. Don't let it slide into a plain k.", ex: ["أَقْرَأُ", "تَقْرَئِينَ"] },
        { l: "ف", name: "fāʾ", tip: "Like English f.", ex: ["أَفْعَلُ", "يَفْعَلُ", "سَوْفَ"] }
      ],
      pairs: [
        { a: ["أَقْرَأُ", "aqraʾu", "I read"], b: ["يَقْرَأُ", "yaqraʾu", "he reads"], note: "أ vs ي" },
        { a: ["نَكْتُبُ", "naktubu", "we write"], b: ["تَكْتُبُ", "taktubu", "you (m) / she write(s)"], note: "ن vs ت" },
        { a: ["تَكْتُبُ", "taktubu", "you (m) write"], b: ["تَكْتُبِينَ", "taktubīna", "you (f) write"], note: "+ ينَ" },
        { a: ["يُصَلِّي", "yuṣallī", "he prays"], b: ["تُصَلِّي", "tuṣallī", "she prays"], note: "ي vs ت" },
        { a: ["أَقْرَأُ", "aqraʾu", "I read"], b: ["سَأَقْرَأُ", "sa-aqraʾu", "I will read"], note: "present vs future" }
      ]
    },

    tips: [
      { icon: "🔤", t: "Look at the first letter", d: "Every present verb starts with أ, ن, ي or ت, and that letter tells you who is doing it. Before translating, look at the first letter." },
      { icon: "🧠", t: "Memory aid: أَنَيْتُ", d: "The word أَنَيْتُ is spelled with exactly the four letters أ ن ي ت. (A traditional trick, not from the video.)" },
      { icon: "👩", t: "Female “you” adds ـينَ", d: "تَكْتُبُ (to a man) → تَكْتُبِينَ (to a woman). When you're speaking to a woman, the ending tells her you mean her." },
      { icon: "⚖️", t: "تَـ is shared", d: "تَفْعَلُ can be “you (m) do” or “she does”. Use the context or add the pronoun: أَنْتَ تَفْعَلُ / هِيَ تَفْعَلُ." },
      { icon: "🙋", t: "Yourself = أ, whatever your gender", d: "Fāṭima says أَكْتُبُ, just like Saʿīd says أَقْرَأُ. The أ form is the same for men and women." },
      { icon: "⏩", t: "Future = سَـ / سَوْفَ", d: "سَأَقْرَأُ / سَوْفَ أَقْرَأُ = I will read. Same verb, one extra piece in front." },
      { icon: "🔀", t: "Verb before doer", d: "Arabic usually says “prays ʿUthmān” (يُصَلِّي عُثْمانُ), not “ʿUthmān prays”." }
    ],

    practice: [
      { type: "mcq", q: "Which four letters can a present verb (المُضارِع) start with?", options: ["أ ن ي ت", "ب ت ث ج", "ا و ي ة"], answer: 0 },
      { type: "mcq", q: "“I read” is…", options: ["يَقْرَأُ", "أَقْرَأُ", "نَقْرَأُ"], answer: 1 },
      { type: "mcq", q: "“We write” is…", options: ["نَكْتُبُ", "تَكْتُبُ", "أَكْتُبُ"], answer: 0 },
      { type: "mcq", q: "“He prays” is…", options: ["تُصَلِّي", "يُصَلِّي", "أُصَلِّي"], answer: 1 },
      { type: "mcq", q: "You are asking a WOMAN: “What are you doing?”", options: ["ماذا تَفْعَلُ؟", "ماذا تَفْعَلِينَ؟", "ماذا يَفْعَلُ؟"], answer: 1, explain: "Speaking to a woman: ت … ينَ." },
      { type: "mcq", q: "تَكْتُبُ can mean…", options: ["only “she writes”", "“you (m) write” or “she writes”", "“we write”"], answer: 1 },
      { type: "mcq", q: "How do you say “I will read”?", options: ["سَأَقْرَأُ", "أَقْرَأُ سَ", "سَيَقْرَأُ"], answer: 0, explain: "سَيَقْرَأُ = he will read." },
      { type: "mcq", q: "Fāṭima (a woman) talks about herself: “I am writing”.", options: ["تَكْتُبِينَ", "أَكْتُبُ", "تَكْتُبُ"], answer: 1, explain: "The أ form is used for yourself, whatever your gender." },
      { type: "mcq", q: "Which is the usual word order in Arabic?", options: ["عُثْمانُ يُصَلِّي is the only correct order", "يُصَلِّي عُثْمانُ (verb first)", "The verb always comes last"], answer: 1 },
      { type: "mcq", q: "What does سَوْفَ do?", options: ["Makes the verb past", "Makes the verb future", "Makes the verb a question"], answer: 1 },
      { type: "fill", sentence: "أَنا ___ القُرْآنَ.", en: "I am reading the Qurʾān.", options: ["يَقْرَأُ", "أَقْرَأُ", "تَقْرَأُ"], answer: 1 },
      { type: "fill", sentence: "هِيَ ___ فِي المُصَلَّى.", en: "She is praying in the prayer room.", options: ["يُصَلِّي", "تُصَلِّي", "نُصَلِّي"], answer: 1 },
      { type: "fill", sentence: "نَحْنُ ___ كِتابًا.", en: "We are writing a book.", options: ["نَكْتُبُ", "يَكْتُبُ", "تَكْتُبِينَ"], answer: 0 },
      { type: "fill", sentence: "ماذا ___ يا فاطِمَةُ؟", en: "What are you writing, Fāṭima?", options: ["تَكْتُبُ", "تَكْتُبِينَ", "أَكْتُبُ"], answer: 1 },
      { type: "fill", sentence: "ماذا ___ حامِدٌ؟", en: "What is Ḥāmid doing?", options: ["يَفْعَلُ", "تَفْعَلُ", "أَفْعَلُ"], answer: 0 },
      { type: "order", words: ["ماذا", "تَقْرَأُ؟"], en: "What are you reading? (m)" },
      { type: "order", words: ["أَقْرَأُ", "القُرْآنَ."], en: "I'm reading the Qurʾān." },
      { type: "order", words: ["ماذا", "سَوْفَ", "تَفْعَلِينَ؟"], en: "What are you going to do? (f)" },
      { type: "order", words: ["تَتَوَضَّأُ", "فِي", "الحَمّامِ."], en: "She's doing wuḍūʾ in the bathroom." },
      { type: "reply", prompt: "ماذا تَفْعَلُ؟", en: "Choose a logical reply", options: ["أَقْرَأُ.", "تَقْرَأُ.", "يَقْرَأُ."], answer: 0 },
      { type: "reply", prompt: "ماذا تَكْتُبِينَ؟", en: "Choose a logical reply", options: ["أَكْتُبُ كِتابًا.", "تَكْتُبِينَ كِتابًا.", "يَكْتُبُ كِتابًا."], answer: 0 },
      { type: "listen", q: "Who is doing it?", say: "نَكْتُبُ", options: ["I", "we", "he", "you (f)"], answer: 1 },
      { type: "listen", q: "Who is doing it?", say: "يَقْرَأُ", options: ["he", "she", "I", "we"], answer: 0 },
      { type: "listen", q: "Who is doing it?", say: "تَفْعَلِينَ", options: ["you (m)", "he", "you (f)", "we"], answer: 2 },
      { type: "listen", q: "Who is doing it?", say: "أُصَلِّي", options: ["she", "I", "we", "he"], answer: 1 },
      { type: "listen", q: "Present or future?", say: "سَأَكْتُبُ", options: ["present: I write", "future: I will write"], answer: 1 }
    ],

    roleplay: [
      { them: "ماذا تَفْعَلُ؟", you: "أَقْرَأُ. / أَكْتُبُ. / أُصَلِّي.", hint: "Say what you're doing (أ form)" },
      { them: "ماذا تَقْرَأُ؟", you: "أَقْرَأُ القُرْآنَ. / أَقْرَأُ كِتابًا.", hint: "Say what you're reading" },
      { them: "وَماذا يَفْعَلُ أَخُوكَ؟", you: "يَكْتُبُ. / يُصَلِّي. / يَقْرَأُ.", hint: "“What is your brother doing?” (أَخُوكَ = your brother) Use the ي form" },
      { them: "وَماذا تَفْعَلُ أُخْتُكَ؟", you: "تَتَوَضَّأُ. / تُصَلِّي.", hint: "“What is your sister doing?” (أُخْتُكَ = your sister) Use the ت form" },
      { them: "ماذا سَتَفْعَلُ؟", you: "سَأَقْرَأُ. / سَأَكْتُبُ.", hint: "“What will you do?” Use سَـ + the أ form" },
      { them: "ماذا نَفْعَلُ؟", you: "نُصَلِّي. / نَقْرَأُ القُرْآنَ.", hint: "“What are we doing?” Use the ن form" }
    ]
  });
})();
