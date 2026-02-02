export const menus = [
  {
    label: 'Arabic',
    link: '#',
    active: true,
    megaMenu: [
      {
        heading: 'Alphabets (Letters)',
        items: [
          { label: 'Reading', link: '/level1/', active: true },
          { label: 'Writing', link: '/level1/writing', active: true },
          { label: 'Exercise', link: '/level1/writing-practice', active: true },
          { label: 'Vowels', link: '/level1/vowels', active: true },
          { label: 'Vowel Practice', link: '/level1/vowel-practice', active: true },
          { label: 'Test', link: '/level1/test', active: true }
        ]
      },
      {
        heading: 'Words',
        items: [
          { label: 'Words Intro', link: '/level2', active: true },
          { label: 'Numbers', link: '/level2/numbers', active: true },
          { label: 'Months', link: '/level2/months', active: true },
          { label: 'Colors', link: '/level2/colors', active: true },
        ]
      },
      {
        heading: 'More Words',
        items: [
          { label: 'More Words', link: '/level2/more-words', active: true },
          { label: 'Family', link: '/level2/family', active: true },
        ]
      }
    ]
  },
  {
    label: 'Islamic Studies',
    link: '/islamic-studies',
    active: true,
    megaMenu: [
      {
        heading: 'Prayer & Purification',
        items: [
          {
            label: 'Ablution(Wudu)',
            link: '/fiqh/ablution',
            active: true,
            subItems: [
              { label: 'Wudu Du\'a', link: '/fiqh/ablution?section=dua', active: true },
              { label: 'Wudu Sunnah', link: '/fiqh/ablution?section=sunnah', active: true }
            ]
          },
          {
            label: 'Salah(Prayer)',
            link: '/fiqh/prayer',
            active: true,
            subItems: [
              { label: 'Adaan & Iqamah', link: '/fiqh/prayer?section=adaan', active: true },
              { label: 'Fard of Salah', link: '/fiqh/prayer?section=fard', active: true },
              {
                label: 'Prayer Structure',
                link: '/fiqh/prayer?section=structure',
                active: true,
                subItems: [
                  { label: 'Dua Al-Iftitah(Wajjahthu)', link: '/fiqh/prayer?section=dua-iftitah', active: true },
                  { label: 'Ruku Dua', link: '/fiqh/prayer?section=ruku-dua', active: true },
                  { label: "I'tidal إعتدال Dua", link: '/fiqh/prayer?section=ruku-rise-dua', active: true },
                  { label: "Dua in I'tidal", link: '/fiqh/prayer?section=dua-itidal', active: true },
                  { label: "Dua in Sujud", link: '/fiqh/prayer?section=dua-sujud', active: true },
                  { label: "Dua in Sitting between sujud", link: '/fiqh/prayer?section=dua-sitting', active: true },
                  { label: "Thashahhud Dua", link: '/fiqh/prayer?section=dua-thashahhud', active: true },
                ]
              },
              { label: 'After Prayer(Salah) Duas', link: '/fiqh/prayer?section=after-salah', active: true },
              {
                label: 'Prayer(Salah) Related',
                link: '/fiqh/prayer?section=prayer-related',
                active: true,
                subItems: [
                  { label: 'Dua of Sahw Sujud', link: '/fiqh/prayer?section=sujud-sahw-dua', active: true },
                  { label: 'Sujud Thilawath(Quran Reading Sujud) Dua', link: '/fiqh/prayer?section=sujud-tilawah-dua', active: true },
                ]
              },
            ]
          },
          { label: 'Optional Prayers(Salathul Sunnah)', link: '/fiqh/sunnah-prayer', active: true },
          { label: 'Funeral Prayer(Janaza Prayer)', link: '/fiqh/janaza', active: true }
        ]
      },
      {
        heading: 'Other Pillars & Duas',
        items: [
          { label: 'Fasting in Ramadan(Sawm)', link: '/fiqh/fasting', active: true },
          { label: 'Hajj', link: '/fiqh/hajj', active: true },
          { label: 'Zakath', link: '/fiqh/zakath', active: true },
          { label: 'Important Duas', link: '/fiqh/duas', active: true }
        ]
      }
    ]
  }
];