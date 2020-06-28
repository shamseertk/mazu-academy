import React from 'react';
import { MobileStepper, Button } from '@material-ui/core';

class BookNavigation extends React.Component {
  render() {
    const { stepperSteps, activeStep, clickNextButton, clickPrevButton } = this.props;
    return <MobileStepper
      steps={stepperSteps}
      position="static"
      variant="text"
      activeStep={activeStep}
      nextButton={
        <Button
          onClick={clickNextButton}
          >Next</Button>
      }
      backButton={
        <Button
          onClick={clickPrevButton}
          >Prev</Button>
      }
      />
  }
}

export default BookNavigation;
