import React from 'react';
import { alphabets, LEARNED_SO_FAR } from '../utils/alphabets';
import { Grid, Button, withStyles, Typography, List, ListItem, ListItemIcon, ListItemText, ListSubheader, Paper } from '@material-ui/core';
import { Done, Close, Mood, SentimentVeryDissatisfied, PlayCircleFilled, Replay, TrendingFlat, Score } from '@material-ui/icons';
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
  restartButton: {
    backgroundColor: 'blue'
  },
  image: {
    maxWidth: '100%;',
    heigt: 'auto',
  },
  scoreCard: {
    margin: '5px 0px 0px 5px',
  },
  scorecardTitle: {
    textAlign: 'center',
    fontSize: '18px',
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
    this.startAgain();
  }
  startAgain = () => {
    const learnedAlphabets = alphabets.slice(0, LEARNED_SO_FAR);
    const displayCurrent = Math.floor(Math.random() * Math.floor(learnedAlphabets.length));
    this.setState({
      learnedAlphabets,
      displayCurrent,
    });
  }
  restart = () => {
    this.startAgain();
    this.setState({
      displayResultButton: false,
      right: 0,
      wrong: 0,
      score: 0,
      displaFinalResult: false,
      questionNumber: 1,
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
                variant="contained" color="primary" onClick={this.verifyIt}
                startIcon={<PlayCircleFilled />}
                >Verify It</Button>}
          {displaFinalResult
            && <Button className={`${classes.buttonStyle} ${classes.restartButton}`}
                variant="contained" color="primary" onClick={this.restart}
                startIcon={<Replay />}
                >Restart</Button>}
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
          <Paper elevation={4} className={classes.scoreCard}>
            <div className={classes.scorecardTitle}>SCORE CARD</div>
            <List>
              <ListSubheader>
                Total alphabets(Questions) : {questionNumber}
              </ListSubheader>
              <ListItem style={{ backgroundColor: 'green', color: 'white'}}>
                <ListItemIcon><Done /></ListItemIcon>
                <ListItemText>Right Answers </ListItemText>
                <ListItemIcon><TrendingFlat /></ListItemIcon>
                <ListItemText>{right}</ListItemText>
              </ListItem>
              <ListItem style={{ backgroundColor: 'red', color: 'white'}}>
                <ListItemIcon><Close /></ListItemIcon>
                <ListItemText>Wrong Answers </ListItemText>
                <ListItemIcon><TrendingFlat /></ListItemIcon>
                <ListItemText>{wrong}</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><Score /></ListItemIcon>
                <ListItemText>Score </ListItemText>
                <ListItemIcon><TrendingFlat /></ListItemIcon>
                <ListItemText>{score}</ListItemText>
              </ListItem>
            </List>
          </Paper>
        </Grid>  
      </Grid>
    </div>;
  }
}

export default withStyles(styles)(Alphabet);
