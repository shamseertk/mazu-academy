import React from 'react';
import SubNav from '../../component/common/SubNav';
import SimpleTabs from '../../component/common/SimpleTabs';
import ExcerciseOne from '../../component/words/ExcerciseOne';

class MoreWordTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'excercise1',
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
    <SubNav pageTitle="Level1 &#8608; More Words Tests" />
    <div className="container">
      <SimpleTabs
        selectedTab={selectedTab}
        handleChangeTab={this.changeTab}
        tabsInfo={[{
          label: 'Excercise One',
          value: 'excercise1',
          component: <ExcerciseOne />
        }]}
        />
    </div>
    </React.Fragment>
  }
}

export default MoreWordTest;
