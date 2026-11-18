// Book 1 · Test 1 — اِخْتَبِرْ نَفْسَكَ (الوَحْدَتانِ ١–٢), book pp. 53–54
// Answers and explanations follow the Al-Lisan video (test 1 transcript).
window.TEST = {
  id: "b1-t1",
  book: 1,
  after: 5, // shown after Lesson 5 on the course home
  title: "Test 1 · Units 1–2",
  titleAr: "اِخْتَبِرْ نَفْسَكَ (الوَحْدَتانِ ١ – ٢)",
  covers: ["b1-01", "b1-02", "b1-03", "b1-04", "b1-05"],
  pages: "Book pages 53–54",
  intro: "The teacher's advice: do the test first without looking anything up, then check your answers. If you lose marks, revise the words and lessons listed in your results, and only move on to Unit 3 when you feel ready.",
  parts: [
    {
      title: "Part 1 · Vocabulary", titleAr: "أَوَّلًا: المُفْرَداتُ",
      sections: [
        {
          id: "s1", type: "sort", marks: 9,
          instr: "ضَعِ الكَلِماتِ الآتِيَةَ فِي مَكانِها المُناسِبِ مِنَ الجَدْوَلِ.",
          instrEn: "Put each word in its correct column: country, pronoun, number, family, place, job. One example is given in each column. Tap a word, then tap a column.",
          cols: [
            { k: "balad", ar: "بَلَد", en: "country", ex: "مِصْر", words: ["سُورِيا", "باكِسْتان", "تُرْكِيا"] },
            { k: "damir", ar: "ضَمِير", en: "pronoun", ex: "أَنْتَ", words: ["أَنْتِ", "هُوَ", "هِيَ"] },
            { k: "raqm", ar: "رَقْم", en: "number", ex: "خَمْسَة", words: ["ثَلاثَة", "واحِد", "تِسْعَة"] },
            { k: "usra", ar: "أُسْرَة", en: "family", ex: "أُخْت", words: ["جَدَّة", "والِد", "اِبْن"] },
            { k: "makan", ar: "مَكان", en: "place", ex: "حَمّام", words: ["غُرْفَة", "مَسْجِد", "مُصَلًّى"] },
            { k: "mihna", ar: "مِهْنَة", en: "job", ex: "مُدَرِّس", words: ["طالِب", "طَبِيبَة", "مُهَنْدِسَة"] }
          ],
          explain: "The teacher notes that طالِب (student) isn't exactly a job, but it's the closest fit and goes in the job column.",
          lesson: { "balad": "b1-01", "damir": "b1-02", "raqm": "b1-02", "usra": "b1-03", "makan": "b1-04", "mihna": "b1-02" }
        },
        {
          id: "s2", type: "fill", marks: 8,
          instr: "أَكْمِلِ الجُمَلَ بِالكَلِماتِ التّالِيَةِ.",
          instrEn: "Complete each sentence with one word from the bank. Each word is used once.",
          bank: ["أَذانُ", "يُصَلِّي", "أُسْرَةُ", "يَقْرَأُ", "جَدِّي", "الغُرْفَةِ", "طَبِيبَةٌ", "باكِسْتانَ"],
          items: [
            { s: "أَحْمَدُ فِي ___.", a: "الغُرْفَةِ", en: "Aḥmad is in the room.", lesson: "b1-04" },
            { s: "هَذِهِ والِدَتِي هِيَ ___.", a: "طَبِيبَةٌ", en: "This is my mother; she is a doctor.", lesson: "b1-03" },
            { s: "هَذا ___ عُمَرُ.", a: "جَدِّي", en: "This is my grandfather ʿUmar.", lesson: "b1-03" },
            { s: "عادِلٌ ___ القُرْآنَ الكَرِيمَ.", a: "يَقْرَأُ", en: "ʿĀdil is reading the Noble Qurʾān. يَقْرَأُ is a present verb (المُضارِع).", lesson: "b1-05" },
            { s: "أَحْمَدُ ___ فِي المَسْجِدِ.", a: "يُصَلِّي", en: "Aḥmad is praying in the mosque.", lesson: "b1-05" },
            { s: "هَذا ___ الفَجْرِ.", a: "أَذانُ", en: "This is the adhān for Fajr.", lesson: "b1-04" },
            { s: "أَنا مِنْ ___.", a: "باكِسْتانَ", en: "I am from Pakistan.", lesson: "b1-01" },
            { s: "هَذِهِ ___ الرَّسُولِ ﷺ.", a: "أُسْرَةُ", en: "This is the family of the Messenger ﷺ.", lesson: "b1-03" }
          ]
        },
        {
          id: "s3", type: "odd", marks: 5,
          instr: "ضَعْ عَلامَةَ (✗) عَلَى الكَلِمَةِ الغَرِيبَةِ.",
          instrEn: "Cross out the odd one out: the word that doesn't belong with the others.",
          items: [
            { w: ["أَخٌ", "صَدِيقٌ", "اِبْنٌ", "نَظّارَةٌ"], a: 3, why: "نَظّارَة (glasses) is a thing. The others are people.", lesson: "b1-04" },
            { w: ["حَمّامٌ", "غُرْفَةٌ", "شَجَرَةٌ", "مَسْجِدٌ"], a: 2, why: "شَجَرَة (tree) isn't a place you go into. The others are places/rooms.", lesson: "b1-04" },
            { w: ["يَتَوَضَّأُ", "مِعْطَفٌ", "يَقْرَأُ", "يُصَلِّي"], a: 1, why: "مِعْطَف (coat) is a noun. The others are verbs.", lesson: "b1-05" },
            { w: ["صُورَةٌ", "سِتَّةٌ", "اِثْنانِ", "أَرْبَعَةٌ"], a: 0, why: "صُورَة (picture) isn't a number.", lesson: "b1-02" },
            { w: ["أَنا", "مُصَلًّى", "أَنْتَ", "أَنْتِ"], a: 1, why: "مُصَلًّى (prayer room) is a place. The others are pronouns.", lesson: "b1-02" }
          ]
        }
      ]
    },
    {
      title: "Part 2 · Structures & grammar", titleAr: "ثانِيًا: التَّراكِيبُ وَالنَّحْوُ",
      sections: [
        {
          id: "s4", type: "correct", marks: 5,
          instr: "صَحِّحِ الأَخْطاءَ فِي الكَلِماتِ الَّتِي تَحْتَها خُطُوطٌ.",
          instrEn: "Each sentence has one wrong (underlined) word. Choose the correct replacement.",
          items: [
            { b: "هَذِهِ", w: "هُوَ", f: "النَّظّارَةُ يا أَبِي.", opts: ["هِيَ", "هَذا", "أَنْتَ"], a: 0, why: "نَظّارَة is a linguistically feminine word, so: هَذِهِ هِيَ النَّظّارَةُ.", lesson: "b1-04" },
            { b: "هَيّا بِنا", w: "فِي", f: "المَسْجِدِ.", opts: ["مِنْ", "إِلَى", "يا"], a: 1, why: "فِي means “in”, إِلَى means “to”: هَيّا بِنا إِلَى المَسْجِدِ (Let's go to the mosque).", lesson: "b1-04" },
            { b: "والِدَتِي سَعِيدَةُ", w: "طَبِيبٌ", f: ".", opts: ["طَبِيبَةٌ", "طَبِيبِي", "طالِبٌ"], a: 0, why: "She is female, so the job takes ة: طَبِيبَةٌ.", lesson: "b1-02" },
            { b: "اِسْمِي أَحْمَدُ، أَنا", w: "تُرْكِيَّةٌ", f: ".", opts: ["تُرْكِيا", "تُرْكِيٌّ", "تُرْكِيَّتِي"], a: 1, why: "Aḥmad is male, so remove the feminine ة: تُرْكِيٌّ.", lesson: "b1-01" },
            { b: "مِنْ أَيْنَ", w: "أَنْتَ", f: "يا فاطِمَةُ؟", opts: ["أَنا", "هِيَ", "أَنْتِ"], a: 2, why: "Fāṭima is female, so use أَنْتِ.", lesson: "b1-01" }
          ]
        },
        {
          id: "s5", type: "match", marks: 6,
          instr: "صِلْ أَداةَ الاسْتِفْهامِ فِي القائِمَةِ (أ) بِما يُناسِبُ مِنَ القائِمَةِ (ب).",
          instrEn: "Match each question word in list (A) with the right ending from list (B).",
          items: [
            { a: "مَنْ", b: "هَذا؟", why: "مَنْ هَذا؟ Who is this?", lesson: "b1-02" },
            { a: "هَلْ", b: "هَذِهِ شَجَرَةٌ؟", why: "هَلْ هَذِهِ شَجَرَةٌ؟ Is this a tree?", lesson: "b1-01" },
            { a: "أَيْنَ", b: "المِعْطَفُ؟", why: "أَيْنَ المِعْطَفُ؟ Where is the coat?", lesson: "b1-04" },
            { a: "ما", b: "اسْمُكَ؟", why: "ما اسْمُكَ؟ What is your name?", lesson: "b1-01" },
            { a: "كَيْفَ", b: "حالُكَ؟", why: "كَيْفَ حالُكَ؟ How are you?", lesson: "b1-01" },
            { a: "مِنْ أَيْنَ", b: "أَنْتَ يا عَدْنانُ؟", why: "مِنْ أَيْنَ أَنْتَ يا عَدْنانُ؟ Where are you from, ʿAdnān?", lesson: "b1-01" }
          ]
        },
        {
          id: "s6", type: "choose", marks: 7,
          instr: "اِخْتَرِ الكَلِمَةَ الصَّحِيحَةَ.",
          instrEn: "Choose the correct word for each blank.",
          items: [
            { s: "___ صُورَةُ أُسْرَتِي.", o: ["هَذا", "هَذِهِ"], a: 1, why: "صُورَة is feminine, so: هَذِهِ.", lesson: "b1-03" },
            { s: "هَلْ هَذِهِ ___؟", o: ["شَجَرَةٌ", "مِعْطَفٌ"], a: 0, why: "هَذِهِ goes with a feminine word: شَجَرَة. مِعْطَف is masculine.", lesson: "b1-04" },
            { s: "هُوَ ___.", o: ["يَقْرَأُ", "تَقْرَأُ"], a: 0, why: "هُوَ takes the ي form: يَقْرَأُ. (تَقْرَأُ goes with هِيَ or أَنْتَ.)", lesson: "b1-05" },
            { s: "هَلْ أَنْتَ ___؟", o: ["مِصْرُ", "مِصْرِيٌّ"], a: 1, why: "You need the adjective “Egyptian”: مِصْرِيٌّ. مِصْر is the country.", lesson: "b1-01" },
            { s: "هَذا أَخِي ___ مُدَرِّسٌ.", o: ["هُوَ", "هِيَ"], a: 0, why: "أَخ is male, so: هُوَ.", lesson: "b1-02" },
            { s: "___ أَيْنَ أَنْتَ؟", o: ["مِنْ", "هَلْ"], a: 0, why: "مِنْ أَيْنَ أَنْتَ؟ Where are you from?", lesson: "b1-01" },
            { s: "سَعْدٌ ___ الحَمّامِ.", o: ["فِي", "مِنْ"], a: 0, why: "He is IN the bathroom, not FROM it: فِي.", lesson: "b1-04" }
          ]
        }
      ]
    }
  ]
};
