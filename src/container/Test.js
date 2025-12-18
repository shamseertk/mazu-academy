import React from 'react';
import SubNav from '../component/common/SubNav';
import TestAlphabets from '../component/TestAlphabets';
import ShortVowelTest from '../component/ShortVowelTest';
import LongVowelTest from '../component/LongVowelTest';
import SimpleTabs from '../component/common/SimpleTabs';

import PageTitle from '../component/common/PageTitle';

class TestContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'alphabets',
    }
  }
  selectTab = (evt, val) => {
    this.setState({
      selectedTab: val,
    });
  }
  render() {
    const { selectedTab } = this.state;
    return <React.Fragment>
      <SubNav />
      <div className="container">
        <PageTitle pageTitle="Level1 &#8608; Test" />
        <div className="instruction">This is for Teacher or Parents, to examine the students/their kids.
          Page displays some random letters and see if they can answer it. </div>
        <SimpleTabs
          selectedTab={selectedTab}
          handleChangeTab={this.selectTab}
          tabsInfo={[{
            label: 'Alphabets',
            value: 'alphabets',
            component: <TestAlphabets />
          }, {
            label: 'Short Vowels',
            value: 'short',
            component: <ShortVowelTest />
          }, {
            label: 'Long Vowels',
            value: 'long',
            component: <LongVowelTest />
          }]}
        />
      </div>
    </React.Fragment>
  }
}

export default TestContainer;
