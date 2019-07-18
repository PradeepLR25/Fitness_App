import React from 'react';
import 'whatwg-fetch';
import 'jquery';  
import 'popper.js';

import 'bootstrap/dist/css/bootstrap.css'
// import headerStyles from '../../static/headerStyles.css';
import classnames from 'classnames';
import Modal from 'react-modal';
import Login from './Login.jsx';
import Registration from './Registration.jsx';
import headerStyles from '../../static/Header.css';
import {Link} from 'react-router-dom';


const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

export default class Header extends React.Component {
                 constructor(props) {
                   super(props);
                   this.state = { modalIsOpen: false };
                   this.openModal = this.openModal.bind(this);
                   // this.afterOpenModal = this.afterOpenModal.bind(this);
                   this.closeModal = this.closeModal.bind(this);
                 }

                 openModal() {
                   this.setState({ modalIsOpen: true });
                 }

                 closeModal() {
                   this.setState({ modalIsOpen: false });
                 }

                 render() {
                   return <div className="container">
                   
                   <nav className="navbar navbar-expand-lg navbar-light bg-light">
                   
                   <div className="collapse navbar-collapse" id="navbarNavDropdown">
                     <ul className="nav navbar-nav mx-auto w-100 justify-content-left">
                       <li className="nav-item active">
                         <Link to="/MyDashboard" className="nav-link">MyDashboard </Link>
                       </li>
                       <li className="nav-item">
                         <Link to="/Diet101" className="nav-link" href="#">Diet-101</Link>
                       </li>
                    </ul>
                    <ul className="nav navbar-nav mx-auto w-100 justify-content-center">
                       <li className="nav-item dropdown">
                         <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           Fad Diets
                         </a>
                         <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                           <a className="dropdown-item" href="#">Lean Gains</a>
                           <a className="dropdown-item" href="#">Keto</a>
                           <a className="dropdown-item" href="#">South Beach</a>
                         </div>
                       </li>
                       <li className="nav-item">
                       <Link to="/Food" className="nav-link">Food</Link>
                     </li>
                     <li className="nav-item">
                       <a className="nav-link" href="#">Workouts</a>
                     </li>
                     </ul>

                     <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
                     <li className="nav-item">
                     <Link to="/Login" className="nav-link " >Login</Link>
                   </li>
                   <li className="nav-item">
                     <Link to="/Registration" className="nav-link " >Register</Link>
                   </li>
                     </ul>
                   </div>
                 </nav>
                
                   </div>
               ;
                 }
               }

            //    <button onClick={this.openModal}>
            //    {" "}
            //    Launch Login{" "}
            //  </button>

            //  <Modal isOpen={this.state.modalIsOpen} 
            //  onAfterOpen={this.afterOpenModal} 
            //  onRequestClose={this.closeModal} 
            //  style={customStyles} 
            //  contentLabel="Example Modal">
            //  </Modal>