import React from 'react';
import SubNav from '../component/common/SubNav';
import Test from '../component/Test';

class TestContainer extends React.Component{
  render() {
    return <React.Fragment>
      <SubNav pageTitle="Test" />
      <div className="container">
        <Test />
      </div>
    </React.Fragment>
  }
}

export default TestContainer;
