import React from 'react';
import SubNav from '../../component/common/SubNav';
import SimpleTabs from '../../component/common/SimpleTabs';
import FamilyLearn from '../../component/family/FamilyLearn';
import FamilyExercise from '../../component/family/FamilyExercise';
import FamilyExerciseTwo from '../../component/family/FamilyExerciseTwo';

import PageTitle from '../../component/common/PageTitle';

class Family extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'family',
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
        <PageTitle pageTitle="Level2 &#8608; Family" />
        <SimpleTabs
          selectedTab={selectedTab}
          handleChangeTab={this.changeTab}
          tabsInfo={[{
            label: 'Family',
            value: 'family',
            component: <FamilyLearn />
          }, {
            label: 'Exercise',
            value: 'exercise',
            component: <FamilyExercise />
          }, {
            label: 'Exercise Two',
            value: 'exercise2',
            component: <FamilyExerciseTwo />
          },]}
        />
      </div>
    </React.Fragment>
  }
}

export default Family;
