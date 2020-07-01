export const menus =[{
  label: 'Home',
  link: '/',
}, {
  label: 'Level One',
  link: '/level1',
  subMenus: [{
    label: 'Practice Alphabets',
    link: '/level1/games',
  }, {
    label: 'Writing Alphabets',
    link: '/level1/writing'
  }, {
    label: 'Writing Practice',
    link: '/level1/writing-practice',
  }, {
    label: 'Fun',
    link: '/level1/fun',
    active: true,
  }, {
    label: 'Vowels',
    link: '/level1/vowels',
    active: true,
  }, {
    label: 'Vowel Practice',
    link: '/level1/vowel-practice',
    active: true,
  }, {
    label: 'Test',
    link: '/level1/test'
  }]
}, {
  label: 'Level Two',
  link: '/level2',
  active: true,
  subMenus: [{
    label: 'Word Test',
    link: '/level2/simple-word-test',
    active: true,
  }, {
    label: 'More Words',
    link: '/level2/more-words',
    active: true,
  }]
}];