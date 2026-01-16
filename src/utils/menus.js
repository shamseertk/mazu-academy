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
        heading: 'Fiqh',
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
              { label: 'Prayer Structure', link: '/fiqh/prayer?section=structure', active: true }
            ]
          }
        ]
      }
    ]
  }
];