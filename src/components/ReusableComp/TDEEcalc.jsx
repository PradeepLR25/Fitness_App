import React from 'react';
import 'whatwg-fetch';
import 'jquery';  
import 'popper.js';

import 'bootstrap/dist/css/bootstrap.css'
// import Diet101Styles from '../../static/Diet101.css';
import classnames from 'classnames';


import headerStyles from '../../../static/Header.css';
import {Link} from 'react-router-dom';
// import { accessSync } from 'fs';




export default class TDEEcalc extends React.Component {
    constructor(){
        super()
        this.radioClick = this.radioClick.bind(this);
        this.calculateBMR = this.calculateBMR.bind(this);
        this.userDetails = this.userDetails.bind(this);
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
        this.selectActivityLvl = this.selectActivityLvl.bind(this);
        this.state = {
            units: "unit",
            weight : 0,
            height : null,
            gender: "gender",
            age: null,
            BMR: 0,
            error: "",
            activityLvl: 0,
            TDEE: 0,

        }
    }

    forceUpdateHandler(){
        this.forceUpdate();
    }



    radioClick(e){
        
        let nextState = Object.assign({},
            this.state,
            { [e.target.name]: e.target.value });
            this.setState(nextState, console.log(this.state));
            
        // this.setState(function(prevState, e){
        //     name = e.target.name;
        //     return {
        //         name : this.e.target.value
        //     }
        // })
   
        // this.setState({[e.target.name] : e.target.value});
        
        

    }

    calculateBMR(){
        // this.forceUpdateHandler();
        console.log(this.state);
        if(this.state.units !== "unit" && this.state.gender !== "gender"){
            this.setState({error: ""})
        }
        if (this.state.units === "unit" && this.state.gender === "gender"){
            this.setState({error: "Please select Units and gender"})

        }
        if(this.state.gender === "Male" && this.state.units === "Metric"){
            var BMR = 66.5 + 13.397*this.state.weight + 4.799*this.state.height - 5.677*this.state.age;
        // this.setState({BMR : BMR })
        
        console.log("Hi1")
        }
        if (this.state.gender === "Female" && this.state.units === "Metric"){
            var BMR = 447.593 + 9.247*this.state.weight + 3.098*this.state.height - 4.330*this.state.age;
            // this.setState({BMR : BMR })
            // console.log("Hi2")
        }
        if(this.state.gender === "Male" && this.state.units === "Imperial"){
            var BMR = 66.5 + ((13.397*this.state.weight)/2.2) + ((4.799*this.state.height)*2.54) - (5.677*this.state.age);
            // this.setState({BMR : BMR })
            // console.log("Hi2")
        }
        if (this.state.gender === "Female" && this.state.units === "Imperial"){
                var BMR = 447.593 + 9.247*this.state.weight/2.2 + 3.098*this.state.height*2.54 - 4.330*this.state.age;
                // this.setState({BMR : BMR })
                // console.log("Hi2")
        }

        this.updateBMR(BMR);
    
        
       
    }
    
    updateBMR(BMR){
        let nextState = Object.assign({},
            this.state,
            { BMR: Math.round(BMR)});
            this.setState(nextState, function TDEEupdate(){
                this.updateTDEE();
            });
        }


    updateTDEE(){
  
        let nextState = Object.assign({},
            this.state,
            { TDEE: Math.round(this.state.BMR*this.state.activityLvl) });
            this.setState(nextState);
    }
    selectActivityLvl(e){
        e.preventDefault();
        console.log("hi5");
        var actLvlStrToNum = parseFloat(e.target.value);
        let nextState = Object.assign({},
            this.state,
            { activityLvl: actLvlStrToNum});
            this.setState(nextState, console.log(this.state));


        
        
        console.log("hi4");
    }

    userDetails(e){

        let nextState = Object.assign({},
            this.state,
            { [e.target.name]: e.target.value });
            this.setState(nextState, console.log(this.state));

        
    }
    


    
        render() {
        return (
            
            <div className="col-md-8 offset-2">
              <form className="form-border" name="TDEE">
              <div className="offset-2">
                <div className="form-check form-check-inline" >
           
                  <div className="form-check" >
                    <label className="form-check-label">
                      <input className="form-check-input" type="radio" name="gender"  value="Female"    onClick={this.radioClick}/>
                      Female
                    </label>
                  </div>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input className="form-check-input" type="radio" name="gender"  value="Male"  onClick={this.radioClick} />
                      Male
                    </label>
                  </div>
             
                </div>
                
                <div className="form-check form-check-inline">
                  <div className="form-check">
                    <label className="form-check-label">
                      <input className="form-check-input" type="radio" name="units" id="exampleRadios1" value="Metric" onClick={this.radioClick}/>
                      Metric (height, weight, etc.)
                    </label>
                  </div>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input className="form-check-input" type="radio" name="units" id="exampleRadios2" value="Imperial" onClick={this.radioClick}/>
                      Imperial (lbs, inches, etc.)
                    </label>
                  </div>
                </div>
                </div>
                <div className="form-row align-items-center">
                    <div className="col-auto form-group">
                        <label className="form-Weight">Weight</label>
                        <label className="sr-only" for="form-Height">Weight</label>
                        <input type="text" className="form-control mb-2 mb-sm-0" id="form-Weight" placeholder="Weight" name="weight" value={this.state.weight} onChange={this.userDetails}/>
                    </div>
                    <div className="col-auto form-group">
                    <label className="form-Height">Height</label>
                        <label className="sr-only" for="form-Height">Height</label>
                        <input type="text" className="form-control mb-2 mb-sm-0" id="form-Height" placeholder="Height" name="height" value={this.state.height} onChange={this.userDetails}/>
                    </div>
                
                <div className="form-group col-auto">
                    <label className="form-Age">Age</label>
                    <label className="sr-only" for="form-Age">Age</label>
                    <input type="text" className="form-control mb-2 mb-sm-0" id="Form-Age" placeholder="Age" name="age" value={this.state.age} onChange={this.userDetails}/>
                </div>
                
         
                
                <div className="form-group col-auto">
                <label for="exampleFormControlSelect1">Select Activity Level: </label>
                <label className="sr-only">Select Activity Level:</label>
                <select className="form-control" id="exampleFormControlSelect1" name="activityLvl" value={this.state.activityLvl} onChange={this.selectActivityLvl} >
                  <option value="0"> Select from drop down </option>
                  <option  value="1.2" >Little to No Exercise</option>
                  <option  value="1.375">Light Exercise (1-3 hrs/week)</option>
                  <option  value="1.55">Moderate Exercise (3-5 hrs/week)</option>
                  <option value="1.725">Heavy Exercise (6-7 hrs/week)</option>
                  <option value="1.9"> Strenuous Exercise (more than 7 hrs/week)</option>
                </select>
             
              </div>
              </div>
                <div className="text-center">
                <button type="button" className="btn btn-primary btn-sm" onClick={this.calculateBMR}>Calculate BMR and TDEE</button>
                
                </div>
                <div>
                <p> Your BMR is:{this.state.BMR} </p>
                <p> Your TDEE is:{this.state.TDEE} </p>
                </div>

                <div className="form-group text-center">
                  <button className="btn btn-primary btn-md align-center">
                    Save to Profile
                  </button>
                </div>
              </form>
              <h1>
                Need to Register?<Link data-dismiss="modal" to="/Registration">
                  click here
                </Link>
              </h1>
            </div>
          
        )
    }
}