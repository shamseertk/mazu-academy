import React from 'react';
import './index.css';
import ReactDOM from "react-dom/client";
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>);
serviceWorker.unregister();
