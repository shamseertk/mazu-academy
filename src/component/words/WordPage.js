import { IconButton, Paper } from '@mui/material';
import React from 'react';

import { Info } from '@mui/icons-material';
import { get } from 'lodash';
import SimpleDialog from '../common/SimpleDialog';

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
    const { letter } = this.props;
    const { displayClue, dialogContent } = this.state;

    return (
      <div className="wordPageWrapper">
        {letter.words.map(word => <React.Fragment key={word.arabic}>
            <Paper elevation={7} className="wordContent" title={get(word, ['english'], '')}>
              {word.image ? <img alt={word.arabic} src={require(`../../images/words/${word.image}`)} height="200" /> :
                <div style={{ height: '200px', width: '300px', alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
                  {word.english}</div>}
                <div style={{textAlign: 'center'}}>{word.arabic.split('').map((ar, arIndex) =>
                 (ar === letter.arabic || get(letter, ['arabicAlternative'], '').split('').includes(ar))
                 ? <span style={{color: 'red'}} key={arIndex}>{ar}</span> : ar)}
                 <IconButton onClick={() => this.displayClueDialog(word.arabic)} size="large"><Info style={{color: 'blue'}} /></IconButton></div>
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
    );
  }
}

export default WordPage;
