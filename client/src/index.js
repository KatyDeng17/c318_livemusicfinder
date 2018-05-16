///front end index.js
import '../node_modules/bootstrap3/dist/css/bootstrap.css';
import '../node_modules/bootstrap3/dist/css/bootstrap-theme.css';
// import '../node_modules/font-awesome/css/font-awesome.min.css'; 

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
