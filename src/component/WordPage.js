import React from 'react';
import { withStyles, Paper } from '@material-ui/core';
import { get } from 'lodash';

const styles = () => ({
  wordPageWrapper: {
    maxWidth: '100%',
    marginBottom: '8px',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row-reverse',
    fontSize: '3.5em',
    flexWrap: 'wrap',
  },
  '@media screen and (min-width: 1250px)': {
    root: {
      maxWidth: '100%'
    }
  },
  wordContent: {
    padding: '15px',
    marginBottom: '8px',
  },
});

class WordPage extends React.Component{
  isCharTashkeel = (letter) =>  {
    var CHARCODE_SUPERSCRIPT_ALIF = 1648;
    var CHARCODE_TATWEEL = 1600;
    if (typeof(letter) == "undefined" || letter == null)
      return false;

    var code = letter.charCodeAt(0);
    return (code === CHARCODE_TATWEEL || code === CHARCODE_SUPERSCRIPT_ALIF || (code >= 1612 && code <= 1631)); //tashkeel
  }
  render() {
    const { letter, classes } = this.props;

    return <div className={classes.wordPageWrapper}>
      {letter.words.map(word => <React.Fragment key={word.arabic}>
          <Paper elevation={7} className={classes.wordContent} title={get(word, ['english'], '')}>
            {word.image ? <img alt={word.arabic} src={require(`../images/words/${word.image}`)} height="200" /> :
              <div style={{ height: '200px', width: '300px', alignItems: 'center', justifyContent: 'center', display: 'flex'}}>{word.english}</div>}
            <div style={{textAlign: 'center'}}>{word.arabic.split('').map((ar, arIndex) =>
               (ar === letter.arabic || get(letter, ['arabicAlternative'], '').split('').includes(ar))
               ? <span style={{color: 'red'}} key={arIndex}>{ar}</span> : ar)}</div>
          </Paper>
        </React.Fragment>
      )}
    </div>
  }
}

export default withStyles(styles)(WordPage);
