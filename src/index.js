import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import ShopAPIProvider from './API/ShopApi';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ShopAPIProvider>
    <App />
  </ShopAPIProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// reportWebVitals();
