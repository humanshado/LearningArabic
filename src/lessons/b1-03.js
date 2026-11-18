// Book 1 · Video 3 — Unit 2 (الأسرة), Dialogues 1–2 (book pp. 28–31)
// Source: Al-ʿArabiyyah Bayna Yadayk Book 1 + Al-Lisan video commentary (lesson 3 transcript)
(function () {
  const OWN = [
    { k: "my", label: "ـي my", sfx: "ِي", tr: "ī", en: "my" },
    { k: "m", label: "ـكَ your (m)", sfx: "ُكَ", tr: "uka", en: "your" },
    { k: "f", label: "ـكِ your (f)", sfx: "ُكِ", tr: "uki", en: "your" },
    { k: "his", label: "ـهُ his", sfx: "ُهُ", tr: "uhu", en: "his" },
    { k: "her", label: "ـها her", sfx: "ُها", tr: "uhā", en: "her" }
  ];
  const REL = [
    { k: "walid", stem: "والِد", tr: "wālid", en: "father", pic: "👨" },
    { k: "walida", stem: "والِدَت", tr: "wālidat", en: "mother", pic: "👩", fem: true },
    { k: "jadd", stem: "جَدّ", tr: "jadd", en: "grandfather", pic: "👴" },
    { k: "jadda", stem: "جَدَّت", tr: "jaddat", en: "grandmother", pic: "👵", fem: true },
    { k: "amm", stem: "عَمّ", tr: "ʿamm", en: "uncle (father's side)", pic: "🧔" },
    { k: "amma", stem: "عَمَّت", tr: "ʿammat", en: "aunt (father's side)", pic: "🧕", fem: true },
    { k: "ibn", stem: "اِبْن", tr: "ibn", en: "son", pic: "👦" },
    { k: "ibna", stem: "اِبْنَت", tr: "ibnat", en: "daughter", pic: "👧", fem: true }
  ];
  const relOut = {};
  REL.forEach(r => OWN.forEach(o => {
    relOut[r.k + "|" + o.k] = [r.stem + o.sfx, r.tr + o.tr, `${o.en} ${r.en}${o.k === "m" ? " (said to a male)" : o.k === "f" ? " (said to a female)" : ""}`,
      r.fem ? "Feminine word: its ة becomes ت before the ending." : ""];
  }));

  LESSONS.push({
    id: "b1-03",
    book: 1,
    num: 3,
    unit: "الوَحْدَةُ الثّانِيَةُ · الأُسْرَةُ",
    unitEn: "Unit 2 · The Family",
    title: "My Family",
    titleAr: "هَذِهِ صُورَةُ أُسْرَتِي",
    covers: "Book pages 28–31 · Unit 2, Dialogue 1 (a family photo) and Dialogue 2 (the family tree of the Prophet ﷺ)",
    video: "https://www.youtube.com/playlist?list=PLDS9YrkKMtPR4-S3ih8wad7oXMyrdEdXY",
    goals: [
      "Name your family: father, mother, grandparents, brother, sister",
      "Use the synonyms والِد = أَب, والِدَة = أُمّ, مُدَرِّس = مُعَلِّم",
      "Talk about father's-side uncles and aunts: عَمّ, عَمَّة",
      "Say son and daughter: اِبْن, اِبْنَة",
      "Say whose relative it is: والِدِي, والِدُهُ, عَمَّتُهُ …",
      "Know that some words are feminine only grammatically, e.g. صُورَة → هَذِهِ"
    ],
    gender: { any: "هذا|هذه", fem: "هذه", q: "Is the person being introduced male or female?" },

    dialogues: [
      {
        id: "u2d1", title: "Dialogue 1", titleAr: "الحِوارُ الأَوَّلُ",
        note: "ʿAlī shows ʿAmmār a photo of his family.",
        people: { "عَلِيّ": "m1", "عَمّار": "m2" },
        tree: { label: "ʿAlī's family · tap a name", levels: [
          [{ ar: "جَدِّي", en: "my grandfather", say: "وَهَذا جَدِّي.", g: "m" }, { ar: "جَدَّتِي", en: "my grandmother", say: "وَهَذِهِ جَدَّتِي.", g: "f" }],
          [{ ar: "والِدِي عَدْنانُ", en: "my father · engineer", say: "هَذا والِدِي عَدْنانُ وَهُوَ مُهَنْدِسٌ.", g: "m" }, { ar: "والِدَتِي سَعِيدَةُ", en: "my mother · doctor", say: "هَذِهِ والِدَتِي سَعِيدَةُ وَهِيَ طَبِيبَةٌ.", g: "f" }],
          [{ ar: "أَخِي عِيسَى", en: "my brother · student", say: "هَذا أَخِي عِيسَى وَهُوَ طالِبٌ.", g: "m" }, { ar: "أَنا عَلِيٌّ", en: "me", say: "أَنا عَلِيٌّ.", me: true }, { ar: "أُخْتِي عَبْلَةُ", en: "my sister · teacher", say: "هَذِهِ أُخْتِي عَبْلَةُ وَهِيَ مُعَلِّمَةٌ.", g: "f" }]
        ]},
        lines: [
          ["عَلِيّ", "السَّلامُ عَلَيْكُمْ.", "as-salāmu ʿalaykum.", "Peace be upon you."],
          ["عَمّار", "وَعَلَيْكُمُ السَّلامُ.", "wa ʿalaykumu s-salām.", "And upon you be peace."],
          ["عَلِيّ", "هَذِهِ صُورَةُ أُسْرَتِي.", "hādhihi ṣūratu usratī.", "This is a picture of my family."],
          ["عَمّار", "ما شاءَ اللهُ! مَنْ هَذا؟", "mā shāʾa llāh! man hādhā?", "Mā shāʾ Allāh! Who is this (m)?"],
          ["عَلِيّ", "هَذا والِدِي عَدْنانُ وَهُوَ مُهَنْدِسٌ.", "hādhā wālidī ʿAdnān wa huwa muhandis.", "This is my father ʿAdnān, and he is an engineer."],
          ["عَمّار", "وَمَنْ هَذِهِ؟", "wa man hādhihi?", "And who is this (f)?"],
          ["عَلِيّ", "هَذِهِ والِدَتِي سَعِيدَةُ وَهِيَ طَبِيبَةٌ.", "hādhihi wālidatī Saʿīda wa hiya ṭabība.", "This is my mother Saʿīda, and she is a doctor."],
          ["عَمّار", "وَمَنْ هَذا؟", "wa man hādhā?", "And who is this (m)?"],
          ["عَلِيّ", "هَذا أَخِي عِيسَى وَهُوَ طالِبٌ.", "hādhā akhī ʿĪsā wa huwa ṭālib.", "This is my brother ʿĪsā, and he is a student."],
          ["عَمّار", "وَمَنْ هَذِهِ؟", "wa man hādhihi?", "And who is this (f)?"],
          ["عَلِيّ", "هَذِهِ أُخْتِي عَبْلَةُ وَهِيَ مُعَلِّمَةٌ. وَهَذا جَدِّي، وَهَذِهِ جَدَّتِي.", "hādhihi ukhtī ʿAbla wa hiya muʿallima. wa hādhā jaddī, wa hādhihi jaddatī.", "This is my sister ʿAbla, and she is a teacher. And this is my grandfather, and this is my grandmother."],
          ["عَمّار", "ما شاءَ اللهُ!", "mā shāʾa llāh!", "Mā shāʾ Allāh! (How lovely!)"]
        ]
      },
      {
        id: "u2d2", title: "Dialogue 2", titleAr: "الحِوارُ الثّانِي",
        note: "ʿUmar and ʿUthmān look at a family tree: the family of the Prophet Muḥammad ﷺ. Notice ـهُ (his) on every relative.",
        people: { "عُمَر": "m3", "عُثْمان": "m4" },
        tree: { label: "The family of the Prophet ﷺ · tap a name", levels: [
          [{ ar: "عَبْدُ المُطَّلِبِ", en: "his grandfather", say: "وَهَذا جَدُّهُ عَبْدُ المُطَّلِبِ.", g: "m" }],
          [{ ar: "العَبّاسُ", en: "his uncle", say: "وَهَذا عَمُّهُ العَبّاسُ.", g: "m" }, { ar: "حَمْزَةُ", en: "his uncle", say: "وَهَذا عَمُّهُ حَمْزَةُ.", g: "m" }, { ar: "عَبْدُ اللهِ", en: "his father", say: "هَذا والِدُهُ عَبْدُ اللهِ.", g: "m" }, { ar: "آمِنَةُ", en: "his mother", say: "وَهَذِهِ والِدَتُهُ آمِنَةُ.", g: "f" }, { ar: "أَبُو طالِبٍ", en: "his uncle", say: "وَهَذا عَمُّهُ أَبُو طالِبٍ.", g: "m" }, { ar: "صَفِيَّةُ", en: "his aunt", say: "وَهَذِهِ عَمَّتُهُ صَفِيَّةُ.", g: "f" }],
          [{ ar: "مُحَمَّدٌ ﷺ", en: "the Messenger", say: "مُحَمَّدٌ رَسُولُ اللهِ ﷺ", me: true }],
          [{ ar: "القاسِمُ", en: "his son", say: "وَهَذا ابْنُهُ القاسِمُ.", g: "m" }, { ar: "عَبْدُ اللهِ", en: "his son", say: "وَهَذا ابْنُهُ عَبْدُ اللهِ.", g: "m" }, { ar: "إِبْراهِيمُ", en: "his son", say: "وَهَذا ابْنُهُ إِبْراهِيمُ.", g: "m" }, { ar: "فاطِمَةُ", en: "his daughter", say: "وَهَذِهِ ابْنَتُهُ فاطِمَةُ.", g: "f" }, { ar: "رُقَيَّةُ", en: "his daughter", say: "وَهَذِهِ ابْنَتُهُ رُقَيَّةُ.", g: "f" }, { ar: "زَيْنَبُ", en: "his daughter", say: "وَهَذِهِ ابْنَتُهُ زَيْنَبُ.", g: "f" }, { ar: "أُمُّ كُلْثُومٍ", en: "his daughter", say: "وَهَذِهِ ابْنَتُهُ أُمُّ كُلْثُومٍ.", g: "f" }]
        ]},
        lines: [
          ["عُمَر", "هَلْ هَذِهِ شَجَرَةٌ؟", "hal hādhihi shajara?", "Is this a tree?"],
          ["عُثْمان", "نَعَمْ، هَذِهِ أُسْرَةُ الرَّسُولِ، صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ.", "naʿam, hādhihi usratu r-rasūl, ṣallā llāhu ʿalayhi wa sallam.", "Yes, this is the family of the Messenger, peace and blessings be upon him."],
          ["عُمَر", "صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ.", "ṣallā llāhu ʿalayhi wa sallam.", "Peace and blessings be upon him."],
          ["عُثْمان", "هَذا والِدُهُ عَبْدُ اللهِ.", "hādhā wāliduhu ʿAbdullāh.", "This is his father, ʿAbdullāh."],
          ["عُمَر", "وَهَذِهِ والِدَتُهُ آمِنَةُ.", "wa hādhihi wālidatuhu Āmina.", "And this is his mother, Āmina."],
          ["عُثْمان", "وَهَذا جَدُّهُ عَبْدُ المُطَّلِبِ.", "wa hādhā jadduhu ʿAbdul-Muṭṭalib.", "And this is his grandfather, ʿAbd al-Muṭṭalib."],
          ["عُمَر", "وَهَذا عَمُّهُ العَبّاسُ.", "wa hādhā ʿammuhu l-ʿAbbās.", "And this is his uncle, al-ʿAbbās."],
          ["عُثْمان", "وَهَذا عَمُّهُ حَمْزَةُ.", "wa hādhā ʿammuhu Ḥamza.", "And this is his uncle, Ḥamza."],
          ["عُمَر", "وَهَذا عَمُّهُ أَبُو طالِبٍ.", "wa hādhā ʿammuhu Abū Ṭālib.", "And this is his uncle, Abū Ṭālib."],
          ["عُثْمان", "وَهَذِهِ عَمَّتُهُ صَفِيَّةُ.", "wa hādhihi ʿammatuhu Ṣafiyya.", "And this is his aunt, Ṣafiyya."],
          ["عُمَر", "وَهَذا ابْنُهُ القاسِمُ.", "wa hādhā bnuhu l-Qāsim.", "And this is his son, al-Qāsim."],
          ["عُثْمان", "وَهَذا ابْنُهُ عَبْدُ اللهِ.", "wa hādhā bnuhu ʿAbdullāh.", "And this is his son, ʿAbdullāh."],
          ["عُمَر", "وَهَذا ابْنُهُ إِبْراهِيمُ.", "wa hādhā bnuhu Ibrāhīm.", "And this is his son, Ibrāhīm."],
          ["عُثْمان", "وَهَذِهِ ابْنَتُهُ فاطِمَةُ.", "wa hādhihi bnatuhu Fāṭima.", "And this is his daughter, Fāṭima."],
          ["عُمَر", "وَهَذِهِ ابْنَتُهُ رُقَيَّةُ.", "wa hādhihi bnatuhu Ruqayya.", "And this is his daughter, Ruqayya."],
          ["عُثْمان", "وَهَذِهِ ابْنَتُهُ زَيْنَبُ.", "wa hādhihi bnatuhu Zaynab.", "And this is his daughter, Zaynab."],
          ["عُمَر", "وَهَذِهِ ابْنَتُهُ أُمُّ كُلْثُومٍ.", "wa hādhihi bnatuhu Umm Kulthūm.", "And this is his daughter, Umm Kulthūm."]
        ]
      }
    ],

    vocab: [
      { ar: "أُسْرَةٌ", tr: "usra", en: "family", pic: "👨‍👩‍👧‍👦", cat: "Family" },
      { ar: "والِدٌ", tr: "wālid", en: "father", pic: "👨", cat: "Family" },
      { ar: "أَبٌ", tr: "ab", en: "father (synonym of والِد)", pic: "👨", cat: "Family" },
      { ar: "والِدَةٌ", tr: "wālida", en: "mother", pic: "👩", cat: "Family" },
      { ar: "أُمٌّ", tr: "umm", en: "mother (synonym of والِدَة)", pic: "👩", cat: "Family" },
      { ar: "جَدٌّ", tr: "jadd", en: "grandfather", pic: "👴", cat: "Family" },
      { ar: "جَدَّةٌ", tr: "jadda", en: "grandmother", pic: "👵", cat: "Family" },
      { ar: "عَمٌّ", tr: "ʿamm", en: "uncle (father's brother)", pic: "🧔", cat: "Family" },
      { ar: "عَمَّةٌ", tr: "ʿamma", en: "aunt (father's sister)", pic: "🧕", cat: "Family" },
      { ar: "اِبْنٌ", tr: "ibn", en: "son", pic: "👦", cat: "Family" },
      { ar: "اِبْنَةٌ", tr: "ibna", en: "daughter", pic: "👧", cat: "Family" },
      { ar: "مُعَلِّمٌ", tr: "muʿallim", en: "teacher (m), same as مُدَرِّس", pic: "👨‍🏫", cat: "Jobs" },
      { ar: "مُعَلِّمَةٌ", tr: "muʿallima", en: "teacher (f)", pic: "👩‍🏫", cat: "Jobs" },
      { ar: "صُورَةٌ", tr: "ṣūra", en: "picture, photo", pic: "🖼️", cat: "Other words" },
      { ar: "شَجَرَةٌ", tr: "shajara", en: "tree", pic: "🌳", cat: "Other words" },
      { ar: "رَسُولٌ", tr: "rasūl", en: "messenger", pic: "✉️", cat: "Other words" },
      { ar: "ما شاءَ اللهُ", tr: "mā shāʾa llāh", en: "what God has willed (said when admiring something)", pic: "😍", cat: "Phrases" },
      { ar: "صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ", tr: "ṣallā llāhu ʿalayhi wa sallam", en: "peace and blessings be upon him (ﷺ)", pic: "🤲", cat: "Phrases" },
      { ar: "مَنْ هَذا؟", tr: "man hādhā?", en: "who is this? (m)", pic: "🧑❓", cat: "Phrases" },
      { ar: "مَنْ هَذِهِ؟", tr: "man hādhihi?", en: "who is this? (f)", pic: "👩❓", cat: "Phrases" }
    ],

    grammar: [
      {
        id: "g-syn",
        title: "Synonyms: two words, one meaning",
        body: [
          "The teacher points out three pairs of words that mean the same thing. Both forms are common, so learn both:",
          "<b>والِد</b> = <b>أَب</b> (father) · <b>والِدَة</b> = <b>أُمّ</b> (mother) · <b>مُدَرِّس</b> = <b>مُعَلِّم</b> (teacher)",
          "So ʿAlī could just as well have said هَذِهِ أُمِّي سَعِيدَةُ instead of هَذِهِ والِدَتِي سَعِيدَةُ. It's like saying <i>mom</i> instead of <i>mother</i>."
        ],
        table: { head: ["", "Arabic", "Say it", "Meaning"], rows: [
          ["👨", "والِدٌ / أَبٌ", "wālid / ab", "father"],
          ["👩", "والِدَةٌ / أُمٌّ", "wālida / umm", "mother"],
          ["👨‍🏫", "مُدَرِّسٌ / مُعَلِّمٌ", "mudarris / muʿallim", "teacher (m)"],
          ["👩‍🏫", "مُدَرِّسَةٌ / مُعَلِّمَةٌ", "mudarrisa / muʿallima", "teacher (f)"]
        ]}
      },
      {
        id: "g-family",
        title: "Family words, and whose relative it is",
        body: [
          "Every relative takes the possessive endings from Lessons 1–2. Dialogue 1 uses <b>ـي</b> (my): والِدِي، والِدَتِي، جَدِّي، جَدَّتِي.",
          "Dialogue 2 talks about the Prophet ﷺ, so every relative takes <b>ـهُ</b> (his): والِدُهُ، جَدُّهُ، عَمُّهُ، عَمَّتُهُ، ابْنُهُ، ابْنَتُهُ.",
          "Remember the rule from Lesson 2: feminine words ending in ة change it to ت before the ending, e.g. والِدَة → والِدَتُهُ and عَمَّة → عَمَّتُهُ."
        ],
        widget: {
          type: "combo", label: "Whose relative? · pick a relative, then an owner",
          rows: REL.map(r => ({ k: r.k, label: `${r.pic} ${r.en.replace(/ \(.*\)/, "")}` })),
          cols: OWN.map(o => ({ k: o.k, label: o.label })),
          out: relOut
        }
      },
      {
        id: "g-amm",
        title: "عَمّ and عَمَّة: uncle and aunt on the FATHER's side",
        body: [
          "Arabic has different words for uncles and aunts depending on which parent they're related to.",
          "<b>عَمّ</b> (ʿamm) is your <b>father's brother</b>, and <b>عَمَّة</b> (ʿamma, adding ة) is your <b>father's sister</b>.",
          "In Dialogue 2: العَبّاسُ، حَمْزَةُ and أَبُو طالِبٍ are his عَمّ (the teacher notes the Prophet ﷺ had about 10–11 paternal uncles), and صَفِيَّةُ is his عَمَّة.",
          "The words for the <b>mother's</b> side (خال / خالَة) come in the next lesson."
        ]
      },
      {
        id: "g-ibn",
        title: "Son and daughter: اِبْن · اِبْنَة",
        body: [
          "<b>اِبْن</b> (ibn) = son. Add ة for <b>اِبْنَة</b> (ibna) = daughter. Another common word for daughter is <b>بِنْت</b> (bint).",
          "The alif at the start is only pronounced at the beginning of speech. After another word it falls silent: وَهَذا ابْنُهُ is said <i>wa hādhā <b>bnu</b>hu</i>.",
          "The teacher's summary: the Prophet ﷺ had three sons (القاسِم، عَبْدُ الله، إِبْراهِيم) and four daughters (فاطِمَة، رُقَيَّة، زَيْنَب، أُمّ كُلْثُوم)."
        ]
      },
      {
        id: "g-gram-fem",
        title: "Grammatically feminine words",
        body: [
          "ʿAlī says <b>هَذِهِ</b> صُورَةُ أُسْرَتِي, using هَذِهِ, not هَذا. That's because صُورَة (picture) is a <b>feminine word</b>: it ends in ة.",
          "As the teacher puts it, a picture isn't biologically female; it's <b>linguistically</b> feminine. The same is true for أُسْرَة (family) and شَجَرَة (tree): هَلْ <b>هَذِهِ</b> شَجَرَةٌ؟",
          "Rule of thumb for now: a word ending in ة takes هَذِهِ and هِيَ."
        ],
        widget: {
          type: "combo", label: "This is… · pick a word",
          rows: [{ k: "sura", label: "🖼️ picture" }, { k: "shajara", label: "🌳 tree" }, { k: "usra", label: "👨‍👩‍👧 family" }, { k: "kitab", label: "📕 book" }, { k: "qalam", label: "🖊️ pen" }],
          cols: [{ k: "x", label: "👇 هَذا or هَذِهِ?" }],
          out: {
            "sura|x": ["هَذِهِ صُورَةٌ.", "hādhihi ṣūra.", "This is a picture.", "ends in ة → feminine → هَذِهِ"],
            "shajara|x": ["هَذِهِ شَجَرَةٌ.", "hādhihi shajara.", "This is a tree.", "ends in ة → feminine → هَذِهِ"],
            "usra|x": ["هَذِهِ أُسْرَةٌ.", "hādhihi usra.", "This is a family.", "ends in ة → feminine → هَذِهِ"],
            "kitab|x": ["هَذا كِتابٌ.", "hādhā kitāb.", "This is a book.", "no ة → masculine → هَذا"],
            "qalam|x": ["هَذا قَلَمٌ.", "hādhā qalam.", "This is a pen.", "no ة → masculine → هَذا"]
          }
        }
      }
    ],

    sounds: {
      intro: "The family words bring in two important sounds: ع versus the plain hamza (أ), and the shadda, which doubles a letter. Tap, listen and repeat.",
      letters: [
        { l: "ع", name: "ʿayn", tip: "The throat squeeze. Don't skip it: عَمّ (uncle) and أُمّ (mother) differ only in this first sound!", ex: ["عَمٌّ", "عَمَّةٌ", "مُعَلِّمَةٌ", "عَدْنانُ", "عَبْلَةُ"] },
        { l: "ـّ", name: "shadda (doubling)", tip: "A shadda means the letter is held twice as long: jad-d, ʿam-m, muʿal-lim. Lean on it, or the word changes.", ex: ["جَدٌّ", "جَدَّةٌ", "أُمٌّ", "عَمّار", "مُعَلِّمٌ"] },
        { l: "ج", name: "jīm", tip: "Like English “j” in “jam”. (In Egypt it's often said like a hard “g”.)", ex: ["جَدِّي", "جَدَّتِي", "شَجَرَةٌ"] },
        { l: "ش", name: "shīn", tip: "Like English “sh”.", ex: ["شَجَرَةٌ", "ما شاءَ اللهُ"] },
        { l: "ص", name: "ṣād", tip: "The heavy s again. Keep the vowels deep: ṣūra, not sūra.", ex: ["صُورَةٌ", "صَفِيَّةُ"] }
      ],
      pairs: [
        { a: ["عَمٌّ", "ʿamm", "uncle"], b: ["أُمٌّ", "umm", "mother"], note: "ع vs أ" },
        { a: ["عَمٌّ", "ʿamm", "uncle"], b: ["عَمَّةٌ", "ʿamma", "aunt"], note: "m vs f" },
        { a: ["جَدٌّ", "jadd", "grandfather"], b: ["جَدَّةٌ", "jadda", "grandmother"], note: "m vs f" },
        { a: ["اِبْنٌ", "ibn", "son"], b: ["اِبْنَةٌ", "ibna", "daughter"], note: "m vs f" },
        { a: ["والِدِي", "wālidī", "my father"], b: ["والِدُهُ", "wāliduhu", "his father"], note: "my vs his" }
      ]
    },

    tips: [
      { icon: "📖", t: "Revise the previous chapter", d: "The teacher reminds you that مُهَنْدِس, طالِب and طَبِيبَة all come from Unit 1. If you don't recognise them instantly, go back to Lessons 1–2 and do a flashcard round." },
      { icon: "🎩", t: "Feminine doesn't have to mean female", d: "صُورَة (picture) is linguistically feminine because of its ة, so you say هَذِهِ صُورَةٌ. The same goes for أُسْرَة and شَجَرَة." },
      { icon: "😍", t: "ما شاءَ اللهُ", d: "Say it when you like or admire something, e.g. a nice family photo. ʿAmmār says it twice in Dialogue 1." },
      { icon: "🔁", t: "Two words, same meaning", d: "والِد = أَب, والِدَة = أُمّ, مُدَرِّس = مُعَلِّم. Learn both of each pair." },
      { icon: "👨‍👦", t: "عَمّ is the father's brother only", d: "عَمّ and عَمَّة are the uncle and aunt on your father's side. The mother's side uses different words, coming in the next lesson." },
      { icon: "🤲", t: "ﷺ after the Prophet's name", d: "When the Prophet is mentioned, both speakers say صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ. In writing it's often shortened to ﷺ." },
      { icon: "🧠", t: "ـهُ = his", d: "Dialogue 2 is a great drill for the ending ـهُ: والِدُهُ، والِدَتُهُ، جَدُّهُ، عَمُّهُ، عَمَّتُهُ، ابْنُهُ، ابْنَتُهُ." }
    ],

    practice: [
      { type: "mcq", q: "Which word means the same as والِد (father)?", options: ["أَخ", "أَب", "جَدّ"], answer: 1 },
      { type: "mcq", q: "Which word means the same as والِدَة (mother)?", options: ["أُمّ", "عَمَّة", "أُخْت"], answer: 0 },
      { type: "mcq", q: "Which word means the same as مُدَرِّس (teacher)?", options: ["مُهَنْدِس", "مُعَلِّم", "طالِب"], answer: 1 },
      { type: "mcq", q: "Your FATHER's brother is your…", options: ["جَدّ", "عَمّ", "اِبْن"], answer: 1 },
      { type: "mcq", q: "Your FATHER's sister is your…", options: ["عَمَّة", "جَدَّة", "اِبْنَة"], answer: 0 },
      { type: "mcq", q: "Why does ʿAlī say هَذِهِ صُورَةُ أُسْرَتِي and not هَذا?", options: ["Because his mother is in the photo", "Because صُورَة is a feminine word (it ends in ة)", "Because هَذِهِ means “picture”"], answer: 1 },
      { type: "mcq", q: "How do you say “his mother”?", options: ["والِدَتُهُ", "والِدَةُهُ", "والِدَتِي"], answer: 0, explain: "ة becomes ت before the ending ـهُ." },
      { type: "mcq", q: "عَمُّهُ means…", options: ["his uncle", "my uncle", "her uncle"], answer: 0 },
      { type: "mcq", q: "How many daughters of the Prophet ﷺ are named in Dialogue 2?", options: ["three", "four", "seven"], answer: 1, explain: "فاطِمَة، رُقَيَّة، زَيْنَب، أُمّ كُلْثُوم. The three sons are القاسِم، عَبْدُ الله، إِبْراهِيم." },
      { type: "fill", sentence: "هَذا ___ عَدْنانُ وَهُوَ مُهَنْدِسٌ.", en: "This is my father ʿAdnān, and he is an engineer.", options: ["والِدَتِي", "والِدِي", "جَدَّتِي"], answer: 1 },
      { type: "fill", sentence: "هَذِهِ أُخْتِي عَبْلَةُ وَهِيَ ___.", en: "This is my sister ʿAbla, and she is a teacher.", options: ["مُعَلِّمٌ", "مُعَلِّمَةٌ", "طالِبٌ"], answer: 1 },
      { type: "fill", sentence: "___ صُورَةُ أُسْرَتِي.", en: "This is a picture of my family.", options: ["هَذا", "هَذِهِ", "هُوَ"], answer: 1 },
      { type: "fill", sentence: "وَهَذِهِ ___ صَفِيَّةُ.", en: "And this is his aunt Ṣafiyya.", options: ["عَمُّهُ", "عَمَّتُهُ", "عَمَّةُهُ"], answer: 1 },
      { type: "order", words: ["هَذِهِ", "صُورَةُ", "أُسْرَتِي."], en: "This is a picture of my family." },
      { type: "order", words: ["هَذا", "جَدِّي."], en: "This is my grandfather." },
      { type: "order", words: ["هَلْ", "هَذِهِ", "شَجَرَةٌ؟"], en: "Is this a tree?" },
      { type: "order", words: ["وَهَذا", "ابْنُهُ", "إِبْراهِيمُ."], en: "And this is his son Ibrāhīm." },
      { type: "reply", prompt: "هَذِهِ صُورَةُ أُسْرَتِي.", en: "Choose a logical reply", options: ["ما شاءَ اللهُ!", "مَعَ السَّلامَةِ.", "وَعَلَيْكُمُ السَّلامُ."], answer: 0 },
      { type: "reply", prompt: "مَنْ هَذِهِ؟", en: "Choose a logical reply", options: ["هَذا جَدِّي.", "هَذِهِ جَدَّتِي.", "هُوَ طالِبٌ."], answer: 1 },
      { type: "reply", prompt: "هَذِهِ أُسْرَةُ الرَّسُولِ، صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ.", en: "Choose a logical reply", options: ["صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ.", "أَهْلًا وَسَهْلًا.", "مَنْ هَذا؟"], answer: 0 }
    ],

    roleplay: [
      { them: "السَّلامُ عَلَيْكُمْ.", you: "وَعَلَيْكُمُ السَّلامُ. هَذِهِ صُورَةُ أُسْرَتِي.", hint: "Reply, then show your family photo" },
      { them: "ما شاءَ اللهُ! مَنْ هَذا؟", you: "هَذا والِدِي … وَهُوَ … (name, job)", hint: "Introduce your father: name and job" },
      { them: "وَمَنْ هَذِهِ؟", you: "هَذِهِ والِدَتِي … وَهِيَ … (name, job + ة)", hint: "Introduce your mother" },
      { them: "وَمَنْ هَذا؟", you: "هَذا أَخِي … / هَذا جَدِّي.", hint: "A brother or your grandfather" },
      { them: "وَمَنْ هَذِهِ؟", you: "هَذِهِ أُخْتِي … / هَذِهِ جَدَّتِي.", hint: "A sister or your grandmother" },
      { them: "هَلْ هَذا عَمُّكَ؟", you: "نَعَمْ، هَذا عَمِّي. / لا، هَذا أَبِي.", hint: "Is this your uncle? Answer yes or no" },
      { them: "ما شاءَ اللهُ! مَعَ السَّلامَةِ.", you: "مَعَ السَّلامَةِ.", hint: "Say goodbye" }
    ]
  });
})();
