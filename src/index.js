import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppPagination from './AppPagination';
import Signup from './Signup';
import App1 from './App1';
import Nav from './Nav';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App1/>

  // <Signup/>
  // <AppPagination/>
     
 
    

    
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
