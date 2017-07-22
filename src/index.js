import React from 'react';
import ReactDOM  from 'react-dom';
// import {Router, browserHistory} from 'react-router';
import { BrowserRouter } from 'react-router-dom'
import App from './Components/App'
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



ReactDOM.render(<BrowserRouter><App /></BrowserRouter>,
  document.getElementById('app')
);
