import React from 'react';
import { alphabets, learnedAlphabets } from '../utils/alphabets';
import { Grid, Button, withStyles, Typography, FormControlLabel, Radio, Dialog, DialogTitle,RadioGroup, DialogContent, DialogActions, DialogContentText, Slider, Avatar } from '@material-ui/core';
import { PlayCircleFilled, Replay, NavigateNext, Forward, EmojiEmotions, MoodBad } from '@material-ui/icons';
import _ from 'lodash';

const styles = () => ({
  buttonStyle: {
    margin: '4px 0px 0px 4px',
  },
  restartButton: {
    backgroundColor: 'blue'
  },
  label: {
    fontSize: '3em',
  },
  nextButton: {
    backgroundColor: 'green',
    color: 'white',
    '&:hover': {
      backgroundColor: '#9acd32',
      color: 'blue',
    }
  },
  questNumber: {
    fontSize: '1.5em',
    fontWeight: 'bold',
  },
  sliderValueLabel: {
    color: 'green',
  },
  rail: {
    backgroundColor: 'red',
    height: '15px',
  },
  track: {
    backgroundColor: 'green',
    height: '15px',
  },
  result: {
    fontSize: '1.5em'
  },
  resultHighlight: {
    fontSize: '2em',
    color: 'blue'
  }
});

class VowelQuestion extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      learnedLocalAlphabets: JSON.parse(JSON.stringify(alphabets)),
      displayCurrent: 0,
      right: 0,
      wrong: 0,
      score: 0,
      displaFinalResult: false,
      questionNumber: 1,
      openResultAlert: false,
    };
  }
  componentDidMount() {
    this.startAgain();
  }
  generateOptions = (displayCurrParam, displayVowelParam) => {
    const returnVal = [];
    const checkIndex = [];
    const checkVwlIndex = [];
    const { learnedLocalAlphabets: updatedLearnedAlphabets } = this.state;
    while (checkIndex.length < 4) {
      const optionIndex = Math.floor(Math.random() * Math.floor(learnedAlphabets.length));
      const optVwlIndex = Math.floor(Math.random() * Math.floor(3));
      if (!checkIndex.includes(optionIndex) || !checkVwlIndex.includes(optVwlIndex)) {
        returnVal.push(learnedAlphabets[optionIndex].harakat.letters.split(' ')[optVwlIndex]);
        checkIndex.push(optionIndex);
        checkVwlIndex.push(optVwlIndex);
      }
    }
    if (!returnVal.includes(updatedLearnedAlphabets[displayCurrParam].harakat.letters.split(' ')[displayVowelParam])) {
      const optionCorrectIndex = Math.floor(Math.random() * Math.floor(3));
      returnVal.splice(optionCorrectIndex, 1, updatedLearnedAlphabets[displayCurrParam].harakat.letters.split(' ')[displayVowelParam]);
    }
    return returnVal;
  };
  startAgain = () => {
    const learnedLocalAlphabets = JSON.parse(JSON.stringify(alphabets));
    const displayCurrent = Math.floor(Math.random() * Math.floor(learnedLocalAlphabets.length));
    const displayVowel = Math.floor(Math.random() * Math.floor(3));
    const options = this.generateOptions(displayCurrent, displayVowel);
    this.setState({
      learnedLocalAlphabets,
      displayCurrent,
      displayVowel,
      options,
    });
  }
  restart = () => {
    this.startAgain();
    this.setState({
      right: 0,
      wrong: 0,
      score: 0,
      displaFinalResult: false,
      questionNumber: 1,
    });
  }
  playSound = () => {
    const { learnedLocalAlphabets, displayCurrent, displayVowel } = this.state;
    const audio = new Audio(require(`../audio/vowel/${learnedLocalAlphabets[displayCurrent].harakat.audio.split(' ')[displayVowel]}`));
    audio.play();
  }
  validateAnswer = () => {
    const { answer, displayCurrent, displayVowel, learnedLocalAlphabets, questionNumber } = this.state;
    let { right, wrong } = this.state;
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
      const options = this.generateOptions(displayCurrentNew, displayVowelNew);
      this.setState({
        questionNumber: questionNumber + 1,
        displayCurrent: displayCurrentNew,
        displayVowel: displayVowelNew,
        options,
      });
    } else {
      this.setState({
        displaFinalResult: true,
      })
    }

    const result = {
      rightAnswer,
      answer,
    };
    if (answer === rightAnswer) {
      result.status = 'right';
      right++;
    } else {
      result.status = 'wrong';
      wrong++;
    }
    
    this.setState({
      openResultAlert: true,
      result,
      right,
      wrong,
      answer: null,
    })
  }
  handleCloseAlert = () => {
    this.setState({
      openResultAlert: false,
    })
  }
  handleAnswerOptionClick = (event) => {
    this.setState({
      answer: event.target.value,
    })
  }
  render() {
    const { openResultAlert, questionNumber, displaFinalResult, 
      right, wrong, options, result } = this.state;

    const { classes } = this.props;
    
    return <React.Fragment>
      <div className="instruction">Click on button <Button className={classes.buttonStyle}
                variant="contained" color="primary"
                startIcon={<PlayCircleFilled />}
                >Play</Button>, listen what is the letter and then choose the right answer from the options.
                Total 112 questions and it will show final percentage once you attend all 112 questions.</div>
      <Grid container justify="center" style={{border: '1px solid #224422', padding: '5px'}}>
        <Grid item>
          <Button className={`${classes.buttonStyle} ${classes.restartButton}`}
            variant="contained" color="primary" onClick={this.restart}
            startIcon={<Replay />}
            >Restart</Button>
        </Grid>
        <Grid item style={{ paddingLeft: '10px' }}>
          <Slider
            max={28 * 4}
            disabled
            valueLabelDisplay="on"
            value={right}
            classes={{valueLabel: classes.sliderValueLabel, rail: classes.rail, track: classes.track}}
            />
          <Typography component="h3" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
             You have <Avatar style={{margin: '0px 5px', backgroundColor: 'green'}}>{right}</Avatar> right answers and 
             <Avatar style={{margin: '0px 5px', backgroundColor: 'red'}}>{wrong}</Avatar> wrong answers.</Typography>
        </Grid>
      </Grid>
      {!displaFinalResult 
        ? <Grid container>
          <Grid item>
            <Typography component="h3" style={{padding: '10px'}}><span className={classes.questNumber}>Question # {questionNumber}.</span>
            Play this first <Button className={classes.buttonStyle}
                  variant="contained" color="primary" onClick={this.playSound}
                  startIcon={<PlayCircleFilled />}
                  >Play</Button> and then choose right answer.</Typography>
            <RadioGroup row style={{ justifyContent: 'space-between', padding: '10px' }}>
              {options && options.map(opt => <FormControlLabel
                key={opt}
                onChange={this.handleAnswerOptionClick}
                classes={{ label: classes.label }}
                control={<Radio />}
                value={opt}
                label={opt} />)}
            </RadioGroup>
            <div style={{textAlign: 'right'}}>
              <Button
                className={classes.nextButton}
                startIcon={<NavigateNext />}
                endIcon={<Forward />}
                onClick={this.validateAnswer}
                >Next</Button> </div>
          </Grid>
        </Grid>
        : <Typography component="div"
            style={{textAlign: 'center', color: 'blue', backgroundColor: 'orange', padding: '20px', fontSize: '2em'}}>
              Your percentage is {(right * 100/(28*4)).toFixed(2)} %</Typography>  }
      <Dialog
        open={openResultAlert}
        onClose={this.handleCloseAlert}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        >
        <DialogTitle id="alert-dialog-title">
          {_.get(result, ['status']) === 'right' 
            ? <React.Fragment><Typography component="div"
                style={{backgroundColor: 'green', textAlign: 'center', color: 'white', fontSize: '1.5em'}}>Correct<EmojiEmotions /></Typography>
              </React.Fragment>
            : <Typography component="div"
                style={{backgroundColor: 'red', textAlign: 'center', color: 'white', fontSize: '1.5em'}}>Wrong<MoodBad /></Typography>}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" className={classes.result}>
            The correct answer is <span className={classes.resultHighlight}> {_.get(result, ['rightAnswer'])} </span><br />
            You have selected <span className={classes.resultHighlight}> {_.get(result, ['answer'])} </span>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            color="primary"
            variant="contained"
            onClick={this.handleCloseAlert}
            >Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>;
  }
}

export default withStyles(styles)(VowelQuestion);
