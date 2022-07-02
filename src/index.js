import React from 'react';
import ReactDOM from 'react-dom/client';

import { GlobalStyle } from './GlobalStyle';
import App from './App';
import 'swiper/css/bundle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
