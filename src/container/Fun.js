import React from 'react';
import FunLevelOne from '../component/FunLevelOne';
import SubNav from '../component/common/SubNav';

import PageTitle from '../component/common/PageTitle';

function Fun() {
  return <React.Fragment>
    <SubNav />
    <div className="container">
      <PageTitle pageTitle="Level1 &#8608; Fun" />
      <FunLevelOne />
    </div>
  </React.Fragment>
}

export default Fun;
