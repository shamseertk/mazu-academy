import React from 'react';
import { alphabets } from '../utils/alphabets';
import { Grid, Button, withStyles, Typography } from '@material-ui/core';
import { Replay, NavigateNext, Forward } from '@material-ui/icons';
import { isCharTashkeel } from '../utils/utils';

const styles = () => ({
  buttonStyle: {
    margin: '4px 0px 0px 4px',
  },
  restartButton: {
    backgroundColor: 'blue'
  },
  nextButton: {
    backgroundColor: 'green',
    color: 'white',
    '&:hover': {
      backgroundColor: '#9acd32',
      color: 'blue',
    }
  },
});

const longVowelChars = ['ا', 'ي', 'و'];

class LongVowelTest extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      learnedLocalAlphabets: JSON.parse(JSON.stringify(alphabets)),
      displayCurrent: 0,
      displaFinalResult: false,
    };
  }
  componentDidMount() {
    this.startAgain();
  }
  startAgain = () => {
    const learnedLocalAlphabets = JSON.parse(JSON.stringify(alphabets));
    const displayCurrent = Math.floor(Math.random() * Math.floor(learnedLocalAlphabets.length));
    const displayVowel = Math.floor(Math.random() * Math.floor(2));
    this.setState({
      learnedLocalAlphabets,
      displayCurrent,
      displayVowel,
    });
  }
  restart = () => {
    this.startAgain();
    this.setState({
      displaFinalResult: false,
    });
  }
  validateAnswer = () => {
    const { displayCurrent, displayVowel, learnedLocalAlphabets } = this.state;
    const rightAnswer = learnedLocalAlphabets[displayCurrent].harakat.letters.split(' ')[displayVowel];

    if (learnedLocalAlphabets[displayCurrent].harakat.letters.split(' ').length === 1) {
      learnedLocalAlphabets[displayCurrent].harakat.letters = learnedLocalAlphabets[displayCurrent].harakat.letters.replace(`${rightAnswer}`, '');
    } else if (displayVowel === 0) {
      learnedLocalAlphabets[displayCurrent].harakat.letters = learnedLocalAlphabets[displayCurrent].harakat.letters.replace(`${rightAnswer} `, '');
    } else {
      learnedLocalAlphabets[displayCurrent].harakat.letters = learnedLocalAlphabets[displayCurrent].harakat.letters.replace(` ${rightAnswer}`, '');
    }
    
    if (learnedLocalAlphabets[displayCurrent].harakat.letters.length === 0) {
      learnedLocalAlphabets.splice(displayCurrent, 1);
    }

    if (learnedLocalAlphabets.length > 0) {
      const displayCurrentNew = Math.floor(Math.random() * Math.floor(learnedLocalAlphabets.length));
      const displayVowelNew = Math.floor(Math.random() * Math.floor(learnedLocalAlphabets[displayCurrentNew].harakat.letters.split(' ').length - 1));
      this.setState({
        displayCurrent: displayCurrentNew,
        displayVowel: displayVowelNew,
      });
    } else {
      this.setState({
        displaFinalResult: true,
      })
    }
    
    this.setState({
      openResultAlert: true,
    })
  }
  makeLongVowel = (harakat) => {
    if (harakat) {
      const harRes = harakat.split('').filter(ltr => isCharTashkeel(ltr))
      switch(harRes[0]) {
        case 'َ':
          return `${harakat} ${longVowelChars[0]}`;
        case 'ِ':
          return `${harakat} ${longVowelChars[1]}`;
        case 'ُ':
          return `${harakat} ${longVowelChars[2]}`;
        default:
          return harakat;
      }
    }
    return harakat;
  }
  render() {
    const { learnedLocalAlphabets, displayCurrent, displayVowel } = this.state;
    const { classes } = this.props;
    
    return <React.Fragment>
      <Grid container justify="center" style={{border: '1px solid #224422', padding: '5px'}}>
        <Grid item>
          <Button className={`${classes.buttonStyle} ${classes.restartButton}`}
            variant="contained" color="primary" onClick={this.restart}
            startIcon={<Replay />}
            >Restart</Button>
          <Button
            className={`${classes.buttonStyle} ${classes.nextButton}`}
            startIcon={<NavigateNext />}
            endIcon={<Forward />}
            onClick={this.validateAnswer}
            >Next</Button>
        </Grid>
      </Grid>
        <Typography component="div"
            style={{textAlign: 'center', color: 'blue', padding: '10px', fontSize: '6em'}}>
              {this.makeLongVowel(learnedLocalAlphabets[displayCurrent].harakat.letters.split(' ')[displayVowel])}</Typography>
    </React.Fragment>;
  }
}

export default withStyles(styles)(LongVowelTest);
