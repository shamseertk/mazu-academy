export const menus =[{
  label: 'Home',
  link: '/',
}, {
  label: 'Level1',
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
    active: false,
  }, {
    label: 'Words',
    link: '/level1/words',
    active: false,
  }, {
    label: 'Test',
    link: '/level1/test'
  }]
}];