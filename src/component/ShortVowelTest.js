import React from 'react';
import { alphabets } from '../utils/alphabets';
import { Grid, Button, Typography } from '@mui/material';

import { Replay, NavigateNext, Forward } from '@mui/icons-material';

class ShortVowelTest extends React.Component{
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
    const displayVowel = Math.floor(Math.random() * Math.floor(3));
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
    const rightAnswerAudio = learnedLocalAlphabets[displayCurrent].harakat.audio.split(' ')[displayVowel];

    if (learnedLocalAlphabets[displayCurrent].harakat.letters.split(' ').length === 1) {
      learnedLocalAlphabets[displayCurrent].harakat.letters = learnedLocalAlphabets[displayCurrent].harakat.letters.replace(`${rightAnswer}`, '');
      learnedLocalAlphabets[displayCurrent].harakat.audio = learnedLocalAlphabets[displayCurrent].harakat.audio.replace(`${rightAnswerAudio}`, '');
    } else if (displayVowel === 0) {
      learnedLocalAlphabets[displayCurrent].harakat.letters = learnedLocalAlphabets[displayCurrent].harakat.letters.replace(`${rightAnswer} `, '');
      learnedLocalAlphabets[displayCurrent].harakat.audio = learnedLocalAlphabets[displayCurrent].harakat.audio.replace(`${rightAnswerAudio} `, '');
    } else {
      learnedLocalAlphabets[displayCurrent].harakat.letters = learnedLocalAlphabets[displayCurrent].harakat.letters.replace(` ${rightAnswer}`, '');
      learnedLocalAlphabets[displayCurrent].harakat.audio = learnedLocalAlphabets[displayCurrent].harakat.audio.replace(` ${rightAnswerAudio}`, '');
    }
    
    if (learnedLocalAlphabets[displayCurrent].harakat.letters.length === 0) {
      learnedLocalAlphabets.splice(displayCurrent, 1);
    }

    if (learnedLocalAlphabets.length > 0) {
      const displayCurrentNew = Math.floor(Math.random() * Math.floor(learnedLocalAlphabets.length));
      const displayVowelNew = Math.floor(Math.random() * Math.floor(learnedLocalAlphabets[displayCurrentNew].harakat.letters.split(' ').length));
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
  render() {
    const { learnedLocalAlphabets, displayCurrent, displayVowel } = this.state;
    
    return (
      <React.Fragment>
        <Grid container justifyContent="center" style={{border: '1px solid #224422', padding: '5px'}}>
          <Grid item>
            <Button className="buttonStyle restartButton"
              variant="contained" color="primary" onClick={this.restart}
              startIcon={<Replay />}
              >Restart</Button>
            <Button
              className="buttonStyle nextButton"
              startIcon={<NavigateNext />}
              endIcon={<Forward />}
              onClick={this.validateAnswer}
              >Next</Button>
          </Grid>
        </Grid>
          <Typography component="div"
              style={{textAlign: 'center', color: 'blue', padding: '10px', fontSize: '6em'}}>
                {learnedLocalAlphabets[displayCurrent].harakat.letters.split(' ')[displayVowel]}</Typography>
      </React.Fragment>
    );
  }
}

export default ShortVowelTest;
