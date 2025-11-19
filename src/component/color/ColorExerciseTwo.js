import React from 'react';
import {
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
} from '@mui/material';

import { EmojiEmotions, MoodBad } from '@mui/icons-material';
import _ from 'lodash';
import TopPanel from '../common/Exercise/TopPanel';
import Question from '../common/Exercise/Question';
import AnswerOptions from '../common/Exercise/AnswerOptions';
import { QUESTION_TYPES, generateRandomNumber, pickRandomFromArray, generateQuestionOptions } from '../../utils/utils';
import { arabicColors } from '../../utils/colors';

class NumberExerciseTwo extends React.Component{
  constructor(props) {
    super(props);
    const initialValues = this.initiateValues();
    this.state = {
      openResultAlert: false,
      ...initialValues,
    };
  }
  initiateValues = () => {
    const availableWords = JSON.parse(JSON.stringify(arabicColors));
    const originalAvailWords = JSON.parse(JSON.stringify(arabicColors));
    const maxQuestions = availableWords.length;
    const questionDetailObj = this.generateQuestionDetails(availableWords, originalAvailWords);
    return {
      originalAvailWords,
      maxQuestions,
      right: 0,
      wrong: 0,
      displayFinalResult: false,
      questionNumber: 1,
      selectedLetter: 'All',
      ...questionDetailObj,
    }
  }
  generateQuestionDetails = (passWords, originalAvailWords) => {
    const questionType = generateRandomNumber(2) > 0 ? QUESTION_TYPES.MEANING : QUESTION_TYPES.WORD;
    let questionText, optionLabel, optionValue;
    const selectedQWord = pickRandomFromArray(passWords);
    if (questionType === QUESTION_TYPES.MEANING) {
      questionText = <span> What is the meaning of <span style={{fontSize: '2em'}}>{selectedQWord.pickedObj.arabic}</span> ?</span>;
      optionLabel = 'english';
      optionValue = 'english';
    } else {
      questionText = <span> What is the arabic word of {selectedQWord.pickedObj.english} ?</span>;
      optionLabel = 'arabic';
      optionValue = 'arabic';
    }
    const answerOptions = generateQuestionOptions(originalAvailWords, selectedQWord.pickedObj, optionValue);
    passWords.splice(selectedQWord.pickedIndex, 1);
    return {
      questionText,
      optionLabel,
      optionValue,
      availableWords: passWords,
      questionWord: selectedQWord.pickedObj,
      answerOptions,
    }
  }
  handleNextClick = () => {
    this.validateAnswer();
  }
  restart = () => {
    const initialValues = this.initiateValues();
    this.setState({
      openResultAlert: false,
      ...initialValues,
    });
  }
  validateAnswer = () => {
    const { answer, questionWord, optionValue } = this.state;
    let { right, wrong } = this.state;
    const result = {};
    if (answer === questionWord[optionValue]) {
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
    })
  }
  handleCloseAlert = () => {
    const { availableWords, questionNumber, originalAvailWords, maxQuestions } = this.state;
    const newQstnNo = questionNumber + 1;
    if (questionNumber < maxQuestions) {
      const questionDetailObj = this.generateQuestionDetails(availableWords, originalAvailWords);
      
      this.setState({
        ...questionDetailObj,
      });
    } 
    this.setState({
      questionNumber: newQstnNo,
      openResultAlert: false,
      answer: null,
    });
  }
  handleAnswerOptionClick = (event) => {
    this.setState({
      answer: event.target.value,
    })
  }
  render() {
    const { openResultAlert, questionNumber, displayFinalResult, maxQuestions, questionWord,
      right, wrong, answerOptions, result, questionText, optionLabel, optionValue, answer } = this.state;
    return <React.Fragment>
      <div className="instruction"> Choose the right answer from the options.</div>
      <TopPanel
        rightAnswers={right}
        wrongAnswers={wrong}
        maxQuestions={maxQuestions}
        handleNextClick={questionNumber <= maxQuestions ? this.handleNextClick : null}
        restartQuiz={this.restart}>
      </TopPanel>
      <Question
        questionNumber={questionNumber}
        questionText={questionText}
        displayFinalContent={displayFinalResult}
        />
      <AnswerOptions
        options={answerOptions}
        optionLabel={optionLabel}
        optionValue={optionValue}
        classes={{label: optionLabel === 'arabic' ? {fontSize: '24px'} : null}}
        handleAnswerOptionClick={this.handleAnswerOptionClick}
        />
      <Dialog
        open={openResultAlert}
        onClose={this.handleCloseAlert}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        >
        <DialogTitle id="alert-dialog-title">
          {_.get(result, ['status']) === 'right' 
            ? <React.Fragment><Typography component="div"
                style={{backgroundColor: 'green',
                textAlign: 'center', color: 'white', fontSize: '1.5em'}}>Correct<EmojiEmotions />
                </Typography>
              </React.Fragment>
            : <Typography component="div"
                style={{backgroundColor: 'red', textAlign: 'center', color: 'white', fontSize: '1.5em'}}>Wrong<MoodBad />
                </Typography>}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" className="result">
            The correct answer is <span className="resultHighlight"> {_.get(questionWord, [optionLabel])}
            </span><br />
            You have selected <span className="resultHighlight"> {answer} </span>
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

export default NumberExerciseTwo;
