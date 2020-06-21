import React from 'react';
import { alphabets, LEARNED_SO_FAR } from '../utils/alphabets';
import { Grid, Button, withStyles, Typography, List, ListItem, ListItemIcon, ListItemText, Paper, IconButton } from '@material-ui/core';
import { Done, Close, Mood, SentimentVeryDissatisfied, Replay, TrendingFlat, Score, HelpOutline, Backspace, HowToReg, FiberManualRecord, Undo } from '@material-ui/icons';
import _ from 'lodash';
import CanvasDraw from "react-canvas-draw";
import ReactPlayer from 'react-player';

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
  eraseButton: {
    backgroundColor: 'gray',
    '&:hover': {
      backgroundColor: 'red',
    }
  },
  image: {
    maxWidth: '70px;',
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
      right, wrong, readyToVerify, brushColor } = this.state;

    const { classes } = this.props;
    
    return <React.Fragment>
      <div>Write the letter, click on <Button className={classes.buttonStyle}
        variant="contained" color="primary"
        startIcon={<HowToReg />}
        >Check It</Button> button to check whether you write it correct or not. If correct click on the 
        <Button className={`${classes.buttonStyle} ${classes.buttonCorrect}`} variant="contained" color="primary"
          startIcon={<Done />}
          endIcon={<Mood />}
          >Right</Button>
        button otherwise on <Button className={`${classes.buttonStyle} ${classes.buttonWrong}`} variant="contained" color="secondary"
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
            && <img className={classes.image}
                src={require(`../images/alphabets/${_.get(learnedAlphabets, [displayCurrent, 'image'])}`)}
                style={{border: '1px solid #cb2312'}} alt="alphabet" />}
        </Grid>
        <Grid item>
          {!displaFinalResult
            && <Button className={classes.buttonStyle}
                variant="contained" color="primary" onClick={this.verifyIt}
                startIcon={<HowToReg />}
                >Check It</Button>}
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
      <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
        <div>
        </div>
        <div style={{border: '1px solid #543cd2'}}>
          Write below. <Button className={`${classes.buttonStyle} ${classes.eraseButton}`} variant="contained" color="primary"
            onClick={this.eraseWindow}
            startIcon={<Backspace />}
            >Erase All</Button>
          <Button className={`${classes.buttonStyle} ${classes.eraseButton}`} variant="contained" color="primary"
            onClick={this.undoPaint}
            startIcon={<Undo />}
            >Undo</Button>
          <IconButton onClick={() => this.changeColorTo('green')}><FiberManualRecord style={{backgroundColor: 'green'}} /></IconButton>
          <IconButton onClick={() => this.changeColorTo('red')}><FiberManualRecord style={{backgroundColor: 'red'}} /></IconButton>
          <IconButton onClick={() => this.changeColorTo('blue')}><FiberManualRecord style={{backgroundColor: 'blue'}} /></IconButton>
          <IconButton onClick={() => this.changeColorTo('orange')}><FiberManualRecord style={{backgroundColor: 'orange'}} /></IconButton>
          <CanvasDraw
            ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
            lazyRadius={0}
            brushColor={brushColor}
            brushRadius={3}
            imgSrc={require("../images/writing/writingLines.png")}
            canvasWidth="640px"
            canvasHeight="208px"
            catenaryColor={brushColor}
            />
        </div>
        <div>
          <ReactPlayer
            ref={player => (this.player = player)}
            playing={readyToVerify}
            url='https://www.youtube.com/watch?v=g5XTXWpOzfE' />
        </div>
        <div>
          <Paper elevation={4} className={classes.scoreCard}>
            <div className={classes.scorecardTitle}>SCORE CARD</div>
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
    </React.Fragment>;
  }
}

export default withStyles(styles)(WritingPad);
