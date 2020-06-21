import React from 'react';
import SubNav from '../component/common/SubNav';
import WritingPad from '../component/WritingPad';

function WritingPractice() {
  return <React.Fragment>
    <SubNav pageTitle="Level1 &#8608; Practice Writing" />
    <div className="container">
      <WritingPad />
    </div>
  </React.Fragment>
}

export default WritingPractice;
