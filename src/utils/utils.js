
  export const isCharTashkeel = (letter) =>  {
    var CHARCODE_SUPERSCRIPT_ALIF = 1648;
    var CHARCODE_TATWEEL = 1600;
    if (typeof(letter) == "undefined" || letter == null)
      return false;

    var code = letter.charCodeAt(0);
    return (code === CHARCODE_TATWEEL || code === CHARCODE_SUPERSCRIPT_ALIF || (code >= 1612 && code <= 1631)); //tashkeel
  }