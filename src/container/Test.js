import React from 'react';
import SubNav from '../component/common/SubNav';
import Test from '../component/Test';

class TestContainer extends React.Component{
  render() {
    return <React.Fragment>
      <SubNav pageTitle="Level1 &#8608; Test" />
      <div className="container">
        <Test />
      </div>
    </React.Fragment>
  }
}

export default TestContainer;
