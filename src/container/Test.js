import React from 'react';
import SubNav from '../component/common/SubNav';
import TestAlphabets from '../component/TestAlphabets';
import { Tabs, Tab } from '@material-ui/core';
import ShortVowelTest from '../component/ShortVowelTest';
import LongVowelTest from '../component/LongVowelTest';

class TestContainer extends React.Component{
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
      <SubNav pageTitle="Level1 &#8608; Test" />
      <div className="container">
        <div className="instruction">This is for Teacher or Parents, to examine the students/their kids.
          Page displays some random letters and see if they can answer it. </div>
        <Tabs
          style={{backgroundColor: '#106686', color: 'white'}}
          scrollButtons="auto"
          variant="scrollable"
          value={selectedTab}
          onChange={this.selectTab}
          >
          <Tab label="Alphabets" value="alphabets" />
          <Tab label="Short Vowels" value="short" />
          <Tab label="Long Vowels" value="long" />
          <Tab label="Shadh Vowels" value="shadh" />
        </Tabs>
        {selectedTab === 'alphabets' && <TestAlphabets />}
        {selectedTab === 'short' && <ShortVowelTest />}
        {selectedTab === 'long' && <LongVowelTest />}
      </div>
    </React.Fragment>
  }
}

export default TestContainer;
