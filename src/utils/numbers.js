export const arabicNumbers = [{
  number: 0, arabic: 'صِفْرٌ', english: 'Zero', arabicNumber: '',
}, {
  number: 1, arabic: 'وَاحِد', english: 'One', arabicNumber: '',
}, {
  number: 2, arabic: 'إِثْنَان', english: 'Two', arabicNumber: '',
}, {
  number: 3, arabic: 'ثَلَاثَة', english: 'Three', arabicNumber: '',
}, {
  number: 4, arabic: 'أَرْبَعَة', english: 'Four', arabicNumber: '',
}, {
  number: 5, arabic: 'خَمْسَة', english: 'Five', arabicNumber: '',
}, {
  number: 6, arabic: 'سِتَّة', english: 'Six', arabicNumber: '',
}, {
  number: 7, arabic: 'سَبْعَة', english: 'Seven', arabicNumber: '',
}, {
  number: 8, arabic: 'ثَمَانِيَة', english: 'Eight', arabicNumber: '',
}, {
  number: 9, arabic: 'تِسْعَة', english: 'Nine', arabicNumber: '',
}, {
  number: 10, arabic: 'عَشَرَة', english: 'Ten', arabicNumber: '',
}, {
  number: 11, arabic: 'أَحَد عَشَر', english: 'Eleven', arabicNumber: '',
}, {
  number: 12, arabic: 'إِثْنَا عَشَر', english: 'Twelve', arabicNumber: '',
}, {
  number: 13, arabic: 'ثَلاَثَة عَشَر', english: 'Thirteen', arabicNumber: '',
}, {
  number: 14, arabic: 'أَرْبَعَة عَشَر', english: 'Fourteen', arabicNumber: '',
}, {
  number: 15, arabic: 'خَمْسَة عَشَر', english: 'fifteen', arabicNumber: '',
}, {
  number: 16, arabic: 'سِتَّة عَشَر', english: 'sixteen', arabicNumber: '',
}, {
  number: 17, arabic: 'سَبْعَة عَشَر', english: 'seventeen', arabicNumber: '',
}, {
  number: 18, arabic: 'ثَمَانِيَة عَشَر', english: 'eighteen', arabicNumber: '',
}, {
  number: 19, arabic: 'تِسْعَة عَشَر', english: 'nineteen', arabicNumber: '',
}, {
  number: 20, arabic: 'عِشْرُون', english: 'twenty', arabicNumber: '',
}, {
  number: 21, arabic: 'وَاحِد وَعِشْرُون', english: 'twenty one', arabicNumber: '',
}, {
  number: 22, arabic: 'إِثْنَان وَعِشْرُون', english: 'twenty two', arabicNumber: '',
}, {
  number: 30, arabic: 'ثَلَاثُون', english: 'thirty', arabicNumber: '',
}, {
  number: 40, arabic: 'أَرْبَعُون', english: 'forty', arabicNumber: '',
}, {
  number: 50, arabic: 'خَمْسُون', english: 'fifty', arabicNumber: '',
}, {
  number: 60, arabic: 'سِتُّون', english: 'sixty', arabicNumber: '',
}, {
  number: 70, arabic: 'سَبْعُون', english: 'seventy', arabicNumber: '',
}, {
  number: 80, arabic: 'ثَمَانُون', english: 'eighty', arabicNumber: '',
}, {
  number: 90, arabic: 'تِسْعُون', english: 'ninety', arabicNumber: '',
}, {
  number: 100, arabic: 'مِائَة', english: 'one hundred', arabicNumber: '',
}];

export const convertNumberToAR = function(num) {
  return num.toString().replace(/\d/g, d =>  '٠١٢٣٤٥٦٧٨٩'[d])
}
