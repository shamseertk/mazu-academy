import Header from './component/common/Header';
import Router from './router';
import { ThemeContextProvider } from './contexts/ThemeContext';

import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <ThemeContextProvider>
        <Header />
        <Router />
        <div className="footer"><a href="mailto:funandlearnapp@gmail.com">Send us your feedback</a></div>
      </ThemeContextProvider>
    </HelmetProvider>
  );
}

export default App;
