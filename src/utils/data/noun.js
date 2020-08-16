import { generateRandomNumber } from "./utils";

export const arabicSentences = [{
  arabic: 'هَـٰذَا بَيْتِي', english: 'This is my house', orderKey: generateRandomNumber(100),
}, {
  arabic: 'بَيْتِي أَمَامَ الْمَسْجِدِ', english: 'My house is in front of the mosque.'
}, {
  arabic: 'بَيْتِي جَمِيلٌ', english: 'My house is beautiful.'
}, {
  arabic: ''
}, {

}, {

}, {

}];

export const arabicGrammer = {
  verb: 'فِعْلٌ', noun: 'فَاعِلٌ', object: 'مَفْعُولٌ'
}
