import React from 'react';
import { withStyles, Paper, IconButton } from '@material-ui/core';
import { get } from 'lodash';
import { Info } from '@material-ui/icons';
import SimpleDialog from '../common/SimpleDialog';

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
  constructor(props) {
    super(props);
    this.state = {
      displayClue: false,
    }
  }
  isCharTashkeel = (letter) =>  {
    var CHARCODE_SUPERSCRIPT_ALIF = 1648;
    var CHARCODE_TATWEEL = 1600;
    if (typeof(letter) == "undefined" || letter == null)
      return false;

    var code = letter.charCodeAt(0);
    return (code === CHARCODE_TATWEEL || code === CHARCODE_SUPERSCRIPT_ALIF || (code >= 1612 && code <= 1631)); //tashkeel
  }
  displayClueDialog = (arWord) => {
    this.setState({
      displayClue: true,
      dialogContent: <div style={{fontSize: '3em'}}>{arWord.split('').map(arW => !this.isCharTashkeel(arW) ? arW : `${arW} `)}</div>
    })
  }
  closeDialog = () => {
    this.setState({
      displayClue: false,
    })
  }
  render() {
    const { letter, classes } = this.props;
    const { displayClue, dialogContent } = this.state;

    return <div className={classes.wordPageWrapper}>
      {letter.words.map(word => <React.Fragment key={word.arabic}>
          <Paper elevation={7} className={classes.wordContent} title={get(word, ['english'], '')}>
            {word.image ? <img alt={word.arabic} src={require(`../../images/words/${word.image}`)} height="200" /> :
              <div style={{ height: '200px', width: '300px', alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
                {word.english}</div>}
              <div style={{textAlign: 'center'}}>{word.arabic.split('').map((ar, arIndex) =>
               (ar === letter.arabic || get(letter, ['arabicAlternative'], '').split('').includes(ar))
               ? <span style={{color: 'red'}} key={arIndex}>{ar}</span> : ar)}
               <IconButton onClick={() => this.displayClueDialog(word.arabic)}><Info style={{color: 'blue'}} /></IconButton></div>
          </Paper>
        </React.Fragment>
      )}
      <SimpleDialog
        openDialog={displayClue}
        dialogContent={dialogContent}
        closeDialog={this.closeDialog}
        title="Read It Now"
        />
    </div>
  }
}

export default withStyles(styles)(WordPage);
