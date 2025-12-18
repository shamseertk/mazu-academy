import React from 'react';
import Header from './component/common/Header';
import Router from './router';
import { ThemeContextProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <Header />
      <Router />
      <div className="footer"><a href="mailto:funandlearnapp@gmail.com">Send us your feedback</a></div>
    </ThemeContextProvider>
  );
}

export default App;
