import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { DndContext } from '@dnd-kit/core';
import { Grid, Typography, Button, Select, MenuItem } from '@mui/material';
import { arabicWords } from '../../utils/words';
import _ from 'lodash';
import WordTitle from './WordTitle';
import WordImage from './WordImage';

function ExerciseOne() {
  // New state for the minimum letter selection (start of the range)
  const [startLetter, setStartLetter] = useState(arabicWords[0].arabic);
  // Existing state for the maximum letter selection (end of the range)
  const [selectedLetter, setSelectedLetter] = useState(arabicWords[0].arabic);
  
  // Memoize the words data based on the selected letter range and the cumulative logic
  const wordsToMatchData = useMemo(() => {
    // 1. Find the indices of the min and max letters
    const startIndex = arabicWords.findIndex(item => item.arabic === startLetter);
    const endIndex = arabicWords.findIndex(item => item.arabic === selectedLetter);
    
    // Safety check for range validity (Index must be valid and Start Index must be <= End Index)
    if (startIndex === -1 || endIndex === -1 || startIndex > endIndex || arabicWords.length === 0) {
        // Fallback: If the range is invalid, use only the words from the selected MAX letter.
        const singleLetterWords = arabicWords.find(item => item.arabic === selectedLetter)?.words || [];
        const shuffledSingle = _.shuffle(singleLetterWords);
        return shuffledSingle.slice(0, 4);
    }

    // 2. Create a pool of all words in the range [startIndex, endIndex]
    const cumulativeWordPool = arabicWords
      .slice(startIndex, endIndex + 1) // Get all letter objects in the defined range
      .flatMap(item => item.words); // Flatten all word lists into a single array

    // 3. Randomly sample a maximum of 4 unique words
    const maxWords = 4;
    const shuffledPool = _.shuffle(cumulativeWordPool);
    const selectedWords = shuffledPool.slice(0, maxWords);
    
    return selectedWords;
  }, [startLetter, selectedLetter]); // Re-calculates when either min or max letter changes

  // Function to generate fresh initial state objects, including a shuffled word order
  const getInitialStates = useCallback(() => {
    const shuffledWords = _.shuffle(wordsToMatchData);
    
    const droppableState = wordsToMatchData.reduce((acc, word) => {
        acc[word.english] = null;
        return acc;
    }, {});

    const draggableState = wordsToMatchData.reduce((acc, word) => {
        acc[word.english] = false;
        return acc;
    }, {});
    
    return { droppableState, draggableState, wordsOrder: shuffledWords };
  }, [wordsToMatchData]);

  // Initializing state using the memoized initial states
  const { 
      droppableState: initialDroppableState, 
      draggableState: initialDraggableState,
      wordsOrder: initialWordsOrder 
  } = useMemo(() => getInitialStates(), [getInitialStates]); 
  
  // State Hooks
  const [droppableState, setDroppableState] = useState(initialDroppableState);
  const [draggableState, setDraggableState] = useState(initialDraggableState);
  const [wordsOrder, setWordsOrder] = useState(initialWordsOrder);
  const [isGameComplete, setIsGameComplete] = useState(false);
  const [score, setScore] = useState(0);

  // Restart Game Logic
  const restartGame = useCallback(() => {
      const { 
          droppableState: freshDroppableState, 
          draggableState: freshDraggableState,
          wordsOrder: freshWordsOrder
      } = getInitialStates();
      
      setDroppableState(freshDroppableState);
      setDraggableState(freshDraggableState);
      setWordsOrder(freshWordsOrder);
      setIsGameComplete(false);
      setScore(0);
  }, [getInitialStates]);

  // Effect to reset state whenever the selected letter range (and thus wordsToMatchData) changes
  useEffect(() => {
    if (wordsToMatchData.length > 0) {
        restartGame();
    }
  }, [wordsToMatchData, restartGame]);

  const checkGameCompletion = (newState) => {
      const allDropped = Object.values(newState).every(item => item !== null);
      if (allDropped) {
          // Check for correct matches
          const finalScore = Object.entries(newState).reduce((acc, [targetId, droppedItem]) => {
              if (droppedItem && targetId === droppedItem.id) {
                  return acc + 1;
              }
              return acc;
          }, 0);
          setScore(finalScore);
          setIsGameComplete(true);
      }
  };

  function handleDragEnd(event) {
    const { active, over } = event;
    const draggedImageId = active.id;
    const targetWordId = over?.id;

    if (!targetWordId) {
        return;
    }
    
    const draggedItem = wordsToMatchData.find(word => word.english === draggedImageId);
    
    setDroppableState(prevDroppableState => {
        const newDroppableState = { ...prevDroppableState };
        let oldDroppedItemId = null;

        // 1. Check if the target is already occupied
        if (newDroppableState[targetWordId]) {
            oldDroppedItemId = newDroppableState[targetWordId].id;
        }

        // 2. Place the new item in the target slot
        newDroppableState[targetWordId] = { 
            id: draggedImageId, // Draggable ID (English word, e.g., 'Lion')
            imageFileName: draggedItem.image 
        };
        
        // Use a functional update for draggableState
        setDraggableState(prevDraggableState => {
            const newDraggableState = { ...prevDraggableState };
            
            // 3. Hide the dragged item from the source list
            newDraggableState[draggedImageId] = true;

            // 4. If an item was displaced, make it visible again in the source list
            if (oldDroppedItemId) {
                newDraggableState[oldDroppedItemId] = false;
            }
            return newDraggableState;
        });

        // 5. Check if the game is complete
        checkGameCompletion(newDroppableState);

        return newDroppableState;
    });
  }
  
  const handleStartLetterChange = (event) => {
    setStartLetter(event.target.value);
  }

  const handleMaxLetterChange = (event) => {
    setSelectedLetter(event.target.value);
  }

  const totalPossibleScore = wordsToMatchData.length;

  return (
    <DndContext onDragEnd={handleDragEnd}>
        <Typography variant="h4" gutterBottom style={{textAlign: 'center', margin: '20px'}}>
            Match the Image to the Arabic Word 
        </Typography>
        <div style={{textAlign: 'center', marginBottom: '20px'}}>
            <Grid container justifyContent="center" spacing={2} alignItems="center">
                
                {/* MIN LETTER DROPDOWN */}
                <Grid item>
                    <Typography component="span" variant="h6">Min Letter for Pool: </Typography>
                </Grid>
                <Grid item>
                    <Select
                        value={startLetter}
                        onChange={handleStartLetterChange}
                        style={{minWidth: 100, fontSize: '1.5rem'}}
                    >
                        {arabicWords.map((item) => (
                            <MenuItem key={`min-${item.arabic}`} value={item.arabic}>
                                <span className="arabic-font">{item.arabic}</span>
                            </MenuItem>
                        ))}
                    </Select>
                </Grid>

                {/* MAX LETTER DROPDOWN */}
                <Grid item>
                    <Typography component="span" variant="h6">Max Letter for Pool: </Typography>
                </Grid>
                <Grid item>
                    <Select
                        value={selectedLetter}
                        onChange={handleMaxLetterChange}
                        style={{minWidth: 100, fontSize: '1.5rem'}}
                    >
                        {arabicWords.map((item) => (
                            <MenuItem key={`max-${item.arabic}`} value={item.arabic}>
                                <span className="arabic-font">{item.arabic}</span>
                            </MenuItem>
                        ))}
                    </Select>
                </Grid>
            </Grid>
            
            <Typography variant="h6" style={{marginTop: '10px'}}>Score: {score} / {totalPossibleScore}</Typography>
            {(isGameComplete || Object.values(droppableState).some(item => item !== null)) && (
                <Button variant="contained" color="primary" onClick={restartGame} style={{marginTop: '10px'}}>
                    Restart Exercise
                </Button>
            )}
            {isGameComplete && (
                <Typography variant="h5" style={{marginTop: '10px', color: score === totalPossibleScore ? 'green' : 'red'}}>
                    {score === totalPossibleScore ? "Perfect Match! 🎉" : `Game Over! Your score is ${score}. Try Again!`}
                </Typography>
            )}
        </div>
        
        {/* Responsive Grid Layout */}
        <DndContext onDragEnd={handleDragEnd}>
            <Grid container justifyContent="space-around" spacing={4}>
                
                {/* Draggable Images (Source) */}
                <Grid item xs={12} md={5}>
                    <Typography variant="h5" style={{textAlign: 'center'}}>Drag this picture</Typography>
                    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                        {wordsToMatchData.map((word) => (
                            <WordImage 
                                key={word.english}
                                id={word.english} 
                                imageFileName={word.image}
                                isDropped={draggableState[word.english]}
                            />
                        ))}
                    </div>
                </Grid>

                {/* Droppable Words (Target) - Rendered in random order */}
                <Grid item xs={12} md={5}>
                    <Typography variant="h5" style={{textAlign: 'center'}}>Arabic Words (Drop Here)</Typography>
                    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                        {wordsOrder.map((word) => (
                            <WordTitle
                                key={word.english}
                                id={word.english} 
                                word={word.arabic} // Pass the Arabic word for display
                                droppedItem={droppableState[word.english]}
                            />
                        ))}
                    </div>
                </Grid>
            </Grid>
        </DndContext>
    </DndContext>
  );
}

export default ExerciseOne;