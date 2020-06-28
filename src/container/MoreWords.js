import React from 'react';
import { alphabets, LEARNED_SO_FAR } from '../utils/alphabets';
import { arabicWords } from '../utils/words';
import { withStyles } from '@material-ui/core';
import SubNav from '../component/common/SubNav';
import BookNavigation from '../component/common/BookNavigation';
import WordPage from '../component/WordPage';

const style = () => ({
  bookWrapper: {
    width: '900px',
    selfAlign: 'center',
    margin: 'auto',
  },
  '@media screen and (max-width: 900px)': {
    bookWrapper: {
      width: '100%',
      selfAlign: 'center',
      margin: 'auto',
    },
  }
});

class Words extends React.Component {
  constructor(props) {
    super(props);
    const alphabetsUpdated = alphabets.slice(0, LEARNED_SO_FAR);
    this.state = {
      alphabetsUpdated,
      activeStep: 14,
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
    const { alphabetsUpdated, activeStep } = this.state;
    const { classes } = this.props;
    return <React.Fragment>
      <SubNav pageTitle="Level2 &#8608; More Words" />
      <div className="container">
        <div className={classes.bookWrapper}>
          <BookNavigation
            stepperSteps={alphabetsUpdated.length}
            activeStep={activeStep}
            clickNextButton={this.nextPage}
            clickPrevButton={this.prevPage}
            />
        </div>
        <div style={{
          textAlign: 'center',
          fontSize: '2.5em',
          color: 'brown'
          }}>{arabicWords[activeStep].arabic}</div>
        <WordPage
          letter={arabicWords[activeStep]}
          />
      </div>
    </React.Fragment>
  }
}

export default withStyles(style)(Words);
