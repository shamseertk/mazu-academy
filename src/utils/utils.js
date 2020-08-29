
export const isCharTashkeel = (letter) =>  {
  var CHARCODE_SUPERSCRIPT_ALIF = 1648;
  var CHARCODE_TATWEEL = 1600;
  if (typeof(letter) == "undefined" || letter == null)
    return false;

  var code = letter.charCodeAt(0);
  return (code === CHARCODE_TATWEEL || code === CHARCODE_SUPERSCRIPT_ALIF || (code >= 1612 && code <= 1631)); //tashkeel
}

export const generateRandomNumber = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

export const QUESTION_TYPES = {
  MEANING: 'english',
  WORD: 'arabic',
}

export const NUMBER_QSTN_TYPES = {
  NUMBER: 'number',
  ARABIC: 'arabic',
  ARABIC_NUMBER: 'arabicNumber',
}

export const COLOR_QSTN_TYPES = {
  COLOR: 'english',
  ARABIC: 'arabic',
  COLOR_CODE: 'colorCode',
}

export const pickRandomFromArray = (arr) => {
  const pickedIndex = generateRandomNumber(arr.length - 1);
  const pickedObj = arr[pickedIndex];
  return {
    pickedIndex,
    pickedObj,
  }
}

export const generateQuestionOptions = (arr, correctAnswerObj, correctAnsKey, totNumber = 4) => {
  let loopIndex = 0, infLoopBlocker = 0;
  const alreadyAdded = [];
  const options = [];
  if (totNumber < arr.length) {
    while (loopIndex < totNumber && infLoopBlocker < 2000) {
      const pickedDetail = pickRandomFromArray(arr);
      if (!alreadyAdded.includes(pickedDetail.pickedObj[correctAnsKey])) {
        alreadyAdded.push(pickedDetail.pickedObj[correctAnsKey]);
        options.push(pickedDetail.pickedObj);
        loopIndex ++;
      }
      infLoopBlocker++;
    }
    if (!alreadyAdded.includes(correctAnswerObj[correctAnsKey])) {
      const correctAnsIndex = generateRandomNumber(totNumber - 1);
      options.splice(correctAnsIndex, 1, correctAnswerObj);
    }
  } else {
    options.push(...arr);
  }
  return options;
}
