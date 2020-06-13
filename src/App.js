import React from 'react';
import Header from './component/common/Header';
import Router from './router';

function App() {
  return <React.Fragment>
    <Header />
    <Router />
    <div className="footer"><a href="mailto:funandlearnapp@gmail.com">Send us your feedback</a></div>
  </React.Fragment>
}

export default App;
