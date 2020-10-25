import React from 'react';
import { Card, CardContent, withStyles, Button, Typography,
} from '@material-ui/core';
import _ from 'lodash';
import { generateRandomNumber, isCharTashkeel } from '../utils/utils';
import { SkipNext, Info } from '@material-ui/icons';
import WritingArea from './common/WritingArea';
import SimpleDialog from './common/SimpleDialog';

const styles = () => ({
  question: {
    fontSize: '4em',
  },
  hideLetter: {
    textDecoration: 'underline #f00',
    color: '#fff',
    '&::selection': {
      backgroundColor: '#fff',
    }
  },
  questionWrapper: {
    textAlign: 'center',
    width: '100%',
    alignContent: 'center',
  },
  nextButton: {
    backgroundColor: '#0b5a0b',
    margin: '0px 0px 0px 10px',
    color: '#fff',
    whiteSpace: 'nowrap',
    '&:hover': {
      backgroundColor: '#0d4f3b',
      color: '#fff',
    }
  }
});

class ExerciseWordOne extends React.Component {
  constructor(props) {
    super(props);
    const { data } = props;
    const justLetters = data[0].words[0].together.split('').filter(ltr => !isCharTashkeel(ltr));
    this.state = {
      data,
      indexLetter: 0,
      indexMissingLetter: generateRandomNumber(justLetters.length - 1),
      openDialog: false,
      clueImage: data[0].words[0].image,
      score: 0,
      right: 0,
      wrong: 0,
    }
  }
  nextQuestion = () => {
    const { data, indexLetter } = this.state;
    this.setState({
      openDialog: true,
      dialogTitle: 'Result',
      dialogContent: <div className="instruction">The correct answer is <span className="arabic">{data[indexLetter].words[0].together}.</span>
        <br />Check your answer, is it </div>,
      dialogActions: <div><Button onClick={() => this.logResult(1)}>Correct</Button>
        <Button onClick={() => this.logResult(-1)}>Wrong</Button></div>
    });
  }
  logResult = (pointVal) => {
    const { score, right, wrong, indexLetter, data } = this.state;
    let newScore = score;
    let newRight = right;
    let newWrong = wrong;
    if (pointVal === 1) {
      newScore = score + pointVal;
      newRight = right + 1;
    } else {
      newScore = score + pointVal;
      newWrong = right + 1;
    }

    const indexLtr = indexLetter + 1;
    const justLetters = data[indexLtr].words[0].together.split('').filter(ltr => !isCharTashkeel(ltr));
    this.setState({
      indexLetter: indexLtr,
      indexMissingLetter: generateRandomNumber(justLetters.length - 1),
      clueImage: data[indexLtr].words[0].image,
      score: newScore,
      right: newRight,
      wrong: newWrong,
      openDialog: false,
    });
  }
  displayClue = () => {
    const { clueImage } = this.state;
    this.setState({
      openDialog: true,
      dialogTitle: 'Clue',
      dialogContent: <img alt="Clue"
        src={require(`../images/words/${clueImage}`)}
        width="100%" />,
    })
  }
  closeDialog = () => {
    this.setState({
      openDialog: false,
    })
  }
  render() {
    const { data, indexLetter, indexMissingLetter, dialogContent, openDialog, dialogTitle,
      dialogActions, right, wrong } = this.state;
    const { classes } = this.props;
    let wordIndex = -1;
    return <React.Fragment>
      <Card className={classes.questionWrapper}>
        <CardContent className={`${classes.question}  arabic-font`}>
          <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
          <Typography component="h1">
             Question {indexLetter + 1}. Identify the word, fill in the blank.&nbsp;&nbsp;&nbsp;</Typography>
          <div style={{border: '1px solid gray', padding: '5px 5px 0px 5px'}}>
            {_.map(data[indexLetter].words[0].together, word => {
              if (!isCharTashkeel(word)) {
                wordIndex++;
              }
              return (wordIndex === indexMissingLetter) 
                ? <span className={classes.hideLetter} key={word}>ب</span>
                : word
              }
            )}</div>
          <div style={{padding: '0px 0px 0px 25px'}}>
            <Button
              className={classes.nextButton}
              onClick={this.displayClue}
              endIcon={<Info />}
              >Clue</Button>
            {indexLetter < (data.length - 1) && <Button
              className={classes.nextButton}
              onClick={this.nextQuestion}
              endIcon={<SkipNext />}
              >Next Question</Button>}</div>
          </div>
          <div style={{ border: '1px solid #234', fontSize: '.5em' }}>
            Right: {right} Wrong: {wrong}
          </div>
          <WritingArea />
        </CardContent>
      </Card>
      <SimpleDialog
        openDialog={openDialog}
        closeDialog={this.closeDialog}
        title={dialogTitle}
        dialogContent={dialogContent}
        dialogActions={dialogActions}
        />
    </React.Fragment>
  }
}

export default withStyles(styles)(ExerciseWordOne);
