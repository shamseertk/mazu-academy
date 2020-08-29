import React from 'react';
import VowelQuestion from '../component/VowelQuestion';
import SubNav from '../component/common/SubNav';

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
      <SubNav pageTitle="Level1 &#8608; Vowel Practice" />
      <div className="container">
        <VowelQuestion />
      </div>
    </React.Fragment>
  }
}

export default VowelPractice;
