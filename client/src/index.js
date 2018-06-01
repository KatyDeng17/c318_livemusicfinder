//npm install --save react-router-dom
//npm install --save bootstrap3
//npm run dev
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import SecondPageComponent from './components/event_details';
// import { BrowserRouter as Router } from 'react-router-dom';
import '../node_modules/bootstrap3/dist/css/bootstrap.css';
import Footer from './components/footer';
import Menu from './components/menu';






ReactDOM.render(
    <App />,
    document.getElementById('root')
);
