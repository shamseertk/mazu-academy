import React from 'react';
import { alphabets, LEARNED_SO_FAR } from '../../utils/alphabets';
import WordTile from '../WordTile';
import { MobileStepper, Button, Switch, FormControlLabel } from '@mui/material';


class WordLevelOne extends React.Component {
  constructor(props) {
    super(props);
    const alphabetsUpdated = alphabets.slice(0, LEARNED_SO_FAR);
    this.state = {
      alphabetsUpdated,
      activeStep: 0,
      enableJoinedWords: true,
    };
  }

  nextPage = () => {
    const { activeStep, alphabetsUpdated } = this.state;
    if(alphabetsUpdated.length - 1 === activeStep) {
      this.setState({
        activeStep: 0,
      });
    } else {
      this.setState({
        activeStep: activeStep + 1,
      });
    }
  }

  prevPage = () => {
    const { activeStep, alphabetsUpdated } = this.state;
    if(activeStep === 0) {
      this.setState({
        activeStep: alphabetsUpdated.length - 1,
      })
    } else {
      this.setState({
        activeStep: activeStep - 1,
      });
    }
  }
  handleChangeJoinedWords = (evt) => {
    this.setState({
      enableJoinedWords: evt.target.checked,
    });
  }
  
  render() {
    const { alphabetsUpdated, activeStep, enableJoinedWords } = this.state;
    return <React.Fragment>
      <div>
        <FormControlLabel
          control={<Switch
            checked={enableJoinedWords}
            onChange={this.handleChangeJoinedWords}
            name="checkedB"
            color="primary" />}
          label="Joined Words"
          labelPlacement="start"
          />
        <div className="bookWrapper">
          <MobileStepper
            steps={alphabetsUpdated.length}
            position="static"
            variant="text"
            activeStep={activeStep}
            nextButton={
              <Button
                onClick={this.nextPage}
                >Next</Button>
            }
            backButton={
              <Button
                onClick={this.prevPage}
                >Prev</Button>
            }
            />
            <WordTile
              letter={alphabetsUpdated[activeStep]}
              enableJoinedWords={enableJoinedWords}
              />
        </div>
      </div>
    </React.Fragment>
  }
}

export default WordLevelOne;
