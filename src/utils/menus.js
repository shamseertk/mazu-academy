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
        heading: 'Basics',
        items: [
          { label: 'Ablution(Wudu)', link: '/fiqh/ablution', active: true }
        ]
      }
    ]
  }
];