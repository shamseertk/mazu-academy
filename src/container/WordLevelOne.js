import React from 'react';
import { alphabets, LEARNED_SO_FAR } from '../utils/alphabets';
import WordTile from '../component/WordTile';
import { MobileStepper, Button } from '@material-ui/core';
import SubNav from '../component/common/SubNav';

class WordLevelOne extends React.Component {
  constructor(props) {
    super(props);
    const alphabetsUpdated = alphabets.slice(0, LEARNED_SO_FAR);
    this.state = {
      alphabetsUpdated,
      activeStep: 0,
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
  render() {
    const { alphabetsUpdated, activeStep } = this.state;
    return <React.Fragment>
      <SubNav pageTitle="Level1 &#8608; All Alphabets" />
      <div className="container">
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
          <WordTile letter={alphabetsUpdated[activeStep]} />
      </div>
    </React.Fragment>
  }
}

export default WordLevelOne;
