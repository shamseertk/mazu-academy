import React from 'react';
import { Card, CardMedia, withStyles, CardContent, Paper } from '@material-ui/core';
import _, { get } from 'lodash';
import { alphabets } from '../utils/alphabets';

const styles = () => ({
  root: {
    maxWidth: '100%',
    marginBottom: '8px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  '@media screen and (min-width: 1250px)': {
    root: {
      maxWidth: '100%'
    }
  },
  letterTitle: {
    fontSize: '40px',
    color: 'blue',
    textAlign: 'center',
    backgroundColor: '#faf0dd',
    marginBottom: '10px',
  },
  gridBox: {
    border: '1px solid #bca234',
    padding: '10px 35px',
    textAlign: 'center',
    margin: '0px 10px 0px 10px',
    fontSize: '2.5em',
  },
  boxContainer: {
    width: '100%',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'space-around',
  },
  word: {
    margin: '10px 0px 0px 0px',
    fontSize: '3em',
    textAlign: 'center',
    backgroundColor: '#afd275',
    padding: '10px',
    '&:nth-child(even)': {
      borderLeft: '1px solid #bca234',
    }
  },
  wordWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    '& div': {
      width: '50%',
    }
  }
});

class WordTile extends React.Component{
  constructor(props) {
    super(props);
    const { letter } = props;
    const justAlphabet = alphabets.map(lttr => lttr.arabic);
    let joinedLtrWrd = '';
    const wordLetters = letter.words[0].together.split('').filter(ltr => !this.isCharTashkeel(ltr));
    wordLetters.forEach((alp, indexLtr) => {
      const foundIndex = justAlphabet.indexOf(alp);
      if (foundIndex > -1) {
        if(indexLtr === 0) {
          joinedLtrWrd = joinedLtrWrd.concat(alphabets[foundIndex].joining.first);
        } else if (indexLtr === (wordLetters.length - 1)) {
          joinedLtrWrd = joinedLtrWrd.concat(alphabets[foundIndex].joining.last);
        } else {
          joinedLtrWrd = joinedLtrWrd.concat(alphabets[foundIndex].joining.middle);
        }
      }
    });

    this.state = {
      joinedLtrWrd,
    };
  }
  isCharTashkeel = (letter) =>  {
    var CHARCODE_SUPERSCRIPT_ALIF = 1648;
    var CHARCODE_TATWEEL = 1600;
    if (typeof(letter) == "undefined" || letter == null)
      return false;

    var code = letter.charCodeAt(0);
    return (code === CHARCODE_TATWEEL || code === CHARCODE_SUPERSCRIPT_ALIF || (code >= 1612 && code <= 1631)); //tashkeel
  }
  replaceJoinedLetter = () => {
    return 'a';
  }
  render() {
    const { letter, enableJoinedWords, classes } = this.props;
    const img = require(`../images/words/${letter.words[0].image}`);
    
    return <Card className={classes.root}>
      <CardContent style={{textAlign: 'right', width: '100%'}}>
        <div className={`${classes.letterTitle} arabic-font`}>{letter.arabic}</div>
        <div className={classes.boxContainer}>
          <div className={classes.gridBox}>
            {_.get(_.get(letter, ['harakat', 'letters'], '').split(' '), ['2'], '')}
          </div>
          <div className={classes.gridBox}>
          {_.get(_.get(letter, ['harakat', 'letters'], '').split(' '), ['1'], '')}
          </div>
          <div className={classes.gridBox}>
          {_.get(_.get(letter, ['harakat', 'letters'], '').split(' '), ['0'], '')}
          </div>
        </div>
        <Paper elevation={10} className={classes.word}>
          {letter.words[0].separate.split('').map((lttr, index) =>
          (lttr === letter.arabic || get(letter, ['arabicAlternative'], '').split('').includes(lttr))
            ? <span key={index} style={{color: 'red'}}>{lttr}</span> 
            : lttr)} 
        </Paper>
        {enableJoinedWords && <Paper elevation={10} className={classes.word}>
            {letter.words[0].together.split('').map((lttr, index) =>
            (lttr === letter.arabic || get(letter, ['arabicAlternative'], '').split('').includes(lttr))
              ? <span key={index} style={{color: 'red'}}>{lttr}</span> 
              : lttr)}
        </Paper>}
      </CardContent>
      <CardMedia
        style={{width: '50%', height: '50%'}}
        component="img"
        src={img} />
    </Card>
  }
}

export default withStyles(styles)(WordTile);
