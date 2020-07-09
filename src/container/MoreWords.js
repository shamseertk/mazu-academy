import React from 'react';
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
    this.state = {
      activeStep: 0,
      enableJoinedWords: true,
    };
  }

  nextPage = () => {
    const { activeStep } = this.state;
    if(arabicWords.length - 1 === activeStep) {
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
    const { activeStep } = this.state;
    if(activeStep === 0) {
      this.setState({
        activeStep: arabicWords.length - 1,
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
  onSelectLetter = (evt) => {
    this.setState({
      activeStep: arabicWords.findIndex(alp => alp.arabic === evt.target.value),
    })
  }
  render() {
    const { activeStep } = this.state;
    const { classes } = this.props;
    
    return <React.Fragment>
      <SubNav pageTitle="Level2 &#8608; More Words" />
      <div className="container">
        <div className={classes.bookWrapper}>
          <BookNavigation
            stepperSteps={arabicWords.length}
            activeStep={activeStep}
            clickNextButton={this.nextPage}
            clickPrevButton={this.prevPage}
            selectDropDown={this.onSelectLetter}
            selectOptions={arabicWords}
            selectLabelValue={{label: 'arabic', value: 'arabic'}}
            selectedValue={arabicWords[activeStep].arabic}
            />
        </div>
        <div style={{
          textAlign: 'center',
          fontSize: '2.5em',
          color: 'brown'
          }} className="arabic-font">{arabicWords[activeStep].arabic}</div>
        <WordPage
          letter={arabicWords[activeStep]}
          />
      </div>
    </React.Fragment>
  }
}

export default withStyles(style)(Words);
