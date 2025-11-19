import React from 'react';
import { alphabets, LEARNED_SO_FAR } from '../utils/alphabets';
import { Grid, Button, Typography } from '@mui/material';

import { Replay, PlayArrowSharp } from '@mui/icons-material';
import _ from 'lodash';

class TestAlphabets extends React.Component{
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
    
    return <div>
      <Grid container style={{border: '1px solid #224422', padding: '5px'}}>
        <Grid item>
          <Typography component="h1">Question # {questionNumber}. </Typography>
        </Grid>
        <Grid item>
          <Button className="buttonStyle restartButton"
            variant="contained" color="primary" onClick={this.restart}
            startIcon={<Replay />}
            >Restart</Button>
        </Grid>
        <Grid item>
          <Button className="buttonStyle buttonCorrect" variant="contained" color="primary"
            onClick={() => this.nextLetter()}
            endIcon={<PlayArrowSharp />}
            >Next</Button>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item>
        {_.get(learnedAlphabets, [displayCurrent, 'image'])
          && <img className="image"
              src={require(`../images/alphabets/${_.get(learnedAlphabets, [displayCurrent, 'image'])}`)}
              style={{border: '1px solid #cb2312'}} alt="alphabet" />}
        </Grid>
      </Grid>
    </div>;
  }
}

export default TestAlphabets;
