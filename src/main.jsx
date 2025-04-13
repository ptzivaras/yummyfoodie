import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import React from 'react';
import ReactDOM from 'react-dom/client';  // Import ReactDOM
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);  // Now ReactDOM is defined
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

//powershell -ExecutionPolicy ByPass npm run dev
//powershell -ExecutionPolicy ByPass
