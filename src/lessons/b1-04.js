// Book 1 · Video 4 — Unit 2 (الأسرة), Dialogue 3 (book pp. 32–33) + teacher's family summary and singular/plural table
// Source: Al-ʿArabiyyah Bayna Yadayk Book 1 + Al-Lisan video commentary (lesson 4 transcript)
(function () {
  const REL = [
    ["ibn", "اِبْنٌ", "ibn", "son", "m"], ["bint", "بِنْتٌ", "bint", "daughter", "f"],
    ["akh", "أَخٌ", "akh", "brother", "m"], ["ukht", "أُخْتٌ", "ukht", "sister", "f"],
    ["amm", "عَمٌّ", "ʿamm", "uncle (father's side)", "m"], ["amma", "عَمَّةٌ", "ʿamma", "aunt (father's side)", "f"],
    ["khal", "خالٌ", "khāl", "uncle (mother's side)", "m"], ["khala", "خالَةٌ", "khāla", "aunt (mother's side)", "f"]
  ];
  const sizeOut = {};
  REL.forEach(([k, a, t, e, g]) => {
    sizeOut[k + "|big"] = [`${a} ${g === "f" ? "كَبِيرَةٌ" : "كَبِيرٌ"}`, `${t} ${g === "f" ? "kabīra" : "kabīr"}`, `an older ${e}`, g === "f" ? "Feminine noun → feminine adjective with ة" : "Masculine noun → masculine adjective"];
    sizeOut[k + "|small"] = [`${a} ${g === "f" ? "صَغِيرَةٌ" : "صَغِيرٌ"}`, `${t} ${g === "f" ? "ṣaghīra" : "ṣaghīr"}`, `a younger ${e}`, g === "f" ? "Feminine noun → feminine adjective with ة" : "Masculine noun → masculine adjective"];
  });

  const WHO = [["saad", "سَعْدٌ", "Saʿd", "Saʿdun"], ["saida", "سَعِيدَةُ", "Saʿīda", "Saʿīdatu"], ["ab", "الأَبُ", "The father", "al-abu"], ["umm", "الأُمُّ", "The mother", "al-ummu"]];
  const WHERE = [["hammam", "الحَمّامِ", "l-ḥammām", "the bathroom"], ["ghurfa", "الغُرْفَةِ", "l-ghurfa", "the room"], ["musalla", "المُصَلَّى", "l-muṣallā", "the prayer room"], ["masjid", "المَسْجِدِ", "l-masjid", "the mosque"]];
  const whereOut = {};
  WHO.forEach(([k, a, e, t]) => WHERE.forEach(([pk, pa, pt, pe]) => {
    whereOut[k + "|" + pk] = [`${a} فِي ${pa}.`, `${t} fi ${pt}`, `${e} is in ${pe}.`, "No word for “is”: just person + فِي + place."];
  }));

  LESSONS.push({
    id: "b1-04",
    book: 1,
    num: 4,
    unit: "الوَحْدَةُ الثّانِيَةُ · الأُسْرَةُ",
    unitEn: "Unit 2 · The Family",
    title: "Where Are the Children? Big, Small & Plurals",
    titleAr: "أَيْنَ الأَوْلادُ؟",
    covers: "Book pages 32–33 · Dialogue 3 + the teacher's family summary and singular/plural table",
    video: "https://www.youtube.com/playlist?list=PLDS9YrkKMtPR4-S3ih8wad7oXMyrdEdXY",
    goals: [
      "Say where someone is: سَعْدٌ فِي الحَمّامِ",
      "Recognise your first verbs: يَتَوَضَّأُ، يَقْرَأُ، تُصَلِّي",
      "Name places at home and for prayer: حَمّام، غُرْفَة، مُصَلًّى، مَسْجِد",
      "Complete the family: خال and خالَة (the mother's side)",
      "Describe size and age with كَبِير / صَغِير, matching the gender",
      "Learn singular → plural pairs, including the ة → ات rule"
    ],
    gender: { any: "يتوضأ|يقرأ|تصلي|هذا هو|هذه هي|سعيدة", fem: "تصلي|هذه هي|سعيدة", q: "Is this about a male (or masculine thing) or a female (or feminine thing)?" },

    dialogues: [
      {
        id: "u2d3", title: "Dialogue 3", titleAr: "الحِوارُ الثّالِثُ",
        note: "Dawn. The adhān is calling, and the father asks where the children are before going to the mosque.",
        people: { "الأُمّ": "f1", "الأَب": "m4", "سَعْد": "m1", "سَعِيد": "m2", "سَعْد وَسَعِيد": "m3" },
        lines: [
          ["الأُمّ", "هَذا أَذانُ الفَجْرِ.", "hādhā adhānu l-fajr.", "This is the call to the dawn prayer."],
          ["الأَب", "اللهُ أَكْبَرُ، اللهُ أَكْبَرُ. أَيْنَ الأَوْلادُ؟", "allāhu akbar, allāhu akbar. ayna l-awlād?", "God is the greatest, God is the greatest. Where are the children?"],
          ["الأُمّ", "سَعْدٌ فِي الحَمّامِ يَتَوَضَّأُ.", "Saʿdun fi l-ḥammām yatawaḍḍaʾ.", "Saʿd is in the bathroom doing wuḍūʾ."],
          ["الأَب", "وَأَيْنَ سَعِيدٌ؟", "wa ayna Saʿīd?", "And where is Saʿīd?"],
          ["الأُمّ", "سَعِيدٌ فِي الغُرْفَةِ يَقْرَأُ القُرْآنَ.", "Saʿīdun fi l-ghurfa yaqraʾu l-qurʾān.", "Saʿīd is in the room reading the Qurʾān."],
          ["الأَب", "وَأَيْنَ سَعِيدَةُ؟", "wa ayna Saʿīda?", "And where is Saʿīda?"],
          ["الأُمّ", "سَعِيدَةُ فِي المُصَلَّى تُصَلِّي.", "Saʿīdatu fi l-muṣallā tuṣallī.", "Saʿīda is in the prayer room praying."],
          ["الأَب", "أَيْنَ المِعْطَفُ؟", "ayna l-miʿṭaf?", "Where is the coat?"],
          ["سَعْد", "هَذا هُوَ المِعْطَفُ يا والِدِي.", "hādhā huwa l-miʿṭaf yā wālidī.", "Here is the coat, father."],
          ["الأَب", "وَأَيْنَ النَّظّارَةُ؟", "wa ayna n-naẓẓāra?", "And where are the glasses?"],
          ["سَعِيد", "هَذِهِ هِيَ النَّظّارَةُ يا والِدِي.", "hādhihi hiya n-naẓẓāra yā wālidī.", "Here are the glasses, father."],
          ["الأَب", "هَيّا بِنا إِلَى المَسْجِدِ.", "hayyā binā ila l-masjid.", "Let's go to the mosque."],
          ["سَعْد وَسَعِيد", "هَيّا بِنا.", "hayyā binā.", "Let's go."]
        ]
      }
    ],

    vocab: [
      { ar: "أَذانٌ", tr: "adhān", en: "call to prayer", pic: "📢", cat: "Prayer" },
      { ar: "الفَجْرُ", tr: "al-fajr", en: "dawn (the dawn prayer)", pic: "🌅", cat: "Prayer" },
      { ar: "اللهُ أَكْبَرُ", tr: "allāhu akbar", en: "God is the greatest", pic: "🤲", cat: "Prayer" },
      { ar: "القُرْآنُ", tr: "al-qurʾān", en: "the Qurʾān", pic: "📖", cat: "Prayer" },
      { ar: "مَسْجِدٌ", tr: "masjid", en: "mosque", pic: "🕌", cat: "Places" },
      { ar: "مُصَلًّى", tr: "muṣallā", en: "prayer room (not a full mosque)", pic: "🧎", cat: "Places" },
      { ar: "حَمّامٌ", tr: "ḥammām", en: "bathroom", pic: "🚿", cat: "Places" },
      { ar: "غُرْفَةٌ", tr: "ghurfa", en: "room", pic: "🚪", cat: "Places" },
      { ar: "يَتَوَضَّأُ", tr: "yatawaḍḍaʾu", en: "he does wuḍūʾ (ablution)", pic: "💧", cat: "Verbs" },
      { ar: "يَقْرَأُ", tr: "yaqraʾu", en: "he reads", pic: "📖", cat: "Verbs" },
      { ar: "تُصَلِّي", tr: "tuṣallī", en: "she prays", pic: "🧎‍♀️", cat: "Verbs" },
      { ar: "مِعْطَفٌ", tr: "miʿṭaf", en: "coat", pic: "🧥", cat: "Things" },
      { ar: "نَظّارَةٌ", tr: "naẓẓāra", en: "glasses", pic: "👓", cat: "Things" },
      { ar: "وَلَدٌ", tr: "walad", en: "boy, child", pic: "👦", cat: "Family" },
      { ar: "أَوْلادٌ", tr: "awlād", en: "children, boys (plural of وَلَد)", pic: "👦👦", cat: "Family" },
      { ar: "بِنْتٌ", tr: "bint", en: "girl, daughter", pic: "👧", cat: "Family" },
      { ar: "بَناتٌ", tr: "banāt", en: "girls, daughters (plural of بِنْت)", pic: "👧👧", cat: "Family" },
      { ar: "خالٌ", tr: "khāl", en: "uncle (mother's brother)", pic: "🧔", cat: "Family" },
      { ar: "خالَةٌ", tr: "khāla", en: "aunt (mother's sister)", pic: "🧕", cat: "Family" },
      { ar: "كَبِيرٌ", tr: "kabīr", en: "big; old (older)", pic: "🐘", cat: "Describing" },
      { ar: "صَغِيرٌ", tr: "ṣaghīr", en: "small; young (younger)", pic: "🐭", cat: "Describing" },
      { ar: "فِي", tr: "fī", en: "in", pic: "📥", cat: "Little words" },
      { ar: "إِلَى", tr: "ilā", en: "to", pic: "➡️", cat: "Little words" },
      { ar: "يا", tr: "yā", en: "O… (used when calling someone)", pic: "📣", cat: "Little words" },
      { ar: "هَيّا بِنا", tr: "hayyā binā", en: "let's go", pic: "🏃", cat: "Little words" }
    ],

    grammar: [
      {
        id: "g-fi",
        title: "Where is…? Person + فِي + place",
        body: [
          "To say where someone is, put the person, then <b>فِي</b> (in), then the place. As before, there's no word for <i>is</i>: سَعْدٌ فِي الحَمّامِ <i>Saʿd [is] in the bathroom</i>.",
          "After فِي, the place word ends in an <b>i</b> sound: الحَمّامِ، الغُرْفَةِ، المَسْجِدِ. (Grammar for later: فِي puts the noun in the genitive case.)",
          "The mother then adds what each child is doing, using the book's first verbs: يَتَوَضَّأُ (he does wuḍūʾ), يَقْرَأُ (he reads), تُصَلِّي (she prays). Notice that the verb for Saʿīda starts with ت, not ي. That's the topic of Lesson 5!"
        ],
        widget: {
          type: "combo", label: "Where is everyone? · pick a person, then a place",
          rows: WHO.map(([k, a, e]) => ({ k, label: `${a} · ${e}` })),
          cols: WHERE.map(([k, a, t, e]) => ({ k, label: `${a.replace(/ِ$/, "")} · ${e.replace("the ", "")}` })),
          out: whereOut
        }
      },
      {
        id: "g-places",
        title: "مُصَلًّى vs مَسْجِد",
        body: [
          "The teacher explains the difference. <b>مَسْجِد</b> (masjid) is a mosque: a dedicated building where the five daily prayers are held, with the adhān and usually a fixed imam.",
          "<b>مُصَلًّى</b> (muṣallā) comes from صَلاة (prayer). It's simply a <b>place to pray</b>: a prayer room in a house, an airport, a company or a school."
        ]
      },
      {
        id: "g-words",
        title: "يا · هَيّا بِنا · إِلَى · اللهُ أَكْبَرُ",
        body: [
          "<b>يا</b> is used before you call someone: يا والِدِي <i>(O) my father!</i>, يا أَحْمَدُ, يا أُمِّي. It's optional but very common.",
          "<b>هَيّا بِنا</b> = <i>let's (go / do it)</i>. With <b>إِلَى</b> (to): هَيّا بِنا إِلَى المَسْجِدِ <i>Let's go to the mosque</i>.",
          "<b>أَكْبَرُ</b> comes from <b>كَبِير</b> (big, great), so اللهُ أَكْبَرُ = <i>God is the greatest</i>. The father repeats it after the adhān, which the teacher notes is highly recommended."
        ]
      },
      {
        id: "g-gender",
        title: "Coat is masculine, glasses are feminine",
        body: [
          "The father asks about المِعْطَف, and Saʿd answers <b>هَذا هُوَ</b> المِعْطَفُ. For النَّظّارَة the answer is <b>هَذِهِ هِيَ</b> النَّظّارَةُ.",
          "As the teacher jokes, glasses aren't only for girls! The <b>word</b> نَظّارَة is feminine because of its ة. Grammatical gender belongs to the word, not the object.",
          "<b>هَذا هُوَ …</b> / <b>هَذِهِ هِيَ …</b> means <i>Here is the…</i> when you hand something over."
        ]
      },
      {
        id: "g-tree",
        title: "The whole family, including the mother's side",
        body: [
          "From the teacher's summary page. On your <b>father's</b> side the uncle and aunt are <b>عَمّ / عَمَّة</b>. On your <b>mother's</b> side they're <b>خال / خالَة</b>.",
          "For children: <b>وَلَد</b> = boy or child (plural <b>أَوْلاد</b>, children). <b>بِنْت</b> = girl or daughter (plural <b>بَنات</b>). اِبْن / اِبْنَة from Lesson 3 also mean son / daughter."
        ],
        tree: { label: "Your family · tap to hear", levels: [
          [{ ar: "جَدٌّ", en: "grandfather", g: "m" }, { ar: "جَدَّةٌ", en: "grandmother", g: "f" }],
          [{ ar: "عَمٌّ", en: "father's brother", g: "m" }, { ar: "عَمَّةٌ", en: "father's sister", g: "f" }, { ar: "أَبٌ / والِدٌ", en: "father", g: "m" }, { ar: "أُمٌّ / والِدَةٌ", en: "mother", g: "f" }, { ar: "خالٌ", en: "mother's brother", g: "m" }, { ar: "خالَةٌ", en: "mother's sister", g: "f" }],
          [{ ar: "أَخٌ", en: "brother", g: "m" }, { ar: "أَنا", en: "me", me: true }, { ar: "أُخْتٌ", en: "sister", g: "f" }],
          [{ ar: "اِبْنٌ / وَلَدٌ", en: "son / boy", g: "m" }, { ar: "اِبْنَةٌ / بِنْتٌ", en: "daughter / girl", g: "f" }]
        ]}
      },
      {
        id: "g-size",
        title: "كَبِير and صَغِير: big/small AND old/young",
        body: [
          "<b>كَبِير</b> = big and <b>صَغِير</b> = small. The teacher points out that they also describe <b>age</b>: اِبْنٌ كَبِيرٌ is an <i>older son</i> and بِنْتٌ صَغِيرَةٌ is a <i>young daughter</i>.",
          "The adjective comes <b>after</b> the noun and must <b>match its gender</b>. For a feminine noun, add ة: عَمَّةٌ كَبِيرَةٌ (an older aunt) and عَمٌّ صَغِيرٌ (a young uncle)."
        ],
        widget: {
          type: "combo", label: "Describe them · pick a relative, then older or younger",
          rows: REL.map(([k, a, t, e]) => ({ k, label: `${a} · ${e.replace(/ \(.*\)/, "")}` })),
          cols: [{ k: "big", label: "🐘 كَبِير big / older" }, { k: "small", label: "🐭 صَغِير small / younger" }],
          out: sizeOut
        }
      },
      {
        id: "g-plural",
        title: "Singular and plural: المُفْرَدُ وَالجَمْعُ",
        body: [
          "The teacher's \"bad news\": Arabic plurals are not as simple as adding -s. There are many patterns, and most aren't predictable yet, so <b>memorise each singular together with its plural</b>.",
          "Once you've memorised enough of them you'll start to feel the patterns. Here is the teacher's table of the nouns so far (singular ← plural, read right to left):"
        ],
        table: { head: ["", "Singular ← Plural", "Say it", "Meaning"], rows: [
          ["🏷️", "اِسْمٌ ← أَسْماءٌ", "ism → asmāʾ", "name → names"],
          ["👦", "أَخٌ ← إِخْوَةٌ", "akh → ikhwa", "brother → brothers"],
          ["👧", "أُخْتٌ ← أَخَواتٌ", "ukht → akhawāt", "sister → sisters"],
          ["👨", "أَبٌ ← آباءٌ", "ab → ābāʾ", "father → fathers"],
          ["👩", "أُمٌّ ← أُمَّهاتٌ", "umm → ummahāt", "mother → mothers"],
          ["👦", "اِبْنٌ ← أَبْناءٌ", "ibn → abnāʾ", "son → sons"],
          ["👧", "بِنْتٌ ← بَناتٌ", "bint → banāt", "girl → girls"],
          ["🧒", "وَلَدٌ ← أَوْلادٌ", "walad → awlād", "boy → children"],
          ["👴", "جَدٌّ ← أَجْدادٌ", "jadd → ajdād", "grandfather → grandfathers"],
          ["🧔", "عَمٌّ ← أَعْمامٌ", "ʿamm → aʿmām", "uncle (f. side) → uncles"],
          ["🧔", "خالٌ ← أَخْوالٌ", "khāl → akhwāl", "uncle (m. side) → uncles"],
          ["👨‍⚕️", "طَبِيبٌ ← أَطِبّاءُ", "ṭabīb → aṭibbāʾ", "doctor → doctors"],
          ["👨‍🏫", "مُدَرِّسٌ ← مُدَرِّسُونَ", "mudarris → mudarrisūn", "teacher → teachers"],
          ["👷", "مُهَنْدِسٌ ← مُهَنْدِسُونَ", "muhandis → muhandisūn", "engineer → engineers"],
          ["👨‍🎓", "طالِبٌ ← طُلّابٌ", "ṭālib → ṭullāb", "student → students"],
          ["✉️", "رَسُولٌ ← رُسُلٌ", "rasūl → rusul", "messenger → messengers"],
          ["🖼️", "صُورَةٌ ← صُوَرٌ", "ṣūra → ṣuwar", "picture → pictures"],
          ["🕌", "مَسْجِدٌ ← مَساجِدُ", "masjid → masājid", "mosque → mosques"],
          ["🚪", "غُرْفَةٌ ← غُرَفٌ", "ghurfa → ghuraf", "room → rooms"],
          ["👓", "نَظّارَةٌ ← نَظّاراتٌ", "naẓẓāra → naẓẓārāt", "glasses → pairs of glasses"],
          ["🧥", "مِعْطَفٌ ← مَعاطِفُ", "miʿṭaf → maʿāṭif", "coat → coats"]
        ]}
      },
      {
        id: "g-at",
        title: "The good news: ة → ات",
        body: [
          "For feminine words that end in <b>ة</b>, most plurals follow one easy rule: remove the ة and add <b>ات</b> (-āt).",
          "مُعَلِّمَة → <b>مُعَلِّمات</b> · طَبِيبَة → <b>طَبِيبات</b> · عَمَّة → <b>عَمّات</b> · خالَة → <b>خالات</b> · جَدَّة → <b>جَدّات</b>",
          "Watch for exceptions you've already met: صُورَة → صُوَر and غُرْفَة → غُرَف."
        ],
        widget: {
          type: "combo", label: "Make it plural · pick a word",
          rows: [["muallima", "مُعَلِّمَة · teacher"], ["tabiba", "طَبِيبَة · doctor"], ["amma", "عَمَّة · aunt"], ["khala", "خالَة · aunt"], ["jadda", "جَدَّة · grandmother"], ["talibah", "طالِبَة · student"]].map(([k, l]) => ({ k, label: l })),
          cols: [{ k: "s", label: "one (مُفْرَد)" }, { k: "p", label: "many (جَمْع) +ات" }],
          out: {
            "muallima|s": ["مُعَلِّمَةٌ", "muʿallima", "a teacher (f)"], "muallima|p": ["مُعَلِّماتٌ", "muʿallimāt", "teachers (f)", "ة → ات"],
            "tabiba|s": ["طَبِيبَةٌ", "ṭabība", "a doctor (f)"], "tabiba|p": ["طَبِيباتٌ", "ṭabībāt", "doctors (f)", "ة → ات"],
            "amma|s": ["عَمَّةٌ", "ʿamma", "an aunt"], "amma|p": ["عَمّاتٌ", "ʿammāt", "aunts", "ة → ات"],
            "khala|s": ["خالَةٌ", "khāla", "an aunt"], "khala|p": ["خالاتٌ", "khālāt", "aunts", "ة → ات"],
            "jadda|s": ["جَدَّةٌ", "jadda", "a grandmother"], "jadda|p": ["جَدّاتٌ", "jaddāt", "grandmothers", "ة → ات"],
            "talibah|s": ["طالِبَةٌ", "ṭāliba", "a student (f)"], "talibah|p": ["طالِباتٌ", "ṭālibāt", "students (f)", "ة → ات"]
          }
        }
      }
    ],

    sounds: {
      intro: "This dialogue has lots of throat and heavy sounds. Practise them slowly, then try the whole dialogue in Shadow mode.",
      letters: [
        { l: "ض", name: "ḍād", tip: "The heavy d, famous as the sound “only Arabic has” (Arabic is called لُغَةُ الضّاد). Say d with the tongue pressed wide and the mouth full.", ex: ["يَتَوَضَّأُ"] },
        { l: "ظ", name: "ẓāʾ", tip: "The heavy version of ذ (the “th” in “this”). It appears in نَظّارَة.", ex: ["نَظّارَةٌ"] },
        { l: "غ", name: "ghayn", tip: "A gargled g, like the French r in “Paris”. It's the voiced partner of خ.", ex: ["غُرْفَةٌ", "صَغِيرٌ"] },
        { l: "ح", name: "ḥāʾ", tip: "The breathy throat h from Lesson 1. Hold it in حَمّام.", ex: ["حَمّامٌ"] },
        { l: "ء", name: "hamza", tip: "A tiny catch in the throat, like the break in “uh-oh”. Don't swallow it at the end of يَقْرَأُ or يَتَوَضَّأُ.", ex: ["يَقْرَأُ", "أَذانٌ", "القُرْآنُ"] }
      ],
      pairs: [
        { a: ["كَبِيرٌ", "kabīr", "big"], b: ["صَغِيرٌ", "ṣaghīr", "small"], note: "opposites" },
        { a: ["خالٌ", "khāl", "mother's brother"], b: ["حالٌ", "ḥāl", "condition"], note: "خ vs ح" },
        { a: ["عَمٌّ", "ʿamm", "father's brother"], b: ["خالٌ", "khāl", "mother's brother"], note: "the two uncles" },
        { a: ["وَلَدٌ", "walad", "boy"], b: ["أَوْلادٌ", "awlād", "children"], note: "singular vs plural" },
        { a: ["يَقْرَأُ", "yaqraʾu", "he reads"], b: ["تُصَلِّي", "tuṣallī", "she prays"], note: "ي (he) vs ت (she)" }
      ]
    },

    tips: [
      { icon: "📢", t: "Repeat after the adhān", d: "The father replies اللهُ أَكْبَرُ، اللهُ أَكْبَرُ when he hears the adhān. The teacher notes that repeating after the adhān is highly recommended." },
      { icon: "🕌", t: "مَسْجِد ≠ مُصَلًّى", d: "A مَسْجِد is a dedicated mosque with the adhān and the five prayers. A مُصَلًّى is any prayer room: at home, at an airport or at school." },
      { icon: "👓", t: "Grammatical gender belongs to the word", d: "النَّظّارَة (glasses) is feminine because of its ة, not because glasses are for girls. So: هَذِهِ هِيَ النَّظّارَةُ. Meanwhile المِعْطَف is masculine: هَذا هُوَ المِعْطَفُ." },
      { icon: "📣", t: "يا is optional", d: "يا والِدِي = O my father. You can drop يا, but Arabs use it all the time when calling someone." },
      { icon: "🐘", t: "كَبِير / صَغِير also mean older / younger", d: "اِبْنٌ كَبِيرٌ = an older son, عَمٌّ صَغِيرٌ = a young uncle. Add ة for feminine nouns: بِنْتٌ صَغِيرَةٌ." },
      { icon: "🧠", t: "Memorise plurals in pairs", d: "Plurals are mostly unpredictable at this stage. Learn وَلَد ← أَوْلاد as one unit, never the singular alone. The patterns will come later." },
      { icon: "✅", t: "Easy plural: ة → ات", d: "Most feminine words in ة make their plural with ات: مُعَلِّمَة → مُعَلِّمات. Exceptions so far: صُوَر, غُرَف." },
      { icon: "✏️", t: "Typo alert", d: "The teacher notes that وَأَيْنَ سَعِيدَةُ should have no tanween. If your copy prints سَعِيدَةٌ, read it as سَعِيدَةُ." }
    ],

    practice: [
      { type: "mcq", q: "أَيْنَ الأَوْلادُ؟ means…", options: ["Where are the children?", "Where is the coat?", "Who are the children?"], answer: 0 },
      { type: "mcq", q: "Where is Saʿd, and what is he doing?", options: ["In the room, reading the Qurʾān", "In the bathroom, doing wuḍūʾ", "In the prayer room, praying"], answer: 1 },
      { type: "mcq", q: "Where is Saʿīda?", options: ["فِي المُصَلَّى", "فِي الحَمّامِ", "فِي المَسْجِدِ"], answer: 0 },
      { type: "mcq", q: "Why is it هَذِهِ هِيَ النَّظّارَةُ (feminine)?", options: ["Because Saʿīda wears them", "Because the word نَظّارَة ends in ة", "Because هِيَ means glasses"], answer: 1 },
      { type: "mcq", q: "Your MOTHER's brother is your…", options: ["عَمّ", "خال", "جَدّ"], answer: 1 },
      { type: "mcq", q: "Your MOTHER's sister is your…", options: ["خالَة", "عَمَّة", "أُخْت"], answer: 0 },
      { type: "mcq", q: "How do you say “a young daughter”?", options: ["بِنْتٌ صَغِيرٌ", "بِنْتٌ صَغِيرَةٌ", "صَغِيرَةٌ بِنْتٌ"], answer: 1, explain: "The adjective comes after the noun and takes ة to match a feminine noun." },
      { type: "mcq", q: "What is the plural of وَلَد?", options: ["وَلَدات", "أَوْلاد", "وُلُود"], answer: 1 },
      { type: "mcq", q: "What is the plural of مُعَلِّمَة?", options: ["مُعَلِّمات", "مُعَلِّمُون", "مَعالِم"], answer: 0, explain: "ة → ات" },
      { type: "mcq", q: "What is the plural of طالِب?", options: ["طالِبات", "طُلّاب", "طالِبُون"], answer: 1 },
      { type: "mcq", q: "What is the plural of أُمّ?", options: ["أُمّات", "أُمَّهات", "أَمْام"], answer: 1 },
      { type: "mcq", q: "مَسْجِد ← ? (plural)", options: ["مَساجِد", "مَسْجِدات", "مُسُوج"], answer: 0 },
      { type: "mcq", q: "What does هَيّا بِنا mean?", options: ["Here you are", "Let's go", "Goodbye"], answer: 1 },
      { type: "fill", sentence: "سَعِيدٌ ___ الغُرْفَةِ يَقْرَأُ القُرْآنَ.", en: "Saʿīd is in the room reading the Qurʾān.", options: ["إِلَى", "فِي", "مِنْ"], answer: 1 },
      { type: "fill", sentence: "هَذا ___ المِعْطَفُ يا والِدِي.", en: "Here is the coat, father.", options: ["هِيَ", "هُوَ", "هَذِهِ"], answer: 1 },
      { type: "fill", sentence: "هَيّا بِنا ___ المَسْجِدِ.", en: "Let's go to the mosque.", options: ["فِي", "إِلَى", "يا"], answer: 1 },
      { type: "fill", sentence: "عَمَّةٌ ___", en: "an older aunt", options: ["كَبِيرٌ", "كَبِيرَةٌ", "صَغِيرٌ"], answer: 1 },
      { type: "order", words: ["أَيْنَ", "الأَوْلادُ؟"], en: "Where are the children?" },
      { type: "order", words: ["سَعْدٌ", "فِي", "الحَمّامِ."], en: "Saʿd is in the bathroom." },
      { type: "order", words: ["هَيّا", "بِنا", "إِلَى", "المَسْجِدِ."], en: "Let's go to the mosque." },
      { type: "reply", prompt: "وَأَيْنَ سَعِيدَةُ؟", en: "Choose a logical reply", options: ["سَعِيدَةُ فِي المُصَلَّى تُصَلِّي.", "هَذا هُوَ المِعْطَفُ.", "اللهُ أَكْبَرُ."], answer: 0 },
      { type: "reply", prompt: "هَيّا بِنا إِلَى المَسْجِدِ.", en: "Choose a logical reply", options: ["هَيّا بِنا.", "أَيْنَ النَّظّارَةُ؟", "ما شاءَ اللهُ."], answer: 0 },
      { type: "match", pairs: [["وَلَدٌ", "أَوْلادٌ"], ["بِنْتٌ", "بَناتٌ"], ["طالِبٌ", "طُلّابٌ"], ["أُمٌّ", "أُمَّهاتٌ"], ["مَسْجِدٌ", "مَساجِدُ"], ["غُرْفَةٌ", "غُرَفٌ"]], q: "Match each singular with its plural" }
    ],

    roleplay: [
      { them: "أَيْنَ الأَوْلادُ؟", you: "سَعْدٌ فِي الحَمّامِ يَتَوَضَّأُ.", hint: "Say Saʿd is in the bathroom doing wuḍūʾ" },
      { them: "وَأَيْنَ سَعِيدٌ؟", you: "سَعِيدٌ فِي الغُرْفَةِ يَقْرَأُ القُرْآنَ.", hint: "Saʿīd is in the room reading the Qurʾān" },
      { them: "وَأَيْنَ سَعِيدَةُ؟", you: "سَعِيدَةُ فِي المُصَلَّى تُصَلِّي.", hint: "Saʿīda is in the prayer room praying" },
      { them: "أَيْنَ المِعْطَفُ؟", you: "هَذا هُوَ المِعْطَفُ يا والِدِي.", hint: "Hand him the coat" },
      { them: "وَأَيْنَ النَّظّارَةُ؟", you: "هَذِهِ هِيَ النَّظّارَةُ يا والِدِي.", hint: "Hand him the glasses (feminine!)" },
      { them: "هَلْ عِنْدَكَ أَخٌ كَبِيرٌ؟", you: "نَعَمْ، … / لا، …", hint: "“Do you have an older brother?” (عِنْدَكَ = you have). Answer about your own family" },
      { them: "هَيّا بِنا إِلَى المَسْجِدِ.", you: "هَيّا بِنا.", hint: "Agree: let's go" }
    ]
  });
})();
