import React from 'react';
import { alphabets, LEARNED_SO_FAR } from '../utils/alphabets';
import { Grid, Button, withStyles, Typography } from '@material-ui/core';
import { Replay, PlayArrowSharp } from '@material-ui/icons';
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
      questionNumber: 1,
    });
  }
  nextLetter = () => {
    const { learnedAlphabets, displayCurrent, questionNumber } = this.state;
    learnedAlphabets.splice(displayCurrent, 1);
    this.setState({
      learnedAlphabets,
    })
    if (learnedAlphabets.length > 0) {
      const displayCurrentNew = Math.floor(Math.random() * Math.floor(learnedAlphabets.length));
      this.setState({
        displayCurrent: displayCurrentNew,
        questionNumber: questionNumber + 1,
      });
    }
  }
  render() {
    const { learnedAlphabets, displayCurrent, questionNumber } = this.state;

    const { classes } = this.props;
    
    return <div className="container">
      <Grid container style={{border: '1px solid #224422', padding: '5px'}}>
        <Grid item>
          <Typography component="h1">Question # {questionNumber}. </Typography>
        </Grid>
        <Grid item>
          <Button className={`${classes.buttonStyle} ${classes.restartButton}`}
            variant="contained" color="primary" onClick={this.restart}
            startIcon={<Replay />}
            >Restart</Button>
        </Grid>
        <Grid item>
          <Button className={`${classes.buttonStyle} ${classes.buttonCorrect}`} variant="contained" color="primary"
            onClick={() => this.nextLetter()}
            endIcon={<PlayArrowSharp />}
            >Next</Button>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item>
        {_.get(learnedAlphabets, [displayCurrent, 'image'])
          && <img className={classes.image}
              src={require(`../images/alphabets/${_.get(learnedAlphabets, [displayCurrent, 'image'])}`)}
              style={{border: '1px solid #cb2312'}} alt="alphabet" />}
        </Grid>
      </Grid>
    </div>;
  }
}

export default withStyles(styles)(Alphabet);
