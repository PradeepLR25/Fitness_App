import React from 'react';
import 'whatwg-fetch';
import 'bootstrap/dist/css/bootstrap.css'
import regStyles from '../../static/Registration.css';
import classnames from 'classnames';
import { browserHistory } from 'react-router';





export default class Registration extends React.Component {


  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      userFirstName: '',
      userLastName: '',
      password: '',
      cnfPassword: '',
      Institution: '',
      email: '',
      title: '',
      created: '',
      errors: {},
    }
  }

createUser(newUser){
  fetch('/userCreate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newUser)
  }).then((res)=> res.json()).then(data=>{console.log(data); this.setState({errors: data})}
  
  )
  // .then(this.welcomePage()).catch(err =>{
  //   console.log("error in registration" + err.message);
  
}


onChange(e){
  this.setState({[e.target.name] : e.target.value})
}


handleSubmit(e){
  e.preventDefault();
  // this.setState({errors: {} });
  var form=document.forms.addUser;
  this.state.created = new Date();
  this.createUser(
    this.state
    // userFirstName: form.userFirstName.value,
    // userLastName: form.userLastName.value,
    // password: form.password.value,
    // Institution: form.Institution.value,
    // email: form.email.value,
    // title: form.title.value,
    // created: new Date(),
  );
  
  // form.userFirstName.value = "First Name";
  // form.userLastName.value = "Last Name";

}

welcomePage() {
  fetch('/welcome', {

  })
}

render() {
  const {errors} = this.state;
  return <div className="container-fluid">
      <div className="row">
        <div className="col-md-4 offset-4">
        
          <form className="form-border" name="addUser" onSubmit={this.handleSubmit}>
            
            <div className="form-group">
              <label className="col-form-label label-col label-col">First Name:{errors.userFirstName && <span className="help-block">
              {errors.userFirstName}
            </span>}</label>

              <input className={classnames('form-group form-control form-control-sm', {'is-invalid': errors.userFirstName})} type="text" value={this.state.userFirstName} onChange={this.onChange} name="userFirstName" />

              
            </div>
            <div className="form-group">
              <label className="col-form-label label-col">Last Name:</label>
              <input className={classnames('form-group form-control form-control-sm', {'is-invalid': errors.userLastName})} type="text" value={this.state.userLastName} onChange={this.onChange} name="userLastName" />
              {errors.userLastName && <span className="help-block">
              {errors.userLastName}
            </span>}
              </div>
            <div className="form-group">
              <label className="col-form-label label-col">Password:</label>
              <input className={classnames('form-group form-control form-control-sm', {'is-invalid': errors.password})} type="password" value={this.state.password} onChange={this.onChange} name="password" />
              {errors.password && <span className="help-block">
              {errors.password}
            </span>}
              </div>
            <div className="form-group">
              <label className="col-form-label label-col">Confirm Password:</label>
              <input className={classnames('form-group form-control form-control-sm', {'is-invalid': errors.cnfPassword})} type="password" value={this.state.cnfPassword} onChange={this.onChange} name="cnfPassword" />
              {errors.cnfPassword && <span className="help-block">
              {errors.cnfPassword}
            </span>}
              </div>
            <div className="form-group">
              <label className="col-form-label label-col">Institution:</label>
              <input className={classnames('form-group form-control form-control-sm', {'is-invalid': errors.Institution})} type="text" value={this.state.Institution} onChange={this.onChange} name="Institution" />
              {errors.Institution && <span className="help-block">
              {errors.Institution}
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
              <label className="col-form-label label-col">Group Title:</label>
              <input className={classnames('form-group form-control form-control-sm', {'is-invalid': errors.title})} type="text" value={this.state.title} onChange={this.onChange} name="title" />
              {errors.title && <span className="help-block">
              {errors.title}
            </span>}
              </div>
            <div className="form-group">
              
              <button className="btn btn-primary btn-lg btn-block">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>;
}




}



// const UserSchema = mongoose.Schema ({
//     userId: String,
//     userFirstName: String,
//     userLastName: String,
//     password: String,
//     Institution: String,
//     email: String,
//     title: String,
//     created: Date
// });
