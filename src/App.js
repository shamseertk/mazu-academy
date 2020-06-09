import React from 'react';
import Alphabet from './container/Alphabet';
import Header from './component/common/Header';

function App() {
  return <React.Fragment>
    <Header pageTitle="Reading Game" />
    <Alphabet />
  </React.Fragment>
}

export default App;
