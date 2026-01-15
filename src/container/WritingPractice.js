import React from 'react';
import SubNav from '../component/common/SubNav';
import WritingPad from '../component/WritingPad';

import PageTitle from '../component/common/PageTitle';

import { useThemeContext } from '../contexts/ThemeContext';

function WritingPractice() {
  const { mode } = useThemeContext();
  return <React.Fragment>
    <SubNav />
    <div className="container">
      <PageTitle pageTitle="Level1 &#8608; Practice Writing" />
      <WritingPad themeMode={mode} />
    </div>
  </React.Fragment>
}

export default WritingPractice;
