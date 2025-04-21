import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import React from 'react';
import ReactDOM from 'react-dom/client';  // Import ReactDOM
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux'
// import { store } from './app/store'
import store from './app/store';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);  // Now ReactDOM is defined
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

//States: Menu State, Filter State, Cart State, 

//powershell -ExecutionPolicy ByPass npm run dev
//powershell -ExecutionPolicy ByPass
