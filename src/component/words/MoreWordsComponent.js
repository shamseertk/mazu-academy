import React from 'react';
import { arabicWords } from '../../utils/words';

import BookNavigation from '../common/BookNavigation';
import WordPage from './WordPage';

class MoreWordsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      enableJoinedWords: true,
    };
  }

  nextPage = () => {
    const { activeStep } = this.state;
    if (arabicWords.length - 1 === activeStep) {
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
    if (activeStep === 0) {
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

    return <React.Fragment>
      <div className="bookWrapper">
        <BookNavigation
          stepperSteps={arabicWords.length}
          activeStep={activeStep}
          clickNextButton={this.nextPage}
          clickPrevButton={this.prevPage}
          selectDropDown={this.onSelectLetter}
          selectOptions={arabicWords}
          selectLabelValue={{ label: 'arabic', value: 'arabic' }}
          selectedValue={arabicWords[activeStep].arabic}
        />
      </div>
      <div style={{
        textAlign: 'center',
        fontSize: '2.5em',
        color: 'brown',
        backgroundColor: 'yellow'
      }} className="arabic-font">{arabicWords[activeStep].arabic}</div>
      <WordPage
        letter={arabicWords[activeStep]}
      />
    </React.Fragment>
  }
}

export default MoreWordsComponent;
