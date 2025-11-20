import React from 'react';
import { alphabets, LEARNED_SO_FAR } from '../utils/alphabets';
import { Grid, Button, Typography, Select, MenuItem } from '@mui/material';

import { Replay, PlayArrowSharp } from '@mui/icons-material';
import _ from 'lodash';

class TestAlphabets extends React.Component{
  constructor(props) {
    super(props);
    const initialLearnedAlphabets = alphabets.slice(0, LEARNED_SO_FAR);
    // Set default to the last learned letter's Arabic character
    const initialSelectedLetter = _.get(initialLearnedAlphabets, [initialLearnedAlphabets.length - 1, 'arabic'], 'ا'); 
    this.state = {
      allAlphabets: alphabets, // Keep all alphabets for the dropdown options
      learnedAlphabets: [],
      displayCurrent: 0,
      questionNumber: 1,
      selectedLetter: initialSelectedLetter,
    };
  }
  componentDidMount() {
    this.startAgain();
  }
  
  // Helper to filter alphabets based on the selected letter
  getFilteredAlphabets = (selectedLetter) => {
    const { allAlphabets } = this.state;
    const selectedIndex = allAlphabets.findIndex(a => a.arabic === selectedLetter);
    // Slice up to and including the selected letter's index
    return allAlphabets.slice(0, selectedIndex + 1); 
  }

  startAgain = (newSelectedLetter = this.state.selectedLetter) => {
    const learnedAlphabets = this.getFilteredAlphabets(newSelectedLetter);
    const displayCurrent = learnedAlphabets.length > 0 
      ? Math.floor(Math.random() * Math.floor(learnedAlphabets.length))
      : 0;
    this.setState({
      learnedAlphabets,
      displayCurrent,
      selectedLetter: newSelectedLetter,
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
    
    // Create a new array without the current letter to choose the next random one from
    const remainingAlphabets = [...learnedAlphabets];
    remainingAlphabets.splice(displayCurrent, 1);

    if (remainingAlphabets.length > 0) {
      const displayCurrentNew = Math.floor(Math.random() * Math.floor(remainingAlphabets.length));
      this.setState({
        learnedAlphabets: remainingAlphabets,
        displayCurrent: displayCurrentNew,
        questionNumber: questionNumber + 1,
      });
    } else {
      // If all letters in the current filter range are exhausted
      this.setState({
        learnedAlphabets: [],
        displayCurrent: 0,
        questionNumber: questionNumber + 1,
      });
    }
  }

  handleFilterChange = (evt) => {
    const newSelectedLetter = evt.target.value;
    // Reset quiz with the new filter
    this.startAgain(newSelectedLetter);
    this.setState({
      questionNumber: 1,
    });
  }

  render() {
    const { learnedAlphabets, displayCurrent, questionNumber, allAlphabets, selectedLetter } = this.state;
    const currentLetter = _.get(learnedAlphabets, [displayCurrent], null);
    
    // Determine the list of letters available for selection in the dropdown
    // This uses the constant LEARNED_SO_FAR from utils/alphabets.js to limit options
    const dropdownOptions = allAlphabets.slice(0, LEARNED_SO_FAR);

    return <div>
      <Grid container style={{border: '1px solid #224422', padding: '5px'}} alignItems="center">
        
        {/* Dropdown for selecting the letter limit */}
        <Grid item style={{marginLeft: '10px', marginRight: '10px', display: 'flex', alignItems: 'center'}}>
          <Typography component="span" style={{marginRight: '10px', fontSize: '16px'}}>Select the letter to Test up to:</Typography>
          <Select
            onChange={this.handleFilterChange}
            value={selectedLetter}
            >
            {dropdownOptions.map(aLtr =>
              <MenuItem key={aLtr.arabic} value={aLtr.arabic}>{aLtr.arabic}</MenuItem>
            )}
          </Select>
        </Grid>
        <Grid item>
          <Typography component="h1">Question # {questionNumber}. </Typography>
        </Grid>

        <Grid item>
          <Button className="buttonStyle restartButton"
            variant="contained" color="primary" onClick={this.restart}
            startIcon={<Replay />}
            >Restart</Button>
        </Grid>
        
        {/* Only show "Next" button if there are remaining letters */}
        {learnedAlphabets.length > 1 && <Grid item>
          <Button className="buttonStyle buttonCorrect" variant="contained" color="primary"
            onClick={() => this.nextLetter()}
            endIcon={<PlayArrowSharp />}
            >Next</Button>
        </Grid>}
      </Grid>
      <Grid container>
        <Grid item>
        {currentLetter
          && <img className="image"
              src={require(`../images/alphabets/${currentLetter.image}`)}
              style={{border: '1px solid #cb2312'}} alt="alphabet" />}
        </Grid>
      </Grid>
    </div>;
  }
}

export default TestAlphabets;