export const LEARNED_SO_FAR = 29;
export const categories = {
  ANIMAL: 'animal',
  VEHICLE: 'vehicle',
  HUMAN: 'human body',
  FOOD: 'food',
  THING: 'things',
  PROFESSION: 'profession',
  INSTITUTE: 'institute',
  BIRD: 'bird',
  FRUIT: 'fruit',
  APPLIANCE: 'appliances',
  VEGITABLE: 'vegitables'
}
export const alphabets = [{
  id: 1,
  letter: 'alif',
  image: 'alif.jpg',
  arabic: 'ا',
  joining: {
  arabic: 'ا',
    first: 'ا',
    middle: 'ا',
    last: 'ﺎ',
  },
  writing: {
    start: 0,
    end: 5,
  },
  words: [{
    separate: 'اَ سَ دٌ',
    together: 'اَسَدٌ',
    image: 'lion.jpg',
    category: categories.ANIMAL,
  }],
  harakat: {
    letters: 'أَ إِ أُ أْ',
    audio: 'ah.m4a e.m4a u.m4a uh.m4a',
  },
}, {
  id: 2,
  letter: 'ba',
  image: 'ba.jpg',
  arabic: 'ب',
  joining: {
    first: 'ﺑ',
    middle: 'ﺒ',
    last: 'ﺐ',
  },
  writing: {
    start: 5,
    end: 13,
  },
  words: [{
    separate: 'بَ طَّ ةٌ',
    together: 'بَطَّةٌ',
    image: 'duck.jpg',
  }],
  harakat: {
    letters: 'بَ بِ بُ بْ',
    audio: 'ba.m4a bi.m4a bu.m4a bh.m4a',
  },
}, {
  id: 3,
  letter: 'tha',
  image: 'tha.jpg',
  arabic: 'ت',
  joining: {
    first: 'ﺗ',
    middle: 'ﺘ',
    last: 'ﺖ',
  },
  writing: {
    start: 14,
    end: 18,
  },
  words: [{
    separate: 'تُ فّ آ حَ ةٌ',
    together: 'تُفّآحَةٌ',
    image: 'apple.jpg',
  }],
  harakat: {
    letters: 'تَ تِ تُ تْ',
    audio: 'tha.m4a thi.m4a thu.m4a thh.m4a',
  },
}, {
  id: 4,
  letter: 'thsa',
  image: 'thsa.jpg',
  arabic: 'ث',
  joining: {
    first: 'ﺛ',
    middle: 'ﺜ',
    last: 'ﺚ',
  },
  writing: {
    start: 19,
    end: 25,
  },
  words: [{
    separate: 'ثَ عْ لَ بٌ',
    together: 'ثَعْلَبٌ',
    image: 'fox.jpg',
  }],
  harakat: {
    letters: 'ثَ ثِ ثُ ثْ',
    audio: 'thsa.m4a thsi.m4a thsu.m4a thsh.m4a',
  },
}, {
  id: 5,
  letter: 'jeem',
  image: 'jeem.jpg',
  arabic: 'ج',
  joining: {
    first: 'ﺟ',
    middle: 'ﺠ',
    last: 'ﺞ',
  },
  writing: {
    start: 27,
    end: 33,
  },
  words: [{
    separate: 'جَ مَ لٌ',
    together: 'جَمَلٌ',
    image: 'camel.png',
  }],
  harakat: {
    letters: 'جَ جِ جُ جْ',
    audio: 'ja.m4a ji.m4a ju.m4a jh.m4a',
  },
}, {
  id: 6,
  letter: 'ha',
  image: 'ha.jpg',
  arabic: 'ح',
  joining: {
    first: 'ﺣ',
    middle: 'ﺤ',
    last: 'ﺢ',
  },
  writing: {
    start: 33,
    end: 38,
  },
  words: [{
    separate: 'حَ دِ ي قَ ةٌ',
    together: 'حَدِيقَةٌ',
    image: 'garden.jpg',
  }],
  harakat: {
    letters: 'حَ حِ حُ حْ',
    audio: 'ha.m4a he.m4a hu.m4a hh.m4a',
  },
}, {
  id: 7,
  letter: 'kha',
  image: 'kha.jpg',
  arabic: 'خ',
  joining: {
    first: 'ﺧ',
    middle: 'ﺨ',
    last: 'ﺦ',
  },
  writing: {
    start: 38,
    end: 43,
  },
  words: [{
    separate: 'خَ رُو فٌ',
    together: 'خَرُوفٌ',
    image: 'sheep.jpg',
  }],
  harakat: {
    letters: 'خَ خِ خُ خْ',
    audio: 'kha.m4a khe.m4a khu.m4a khh.m4a',
  },
}, {
  id: 8,
  letter: 'dal',
  image: 'dal.jpg',
  arabic: 'د',
  joining: {
    first: 'ﺩ',
    middle: 'ﺪ',
    last: 'ﺪ',
  },
  writing: {
    start: 44,
    end: 49,
  },
  words: [{
    separate: 'دَ رَّا جَ ةٌ',
    together: 'دَرَّاجَةٌ',
    image: 'bicycle.jpg',
    category: categories.VEHICLE,
  }],
  harakat: {
    letters: 'دَ دِ دُ دْ',
    audio: 'da.m4a di.m4a du.m4a dh.m4a',
  },
}, {
  id: 9,
  letter: 'dhal',
  image: 'dhal.jpg',
  arabic: 'ذ',
  joining: {
    first: 'ﺫ',
    middle: 'ﺬ',
    last: 'ﺬ',
  },
  writing: {
    start: 50,
    end: 55,
  },
  words: [{
    separate: 'ذُ بَ ا بٌ',
    together: 'ذُبَابٌ',
    image: 'fly.jpg',
    category: categories.ANIMAL,
  }],
  harakat: {
    letters: 'ذَ ذِ ذُ ذْ',
    audio: 'dha.m4a dhe.m4a dhu.m4a dhhh.m4a',
  },
}, {
  id: 10,
  letter: 'ra',
  image: 'ra.jpg',
  arabic: 'ر',
  joining: {
    first: 'ﺭ',
    middle: 'ﺮ',
    last: 'ﺮ',
  },
  writing: {
    start: 55,
    end: 58,
  },
  words: [{
    separate: 'رُ مَ ا نٌ',
    together: 'رُمَانٌ',
    image: 'pomegranate.jpg',
    category: categories.FOOD,
  }],
  harakat: {
    letters: 'رَ رِ رُ رْ',
    audio: 'ra.m4a re.m4a ru.m4a rh.m4a',
  },
}, {
  id: 11,
  letter: 'za',
  image: 'za.jpg',
  arabic: 'ز',
  joining: {
    first: 'ﺯ',
    middle: 'ﺰ',
    last: 'ﺰ',
  },
  writing: {
    start: 59,
    end: 63,
  },
  words: [{
    separate: 'زَ رَ ا فَ ةٌ',
    together: 'زَرَافَةٌ',
    image: 'giraffe.jpg',
  }],
  harakat: {
    letters: 'زَ زِ زُ زْ',
    audio: 'za.m4a ze.m4a zu.m4a zh.m4a',
  },
}, {
  id: 12,
  letter: 'seen',
  image: 'seen.jpg',
  arabic: 'س',
  joining: {
    first: 'ﺳ',
    middle: 'ﺴ',
    last: 'ﺲ',
  },
  writing: {
    start: 62,
    end: 69,
  },
  words: [{
    separate: 'سَ يَّ ا رَ ةٌ',
    together: 'سَيَّارَةٌ',
    image: 'car.jpg',
    category: categories.VEHICLE,
  }],
  harakat: {
    letters: 'سَ سِ سُ سْ',
    audio: 'sa.m4a se.m4a su.m4a sh.m4a',
  },
}, {
  id: 13,
  letter: 'sheen',
  image: 'sheen.jpg',
  arabic: 'ش',
  joining: {
    first: 'ﺷ',
    middle: 'ﺸ',
    last: 'ﺶ',
  },
  writing: {
    start: 70,
    end: 79,
  },
  words: [{
    separate: 'شَ ا حِ نَ ةٌ',
    together: 'شَاحِنَةٌ',
    image: 'truck.jpg',
    category: categories.VEHICLE,
  }],
  harakat: {
    letters: 'شَ شِ شُ شْ',
    audio: 'sha.m4a she.m4a shu.m4a shh.m4a',
  },
}, {
  id: 14,
  letter: 'swad',
  image: 'swad.jpg',
  arabic: 'ص',
  joining: {
    first: 'ﺻ',
    middle: 'ﺼ',
    last: 'ﺺ',
  },
  writing: {
    start: 80,
    end: 87,
  },
  words: [{
    separate: 'صَ بَ ا حٌ',
    together: 'صَبَاحٌ',
    image: 'morning.jpg',
    category: categories.THING,
  }],
  harakat: {
    letters: 'صَ صِ صُ صْ',
    audio: 'swa.m4a swi.m4a swu.m4a swh.m4a',
  },
}, {
  id: 15,
  letter: 'dhwad',
  image: 'dhwad.jpg',
  arabic: 'ض',
  joining: {
    first: 'ﺿ',
    middle: 'ﻀ',
    last: 'ﺾ',
  },
  writing: {
    start: 88,
    end: 96,
  },
  words: [{
    separate: 'ضِ فْ دَ عٌ',
    together: 'ضِفْدَعٌ',
    image: 'frog.jpg',
    category: categories.ANIMAL,
  }],
  harakat: {
    letters: 'ضَ ضِ ضُ ضْ',
    audio: 'dhwa.m4a dhwi.m4a dhwu.m4a dhwh.m4a',
  },
}, {
  id: 16,
  letter: 'twa',
  image: 'twa.jpg',
  arabic: 'ط',
  joining: {
    first: 'ﻃ',
    middle: 'ﻄ',
    last: 'ﻂ',
  },
  writing: {
    start:97 ,
    end: 102,
  },
  words: [{
    separate: 'طَ ا وِ لَ ةٌ',
    together: 'طَاوِلَةٌ',
    image: 'table.jpg',
    category: categories.THING,
  }],
  harakat: {
    letters: 'طَ طِ طُ طْ',
    audio: 'twa.m4a twi.m4a twu.m4a twh.m4a',
  },
}, {
  id: 17,
  letter: 'dhwa',
  image: 'dhwa.jpg',
  arabic: 'ظ',
  joining: {
    first: 'ﻇ',
    middle: 'ﻈ',
    last: 'ﻆ',
  },
  writing: {
    start: 103,
    end: 108,
  },
  words: [{
    separate: 'ظَ رْ فٌ',
    together: 'ظَرْفٌ',
    image: 'envelope.jpg',
    category: categories.THING,
  }],
  harakat: {
    letters: 'ظَ ظِ ظُ ظْ',
    audio: 'dhha.m4a dhhi.m4a dhhu.m4a dhhh.m4a',
  },
}, {
  id: 18,
  letter: 'aain',
  image: 'aain.jpg',
  arabic: 'ع',
  joining: {
    first: 'ﻋ',
    middle: 'ﻌ',
    last: 'ﻊ',
  },
  writing: {
    start: 109,
    end: 114,
  },
  words: [{
    separate: 'عَ يْ نٌ',
    together: 'عَيْنٌ',
    image: 'eye.jpg',
    category: categories.HUMAN,
  }],
  harakat: {
    letters: 'عَ عِ عُ عْ',
    audio: 'ga.m4a ge.m4a gu.m4a ghh.m4a',
  },
}, {
  id: 19,
  letter: 'gaain',
  image: 'gaain.jpg',
  arabic: 'غ',
  joining: {
    first: 'ﻏ',
    middle: 'ﻐ',
    last: 'ﻎ',
  },
  writing: {
    start: 115,
    end: 120,
  },
  words: [{
    separate: 'غَ ا بَ ةٌ',
    together: 'غَابَةٌ',
    image: 'forest.jpg',
    category: categories.THING,
  }],
  harakat: {
    letters: 'غَ غِ غُ غْ',
    audio: 'gha.m4a ghe.m4a ghu.m4a ghh.m4a',
  },
}, {
  id: 20,
  letter: 'fa',
  image: 'fa.jpg',
  arabic: 'ف',
  joining: {
    first: 'ﻓ',
    middle: 'ﻔ',
    last: 'ﻒ',
  },
  writing: {
    start: 121,
    end: 125,
  },
  words: [{
    separate: 'فَ هْ دٌ',
    together: 'فَهْدٌ',
    image: 'jaguar.jpg',
  }],
  harakat: {
    letters: 'فَ فِ فُ فْ',
    audio: 'fa.m4a fe.m4a fu.m4a fhh.m4a',
  },
}, {
  id: 21,
  letter: 'qaf',
  image: 'qaf.jpg',
  arabic: 'ق',
  joining: {
    first: 'ﻗ',
    middle: 'ﻘ',
    last: 'ﻖ',
  },
  writing: {
    start: 126,
    end: 131,
  },
  words: [{
    separate: 'قِ رْ دٌ',
    together: 'قِرْدٌ',
    image: 'monkey.jpg',
  }],
  harakat: {
    letters: 'قَ قِ قُ قْ',
    audio: 'qa.m4a qe.m4a qu.m4a qhh.m4a',
  },
}, {
  id: 22,
  letter: 'kaaf',
  image: 'kaaf.jpg',
  arabic: 'ك',
  joining: {
    first: 'ﻛ',
    middle: 'ﻜ',
    last: 'ﻚ',
  },
  writing: {
    start: 135,
    end: 145,
  },
  words: [{
    separate: 'كَ لْ بٌ',
    together: 'كَلْبٌ',
    image: 'dog.jpg',
  }],
  harakat: {
    letters: 'كَ كِ كُ كْ',
    audio: 'ka.m4a ke.m4a ku.m4a khhh.m4a',
  },
}, {
  id: 23,
  letter: 'laam',
  image: 'laam.jpg',
  arabic: 'ل',
  joining: {
    first: 'ﻟ',
    middle: 'ﻠ',
    last: 'ﻞ',
  },
  writing: {
    start: 145,
    end: 149,
  },
  words: [{
    separate: 'لَ حْ مٌ',
    together: 'لَحْمٌ',
    image: 'meat.jpg',
    category: categories.FOOD,
  }],
  harakat: {
    letters: 'لَ لِ لُ لْ',
    audio: 'la.m4a le.m4a lu.m4a lhh.m4a',
  },
}, {
  id: 24,
  letter: 'meem',
  image: 'meem.jpg',
  arabic: 'م',
  joining: {
    first: 'ﻣ',
    middle: 'ﻤ',
    last: 'ﻢ',
  },
  writing: {
    start: 150,
    end: 155,
  },
  words: [{
    separate: 'مِ فْ تَ ا حٌ',
    together: 'مِفْتَاحٌ',
    image: 'key.jpg',
    category: categories.THING,
  }],
  harakat: {
    letters: 'مَ مِ مُ مْ',
    audio: 'ma.m4a me.m4a mu.m4a mh.m4a',
  },
}, {
  id: 25,
  letter: 'noon',
  image: 'noon.jpg',
  arabic: 'ن',
  joining: {
    first: 'ﻧ',
    middle: 'ﻨ',
    last: 'ﻦ',
  },
  writing: {
    start: 156,
    end: 165,
  },
  words: [{
    separate: 'نَ مِ رٌ',
    together: 'نَمِرٌ',
    image: 'tiger.jpg',
    category: categories.ANIMAL,
  }],
  harakat: {
    letters: 'نَ نِ نُ نْ',
    audio: 'na.m4a ne.m4a nu.m4a nh.m4a',
  },
}, {
  id: 26,
  letter: 'haaa',
  image: 'haaa.jpg',
  arabic: 'ه',
  joining: {
    first: 'ﻫ',
    middle: 'ﻬ',
    last: 'ﻪ',
  },
  writing: {
    start: 166,
    end: 170,
  },
  words: [{
    separate: 'هُ دْ هُ دْ',
    together: 'هُدْهُدْ',
    image: 'hoopoe.jpg',
    category: categories.ANIMAL,
  }],
  harakat: {
    letters: 'هَ هِ هُ هْ',
    audio: 'hha.m4a hhe.m4a hhu.m4a hhh.m4a',
  },
}, {
  id: 27,
  letter: 'wa',
  image: 'wa.jpg',
  arabic: 'و',
  joining: {
    first: 'ﻭ',
    middle: 'ﻮ',
    last: 'ﻮ',
  },
  writing: {
    start: 172,
    end: 176,
  },
  words: [{
    separate: 'وَ جْ هٌ',
    together: 'وَجْهٌ',
    image: 'face.jpg',
    category: categories.HUMAN,
  }],
  harakat: {
    letters: 'وَ وِ وُ وْ',
    audio: 'wa.m4a we.m4a wu.m4a whh.m4a',
  },
}, {
  id: 28,
  letter: 'ya',
  image: 'ya.jpg',
  arabic: 'ي',
  joining: {
    first: 'ﻳ',
    middle: 'ﻴ',
    last: 'ﻲ',
  },
  writing: {
    start: 178,
    end: 183,
  },
  words: [{
    separate: 'يَ دٌ',
    together: 'يَدٌ',
    image: 'hand.jpg',
    category: categories.HUMAN,
  }],
  harakat: {
    letters: 'يَ يِ يُ يْ',
    audio: 'ya.m4a ye.m4a yu.m4a yhh.m4a',
  },
}];

export const learnedAlphabets = [...alphabets].slice(0, LEARNED_SO_FAR);
