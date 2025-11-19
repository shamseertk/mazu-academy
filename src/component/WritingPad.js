import {
  Button,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';
import React from 'react';
import { alphabets, LEARNED_SO_FAR } from '../utils/alphabets';

import { Close, Done, HelpOutline, HowToReg, Mood, Replay, Score, SentimentVeryDissatisfied, TrendingFlat } from '@mui/icons-material';
import _ from 'lodash';
import ReactPlayer from 'react-player';
import Canvas from './common/Drawing/Canvas';

class WritingPad extends React.Component{
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
      readyToVerify: false,
      timer: null,
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
      brushColor: 'green',
    });
  }
  verifyIt = () => {
    const { learnedAlphabets, displayCurrent } = this.state;
    this.player.seekTo(parseFloat(_.get(learnedAlphabets, [displayCurrent, 'writing', 'start'])), 'seconds');
    this.setState({
      readyToVerify: true,
      displayResultButton: true,
    });
    const timeSec = _.get(learnedAlphabets, [displayCurrent, 'writing', 'end']) 
      - _.get(learnedAlphabets, [displayCurrent, 'writing', 'start'])
    const timer = setTimeout(() => this.setState({ readyToVerify: false, }), (timeSec + 1) * 1000);
    this.setState({
      timer,
    });
  }
  logResult = (res) => {
    const { score, learnedAlphabets, displayCurrent, questionNumber, right, wrong, timer} = this.state;
    learnedAlphabets.splice(displayCurrent, 1);
    this.setState({
      score: res === 'right' ? score + 1 : score - 1,
      right: res === 'right' ? right + 1 : right,
      wrong: res === 'right' ? wrong : wrong + 1,
      displayResultButton: false,
      learnedAlphabets,
      readyToVerify: false,
    });
    clearTimeout(timer);
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
  eraseWindow = () => {
    this.saveableCanvas.clear();
  }
  changeColorTo = (color) => {
    this.setState({
      brushColor: color,
    })
  }
  undoPaint = () => {
    this.saveableCanvas.undo();
  }
  render() {
    const { learnedAlphabets, displayCurrent, displayResultButton, displaFinalResult, questionNumber, score,
      right, wrong, readyToVerify } = this.state;
    
    return (
      <React.Fragment>
        <div>Write the letter, click on <Button className="buttonStyle"
          variant="contained" color="primary"
          startIcon={<HowToReg />}
          >Check It</Button> button to check whether you write it correct or not. If correct click on the 
          <Button className="buttonStyle buttonCorrect" variant="contained" color="primary"
            startIcon={<Done />}
            endIcon={<Mood />}
            >Right</Button>
          button otherwise on <Button className="buttonStyle buttonWrong" variant="contained" color="secondary"
              startIcon={<Close />}
              endIcon={<SentimentVeryDissatisfied />}
              >Wrong</Button> button. Then it will show next letter. Do the same until you get final score.
        </div>
        <Grid container style={{border: '1px solid #224422', padding: '5px', verticalAlign: 'middle'}}>
          <Grid item>
            <Typography component="h1">Question # {questionNumber}. Write this letter </Typography>
          </Grid>
          <Grid item>
            {_.get(learnedAlphabets, [displayCurrent, 'image'])
              && <img className="image"
                  src={require(`../images/alphabets/${_.get(learnedAlphabets, [displayCurrent, 'image'])}`)}
                  style={{border: '1px solid #cb2312'}} alt="alphabet" />}
          </Grid>
          <Grid item>
            {!displaFinalResult
              && <Button className="buttonStyle"
                  variant="contained" color="primary" onClick={this.verifyIt}
                  startIcon={<HowToReg />}
                  >Check It</Button>}
            {displaFinalResult
              && <Button className="buttonStyle restartButton"
                  variant="contained" color="primary" onClick={this.restart}
                  startIcon={<Replay />}
                  >Restart</Button>}
          </Grid>
          {displayResultButton && <Grid item>
            <Button className="buttonStyle buttonCorrect" variant="contained" color="primary"
              onClick={() => this.logResult('right')}
              startIcon={<Done />}
              endIcon={<Mood />}
              >Right</Button>
            <Button className="buttonStyle buttonWrong" variant="contained" color="secondary"
              onClick={() => this.logResult('wrong')}
              startIcon={<Close />}
              endIcon={<SentimentVeryDissatisfied />}
              >Wrong</Button>
          </Grid>}
        </Grid>
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
          <div>
          </div>
          <div style={{border: '1px solid #543cd2'}}>
            <Canvas
              brushColor={this.state.brushColor}
              />
          </div>
          <div>
            <ReactPlayer
              width="100%"
              ref={player => (this.player = player)}
              playing={readyToVerify}
              url='https://www.youtube.com/watch?v=g5XTXWpOzfE' />
          </div>
          <div>
            <Paper elevation={4} className="scoreCard">
              <div className="scorecardTitle">SCORE CARD</div>
              <List>
                <ListItem style={{ backgroundColor: 'gray', color: 'white'}}>
                  <ListItemIcon><HelpOutline style={{color: 'white'}} /></ListItemIcon>
                  <ListItemText>Total alphabets(Questions) </ListItemText>
                  <ListItemIcon><TrendingFlat style={{color: 'white'}} /></ListItemIcon>
                  <ListItemText>{questionNumber}</ListItemText>
                </ListItem>
                <ListItem style={{ backgroundColor: 'green', color: 'white'}}>
                  <ListItemIcon><Done style={{color: 'white'}} /></ListItemIcon>
                  <ListItemText>Right Answers </ListItemText>
                  <ListItemIcon><TrendingFlat style={{color: 'white'}} /></ListItemIcon>
                  <ListItemText>{right}</ListItemText>
                </ListItem>
                <ListItem style={{ backgroundColor: 'red', color: 'white'}}>
                  <ListItemIcon><Close style={{color: 'white'}} /></ListItemIcon>
                  <ListItemText>Wrong Answers </ListItemText>
                  <ListItemIcon><TrendingFlat style={{color: 'white'}} /></ListItemIcon>
                  <ListItemText>{wrong}</ListItemText>
                </ListItem>
                <ListItem style={{ backgroundColor: 'blue', color: 'white'}}>
                  <ListItemIcon><Score style={{color: 'white'}} /></ListItemIcon>
                  <ListItemText>Total Score </ListItemText>
                  <ListItemIcon><TrendingFlat style={{color: 'white'}} /></ListItemIcon>
                  <ListItemText>{score}</ListItemText>
                </ListItem>
              </List>
            </Paper>
          </div>  
        </div>
      </React.Fragment>
    );
  }
}

export default WritingPad;
