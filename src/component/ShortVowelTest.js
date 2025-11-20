import React from 'react';
import { alphabets, LEARNED_SO_FAR } from '../utils/alphabets';
import { Grid, Button, Typography, Select, MenuItem } from '@mui/material';

import { Replay, NavigateNext, Forward } from '@mui/icons-material';
import _ from 'lodash';

class ShortVowelTest extends React.Component{
  constructor(props) {
    super(props);
    const initialLearnedAlphabets = alphabets.slice(0, LEARNED_SO_FAR);
    // Set default to the last learned letter's Arabic character
    const initialSelectedLetter = _.get(initialLearnedAlphabets, [initialLearnedAlphabets.length - 1, 'arabic'], 'ا'); 
    
    this.state = {
      allAlphabets: JSON.parse(JSON.stringify(alphabets)), // Keep all alphabets for the dropdown options
      learnedLocalAlphabets: [],
      // REMOVED displayCurrent, displayVowel
      currentBatch: [], // NEW: Array of objects to display in the current batch
      displaFinalResult: false,
      selectedLetter: initialSelectedLetter, // New state for max letter filter
      batchSize: 2, // New state for batch size, default to 4 (max)
    };
  }
  componentDidMount() {
    this.startAgain();
  }
  
  // Helper to filter alphabets based on the selected letter and deep copy for quiz instance
  getFilteredAndBatchedAlphabets = (selectedLetter) => {
    const { allAlphabets } = this.state;
    // 1. Filter up to selected letter
    const selectedIndex = allAlphabets.findIndex(a => a.arabic === selectedLetter);
    const filteredAlphabets = allAlphabets.slice(0, selectedIndex + 1);
    
    // 2. Deep copy to ensure fresh quiz instance for restart/filter change
    let poolToSelectFrom = JSON.parse(JSON.stringify(filteredAlphabets));
    
    return poolToSelectFrom; 
  }

  // NEW HELPER: Selects the next batch of unique harakat from the available pool
  selectNextBatch = (currentLearnedAlphabets, newBatchSize) => {
    const pool = JSON.parse(JSON.stringify(currentLearnedAlphabets));
    let newBatch = [];
    let count = 0;
    
    // Continue loop until newBatch is filled or pool is exhausted
    while(count < newBatchSize && pool.length > 0) {
        // 1. Pick a random letter from the pool (we use a shallow copy to prevent infinite loops if an alphabet is exhausted)
        const randomIndex = Math.floor(Math.random() * pool.length);
        const letter = pool[randomIndex];
        
        // 2. Get available harakat and audio
        // Filter out empty strings that might result from .join(' ')
        const vowels = letter.harakat.letters.split(' ').filter(v => v !== '');
        const audioFiles = letter.harakat.audio.split(' ').filter(a => a !== '');
        
        if (vowels.length > 0) {
            // 3. Pick a random vowel from the available ones
            const vowelIndex = Math.floor(Math.random() * vowels.length);
            const harakah = vowels[vowelIndex];
            
            newBatch.push({
                harakah: harakah,
                letterId: letter.id, 
            });
            count++;

            // 4. Temporarily remove the selected vowel/audio from the pool letter
            vowels.splice(vowelIndex, 1);
            audioFiles.splice(vowelIndex, 1);
            letter.harakat.letters = vowels.join(' ');
            letter.harakat.audio = audioFiles.join(' ');

            // 5. If the letter is now exhausted, remove it from the pool (using the original randomIndex)
            if (vowels.length === 0) {
                pool.splice(randomIndex, 1);
            }
        } else {
            // If a letter has no vowels (shouldn't happen with correct logic), remove it.
            pool.splice(randomIndex, 1);
        }
    }
    
    return { 
        updatedLearnedAlphabets: pool, 
        currentBatch: newBatch 
    };
  }

  startAgain = (newSelectedLetter = this.state.selectedLetter, newBatchSize = this.state.batchSize) => {
    // Generate the initial set of letters for the quiz
    const filteredAlphabets = this.getFilteredAndBatchedAlphabets(newSelectedLetter);
    
    const { updatedLearnedAlphabets, currentBatch } = this.selectNextBatch(filteredAlphabets, newBatchSize);

    this.setState({
      learnedLocalAlphabets: updatedLearnedAlphabets,
      currentBatch: currentBatch,
      selectedLetter: newSelectedLetter,
      batchSize: newBatchSize,
      displaFinalResult: currentBatch.length === 0 && updatedLearnedAlphabets.length === 0,
    });
  }
  
  restart = () => {
    // Reset to initial filtered/batched set
    this.startAgain();
    this.setState({
      displaFinalResult: false,
    });
  }

  handleFilterChange = (evt) => {
    const newSelectedLetter = evt.target.value;
    // Reset quiz with the new filter, keeping current batch size
    this.startAgain(newSelectedLetter, this.state.batchSize);
  }
  
  handleBatchSizeChange = (evt) => {
    const newBatchSize = parseInt(evt.target.value, 10);
    // Reset quiz with the new batch size, keeping current letter filter
    this.startAgain(this.state.selectedLetter, newBatchSize);
  }

  validateAnswer = () => {
    const { learnedLocalAlphabets, batchSize } = this.state;
    
    if (learnedLocalAlphabets.length === 0 && this.state.currentBatch.length === 0) {
        this.setState({ displaFinalResult: true });
        return;
    }

    // Get the next batch of questions. The current batch was already removed from the pool in selectNextBatch.
    const { updatedLearnedAlphabets, currentBatch } = this.selectNextBatch(learnedLocalAlphabets, batchSize);
    
    let nextState = {
        learnedLocalAlphabets: updatedLearnedAlphabets,
        currentBatch: currentBatch,
    };

    if (currentBatch.length === 0 && updatedLearnedAlphabets.length === 0) {
      nextState = {
        ...nextState,
        displaFinalResult: true,
      };
    }
    
    // Update the state once
    this.setState(nextState);
  }
  
  // NEW HELPER: For playing the sound of a specific Harakah in the current batch
  playSound = (letterId, harakah) => {
      // Find the alphabet object that contains this harakah
      // We use allAlphabets here because it's the stable list containing all audio links
      const originalAlphabet = this.state.allAlphabets.find(a => a.id === letterId);
      if (!originalAlphabet) return;

      // The harakah value is the 'text' version, e.g., 'بَ'
      const harakatLetters = originalAlphabet.harakat.letters.split(' ');
      const harakatAudios = originalAlphabet.harakat.audio.split(' ');

      // Find the index of the harakah in the original full list to get the corresponding audio file
      const harakahIndex = harakatLetters.findIndex(l => l === harakah);
      if (harakahIndex > -1 && harakatAudios[harakahIndex]) {
          const audio = new Audio(require(`../audio/vowel/${harakatAudios[harakahIndex]}`));
          audio.play();
      }
  }

  render() {
    const { allAlphabets, selectedLetter, batchSize, displaFinalResult, currentBatch } = this.state;
    
    // Determine the list of letters available for selection in the dropdown (max limit is LEARNED_SO_FAR)
    const dropdownOptions = allAlphabets.slice(0, LEARNED_SO_FAR);
    
    // Options for batch size, up to 4
    const batchSizeOptions = [1, 2, 3, 4];
    
    const displayVowels = currentBatch;

    return (
      <React.Fragment>
        <Grid container style={{border: '1px solid #224422', padding: '5px'}} alignItems="center">
          
          {/* Dropdown 1: Select the letter to Test up to */}
          <Grid item style={{marginLeft: '10px', marginRight: '10px', display: 'flex', alignItems: 'center'}}>
            <Typography component="span" style={{marginRight: '10px', fontSize: '16px'}}>Test up to:</Typography>
            <Select
              onChange={this.handleFilterChange}
              value={selectedLetter}
              >
              {dropdownOptions.map(aLtr =>
                <MenuItem key={aLtr.arabic} value={aLtr.arabic}>{aLtr.arabic}</MenuItem>
              )}
            </Select>
          </Grid>

          {/* Dropdown 2: How many letters at a time (batch size) */}
          <Grid item style={{marginLeft: '10px', marginRight: '10px', display: 'flex', alignItems: 'center'}}>
            <Typography component="span" style={{marginRight: '10px', fontSize: '16px'}}>Letters in Test Set:</Typography>
            <Select
              onChange={this.handleBatchSizeChange}
              value={batchSize}
              >
              {batchSizeOptions.map(size =>
                <MenuItem key={size} value={size}>{size}</MenuItem>
              )}
            </Select>
          </Grid>

          <Grid item>
            <Button className="buttonStyle restartButton"
              variant="contained" color="primary" onClick={this.restart}
              startIcon={<Replay />}
              >Restart</Button>
            {/* Only show next if there's a batch to display and we are not finished */}
            {!displaFinalResult && currentBatch.length > 0 && 
              <Button
                className="buttonStyle nextButton"
                startIcon={<NavigateNext />}
                endIcon={<Forward />}
                onClick={this.validateAnswer}
                >Next</Button>}
          </Grid>
        </Grid>
        
        {displaFinalResult
          ? <Typography component="div"
              style={{textAlign: 'center', color: 'blue', backgroundColor: 'orange', padding: '20px', fontSize: '2em'}}>
                Quiz Complete!</Typography>
          : (currentBatch.length > 0
            ? <Grid container justifyContent="center" spacing={2} style={{padding: '10px'}}>
             
                {/* Display each vowel in the current batch */}
                {displayVowels.map((vowel, index) => (
                  <Grid item key={index}>
                        <Typography style={{textAlign: 'center', color: 'blue', padding: '3px', fontSize: '6em',
                          cursor: 'pointer'
                        }}
                        // Clicking a vowel will play its sound
                        onClick={() => this.playSound(vowel.letterId, vowel.harakah)}
                        >
                            {vowel.harakah}
                            <Typography variant="caption" display="block" style={{fontSize: '0.1em', color: 'gray'}}>
                              (Click to hear)
                            </Typography>
                    </Typography>
                    </Grid>
                ))}
              </Grid>
            : <Typography component="div"
                style={{textAlign: 'center', color: 'blue', padding: '10px', fontSize: '2em'}}>
                  Select a test range to begin or click Restart if the quiz pool is currently empty.</Typography> 
            )
        }
      </React.Fragment>
    );
  }
}

export default ShortVowelTest;