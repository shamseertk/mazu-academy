import React from 'react';
import { alphabets, LEARNED_SO_FAR } from '../utils/alphabets';
import { Grid, Button, withStyles, Typography } from '@material-ui/core';
import { Done, Close, Mood, SentimentVeryDissatisfied } from '@material-ui/icons';
import _ from 'lodash';

const styles = () => ({
  buttonStyle: {
    margin: '4px 0px 0px 4px',
  },
  buttonCorrect: {
    backgroundColor: 'green',
  },
  buttonWrong: {
    backgroundColor: 'red',
  },
  image: {
    maxWidth: '100%;',
    heigt: 'auto',
  }
});

class Alphabet extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      learnedAlphabets: [],
      displayCurrent: 0,
      displayResultButton: false,
      right: 0,
      wrong: 0,
      score: 0,
      displaFinalResult: false,
      questionNumber: 1,
    };
  }
  componentDidMount() {
    const learnedAlphabets = alphabets.slice(0, LEARNED_SO_FAR);
    const displayCurrent = Math.floor(Math.random() * Math.floor(learnedAlphabets.length));
    this.setState({
      learnedAlphabets,
      displayCurrent,
    });
  }
  verifyIt = () => {
    const { learnedAlphabets, displayCurrent } = this.state;
    const audio = new Audio(require(`../audio/${learnedAlphabets[displayCurrent].letter}.m4a`));
    audio.play();
    this.setState({
      displayResultButton: true,
    })
  }
  logResult = (res) => {
    const { score, learnedAlphabets, displayCurrent, questionNumber, right, wrong} = this.state;
    learnedAlphabets.splice(displayCurrent, 1);
    this.setState({
      score: res === 'right' ? score + 1 : score - 1,
      right: res === 'right' ? right + 1 : right,
      wrong: res === 'right' ? wrong : wrong + 1,
      displayResultButton: false,
      learnedAlphabets,
    })
    if (learnedAlphabets.length > 0) {
      const displayCurrentNew = Math.floor(Math.random() * Math.floor(learnedAlphabets.length));
      this.setState({
        displayCurrent: displayCurrentNew,
        questionNumber: questionNumber + 1,
      });
    } else {
      this.setState({
        displaFinalResult: true,
      })
    }
  }
  render() {
    const { learnedAlphabets, displayCurrent, displayResultButton, displaFinalResult, questionNumber, score,
      right, wrong } = this.state;

    const { classes } = this.props;
    
    return <div style={{ paddingTop: '60px'}}>
      <div>Read the letter, click on verify button to check whether you read it correct or not. If correct click on the Right
        button otherwise on Wrong button. Then it will show next letter. Do the same until you get a 'finished' message.
      </div>
      <Grid container style={{border: '1px solid #224422', padding: '5px'}}>
        <Grid item>
          <Typography component="h1">Question # {questionNumber}. </Typography>
        </Grid>
        <Grid item>
          {!displaFinalResult
            && <Button className={classes.buttonStyle}
                variant="contained" color="primary" onClick={this.verifyIt}>Verify It</Button>}
        </Grid>
        {displayResultButton && <Grid item>
          <Button className={`${classes.buttonStyle} ${classes.buttonCorrect}`} variant="contained" color="primary"
            onClick={() => this.logResult('right')}
            startIcon={<Done />}
            endIcon={<Mood />}
            >Right</Button>
          <Button className={`${classes.buttonStyle} ${classes.buttonWrong}`} variant="contained" color="secondary"
            onClick={() => this.logResult('wrong')}
            startIcon={<Close />}
            endIcon={<SentimentVeryDissatisfied />}
            >Wrong</Button>
        </Grid>}
      </Grid>
      <Grid container>
        <Grid item>
        {_.get(learnedAlphabets, [displayCurrent, 'image'])
          && <img className={classes.image}
              src={require(`../images/alphabets/${_.get(learnedAlphabets, [displayCurrent, 'image'])}`)}
              style={{border: '1px solid #cb2312'}} alt="alphabet" />}
        </Grid>
        <Grid item>
          {questionNumber > 1 && <div><div>Right Answer = {right}</div>
          <div>Wrong Answers = {wrong} </div>
          <div>Score: {score}</div></div>}
          {displaFinalResult && <div>Total alphabets: {questionNumber}</div>}
        </Grid>
      </Grid>
    </div>;
  }
}

export default withStyles(styles)(Alphabet);
