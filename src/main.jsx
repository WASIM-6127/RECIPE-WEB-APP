// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import {BrowserRouter} from "react-router-dom"
// ReactDOM.render(
//    < BrowserRouter>
//     <App />
//     </BrowserRouter>
//     ,document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or end to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
