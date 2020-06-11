import React from 'react';
import Header from '../component/common/Header';
import Test from '../component/Test';

class TestContainer extends React.Component{
  render() {
    return <React.Fragment>
      <Header pageTitle="Test" />
      <div className="container">
        <Test />
      </div>
    </React.Fragment>
  }
}

export default TestContainer;
