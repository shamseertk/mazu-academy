import React from 'react';
import VowelQuestion from '../component/VowelQuestion';
import SubNav from '../component/common/SubNav';

import PageTitle from '../component/common/PageTitle';

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
    return <React.Fragment>
      <SubNav />
      <div className="container">
        <PageTitle pageTitle="Level1 &#8608; Vowel Practice" />
        <VowelQuestion />
      </div>
    </React.Fragment>
  }
}

export default VowelPractice;
