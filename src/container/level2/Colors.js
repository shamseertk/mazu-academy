import React from 'react';
import SubNav from '../../component/common/SubNav';
import SimpleTabs from '../../component/common/SimpleTabs';
import ColorLearn from '../../component/color/ColorLearn';
import ColorExercise from '../../component/color/ColorExercise';
import ColorExerciseTwo from '../../component/color/ColorExerciseTwo';

import PageTitle from '../../component/common/PageTitle';

class Colors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'color',
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
        <PageTitle pageTitle="Level2 &#8608; Colors" />
        <SimpleTabs
          selectedTab={selectedTab}
          handleChangeTab={this.changeTab}
          tabsInfo={[{
            label: 'Colors',
            value: 'color',
            component: <ColorLearn />
          }, {
            label: 'Exercise',
            value: 'exercise',
            component: <ColorExercise />
          }, {
            label: 'Exercise Two',
            value: 'exercise2',
            component: <ColorExerciseTwo />
          },]}
        />
      </div>
    </React.Fragment>
  }
}

export default Colors;
