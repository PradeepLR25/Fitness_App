import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';
// import '../static/scss/main.scss';
import 'jquery';  
import 'popper.js';

import 'bootstrap/dist/js/bootstrap'

import 'bootstrap/dist/css/bootstrap.css'
import Login from './Login.jsx';
import Registration from './Registration.jsx';
import Header from './Header.jsx';
import MyDashboard from './MyDashboard.jsx';
import Diet101 from './Diet101.jsx';
import Food from './Food.jsx';

// var Router = ReactRouter.BrowserRouter;
// var Route = ReactRouter.Route;



class App extends React.Component {
  render() {
    return (
     <Router>
        
        <div>
        <div>
          <h1> <Header /></h1>
        </div>
        <div>
          <Route exact path = '/' component={Login} />
          <Route path='/Login' component={Login}/>
          <Route path = '/Registration' component={Registration} />
          <Route path='/MyDashboard' component={MyDashboard} />
          <Route path='/Diet101' component={Diet101} />
          <Route path='/Food' component={Food} />
          </div>
        </div>
     </Router>

    );
  }
}

module.exports = App;