import React from 'react';
import SubNav from '../../component/common/SubNav';
import SimpleTabs from '../../component/common/SimpleTabs';
import MonthExerciseTwo from '../../component/month/MonthExerciseTwo';
import MonthLearn from '../../component/month/MonthLearn';
import MonthExercise from '../../component/month/MonthExercise';

class Months extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'months',
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
    <SubNav pageTitle="Level2 &#8608; Months" />
    <div className="container">
      <SimpleTabs
        selectedTab={selectedTab}
        handleChangeTab={this.changeTab}
        tabsInfo={[{
          label: 'Months',
          value: 'months',
          component: <MonthLearn />
        }, {
          label: 'Exercise',
          value: 'exercise',
          component: <MonthExercise />
        }, {
          label: 'Exercise Two',
          value: 'exercise2',
          component: <MonthExerciseTwo />
        },]}
        />
    </div>
    </React.Fragment>
  }
}

export default Months;
