import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import  {BrowserRouter as Router, Route } from  'react-router-dom';
// import '../static/scss/main.scss';
import $ from 'jquery';  
import 'popper.js';
import 'bootstrap/dist/css/bootstrap.css'
// import App from '/components/App';
import App from './components/App.jsx';
import Login from './components/Login.jsx';
import Registration from './components/Registration.jsx';
// var routes = ReactRouter.routes;
// var history = ReactRouter.BrowserRouter;



const contentNode = document.getElementById('contents');
ReactDOM.render(
  <App />, contentNode
);    // Render the component inside the content Node

if (module.hot) {
  module.hot.accept();
}
