import React from 'react';
import SubNav from '../../component/common/SubNav';
import SimpleTabs from '../../component/common/SimpleTabs';
import NumberLearn from '../../component/number/NumberLearn';
import NumberExercise from '../../component/number/NumberExercise';
import NumberExerciseTwo from '../../component/number/NumberExerciseTwo';

import PageTitle from '../../component/common/PageTitle';

class Numbers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'number',
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
      <SubNav />
      <div className="container">
        <PageTitle pageTitle="Level2 &#8608; Numbers" />
        <SimpleTabs
          selectedTab={selectedTab}
          handleChangeTab={this.changeTab}
          tabsInfo={[{
            label: 'Numbers',
            value: 'number',
            component: <NumberLearn />
          }, {
            label: 'Exercise',
            value: 'exercise',
            component: <NumberExercise />
          }, {
            label: 'Exercise Two',
            value: 'exercise2',
            component: <NumberExerciseTwo />
          },]}
        />
      </div>
    </React.Fragment>
  }
}

export default Numbers;
