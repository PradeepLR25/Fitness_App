import React from 'react';
import 'whatwg-fetch';
import 'bootstrap/dist/css/bootstrap.css'
import regStyles from '../../static/Login.css';
import classnames from 'classnames';
import  { Link } from 'react-router-dom';
import Modal from 'react-modal';
import Registration from './Registration.jsx';
import Header from './Header.jsx';

export default class Login extends React.Component{


    constructor(props){
        super(props)
        this.state = {
            email: "email",
            password: "password",
            errors: {},
        }
    }

    onChange(e){
        this.setState({[e.target.name] : e.taget.value})
    }

    render(){
        const {errors} = this.state;
        return <div className="container-fluid">
        
          <div className="col-md-4 offset-4">
          
            <form className="form-border" name="addUser" onSubmit={this.handleSubmit}>
              
              
              <div className="form-group">
                <label className="col-form-label label-col">Password:</label>
                <input className={classnames('form-group form-control form-control-sm', 
                {'is-invalid': errors.password})} 
                type="password" value={this.state.password} 
                onChange={this.onChange} name="password" />
                {errors.password && <span className="help-block">
                {errors.password}
              </span>}
                </div>
            
              <div className="form-group">
                <label className="col-form-label label-col">E-mail:</label>
                <input className={classnames('form-group form-control form-control-sm', {'is-invalid': errors.email})} type="email" value={this.state.email} onChange={this.onChange} name="email" />
                {errors.email && <span className="help-block">
                {errors.email}
              </span>}
                </div>
              
              <div className="form-group">
                
                <button className="btn btn-primary btn-sm  btn-block">
                  Login
                </button>
              </div>
            </form>
            <h1>Need to Register?<Link data-dismiss="modal" to="/Registration">click here</Link></h1>

          </div>
        </div>;
    }

}