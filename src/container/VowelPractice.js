import React from 'react';
import VowelQuestion from '../component/VowelQuestion';
import SubNav from '../component/common/SubNav';
import { Tabs, Tab } from '@material-ui/core';

class VowelPractice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'short',
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
      <SubNav pageTitle="Level1 &#8608; Vowel Practice" />
      <div className="container">
        <Tabs
          style={{backgroundColor: '#106686', color: 'white'}}
          scrollButtons="auto"
          variant="scrollable"
          value={selectedTab}
          onChange={this.selectTab}
          >
          <Tab label="Short Vowel" value="short" />
          {/* <Tab label="Other Vowels" value="other" /> */}
        </Tabs>
        {selectedTab === 'short' && <VowelQuestion />}
        
      </div>
    </React.Fragment>
  }
}

export default VowelPractice;
