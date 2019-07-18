import React from 'react';
import 'whatwg-fetch';
import 'jquery';  
import 'popper.js';

import 'bootstrap/dist/css/bootstrap.css'
// import headerStyles from '../../static/headerStyles.css';
import classnames from 'classnames';


import headerStyles from '../../static/Header.css';
import {Link} from 'react-router-dom';

export default class MyDashboard extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div><h1>My Dashboard</h1>


            
            </div>
        );
    }

}