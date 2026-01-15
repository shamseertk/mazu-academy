import React from 'react';
import { alphabets, LEARNED_SO_FAR } from '../utils/alphabets';

import SubNav from '../component/common/SubNav';
import SimpleTabs from '../component/common/SimpleTabs';
import WordLevelOne from '../component/words/WordLevelOne';
import WordOneTest from '../component/words/WordOneTest';
import { useThemeContext } from '../contexts/ThemeContext';
import PageTitle from '../component/common/PageTitle';

const WordsWrapper = (props) => {
  const mode = useThemeContext();

  return <Words {...props} themeMode={mode} />
}

class Words extends React.Component {
  constructor(props) {
    super(props);
    const alphabetsUpdated = alphabets.slice(0, LEARNED_SO_FAR);
    this.state = {
      alphabetsUpdated,
      activeStep: 0,
      enableJoinedWords: false,
      selectedTab: 'word',
    };
  }

  nextPage = () => {
    const { activeStep, alphabetsUpdated } = this.state;
    if (alphabetsUpdated.length - 1 === activeStep) {
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
    if (activeStep === 0) {
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
  changeTab = (event, val) => {
    this.setState({
      selectedTab: val,
    })
  }
  render() {
    const { selectedTab, alphabetsUpdated } = this.state;
    return <React.Fragment>
      <SubNav />
      <div className="container">
        <PageTitle pageTitle="Level2 &#8608; Words-Beginners" />
        <SimpleTabs
          selectedTab={selectedTab}
          tabsInfo={[{
            label: 'Words',
            value: 'word',
            component: <WordLevelOne />
          }, {
            label: 'Exercise',
            value: 'exercise',
            component: <WordOneTest data={alphabetsUpdated} themeMode={this.props.mode} />
          }]}
          handleChangeTab={this.changeTab}
        />
      </div>
    </React.Fragment>
  }
}

export default WordsWrapper;
