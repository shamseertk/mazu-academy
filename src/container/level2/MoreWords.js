import React from 'react';
import SubNav from '../../component/common/SubNav';
import SimpleTabs from '../../component/common/SimpleTabs';
import ExerciseOne from '../../component/words/ExerciseOne';
import MoreWordsComponent from '../../component/words/MoreWordsComponent';
import ExerciseTwo from '../../component/words/ExerciseTwo';

class MoreWords extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'morewords',
    };
  }
  changeTab = (evt, val) => {
    this.setState({
      selectedTab: val,
    });
  }
  render() {
    const { selectedTab } = this.state;
    return <React.Fragment>
    <SubNav pageTitle="Level2 &#8608; More Words" />
    <div className="container">
      <SimpleTabs
        selectedTab={selectedTab}
        handleChangeTab={this.changeTab}
        tabsInfo={[{
          label: 'More Words',
          value: 'morewords',
          component: <MoreWordsComponent />
        }, {
          label: 'Exercise',
          value: 'exercise',
          component: <ExerciseOne />
        }, {
          label: 'Exercise 2',
          value: 'exercise2',
          component: <ExerciseTwo />
        }]}
        />
    </div>
    </React.Fragment>
  }
}

export default MoreWords;
