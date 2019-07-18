import React from 'react';
import 'whatwg-fetch';
import 'jquery';  
import 'popper.js';

import 'bootstrap/dist/css/bootstrap.css'
import Diet101Styles from '../../static/Diet101.css';
import classnames from 'classnames';
import TDEEcalc from "./ReusableComp/TDEEcalc.jsx"

import headerStyles from '../../static/Header.css';
import {Link} from 'react-router-dom';
// import { accessSync } from 'fs';




export default class Diet101 extends React.Component {
    constructor(){
        super()
        // this.radioClick = this.radioClick.bind(this);
        // this.calculateBMR = this.calculateBMR.bind(this);
        // this.userDetails = this.userDetails.bind(this);
        // this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
        // this.selectActivityLvl = this.selectActivityLvl.bind(this);
        // this.state = {
        //     units: "unit",
        //     kg : null,
        //     cm : null,
        //     gender: "gender",
        //     age: null,
        //     BMR: 0,
        //     error: "",
        //     activityLvl: 0,
        //     TDEE: 0,

        // }
    }

    // forceUpdateHandler(){
    //     this.forceUpdate();
    // }



    // radioClick(e){
        
    //     let nextState = Object.assign({},
    //         this.state,
    //         { [e.target.name]: e.target.value });
    //         this.setState(nextState, console.log(this.state));
            
    //     // this.setState(function(prevState, e){
    //     //     name = e.target.name;
    //     //     return {
    //     //         name : this.e.target.value
    //     //     }
    //     // })
   
    //     // this.setState({[e.target.name] : e.target.value});
        
        

    // }

    // calculateBMR(){
    //     // this.forceUpdateHandler();
    //     console.log(this.state);
    //     if(this.state.units !== "unit" && this.state.gender !== "gender"){
    //         this.setState({error: ""})
    //     }
    //     if (this.state.units === "unit" && this.state.gender === "gender"){
    //         this.setState({error: "Please select Units and gender"})

    //     }
    //     if(this.state.gender === "Male" && this.state.units === "Metric"){
    //         var BMR = 66.5 + 13.397*this.state.kg + 4.799*this.state.cm - 5.677*this.state.age;
    //     // this.setState({BMR : BMR })
        
    //     console.log("Hi1")
    //     }
    //     if (this.state.gender === "Female" && this.state.units === "Metric"){
    //         var BMR = 447.593 + 9.247*this.state.kg + 3.098*this.state.cm - 4.330*this.state.age;
    //         // this.setState({BMR : BMR })
    //         // console.log("Hi2")
    //     }
    //     if(this.state.gender === "Male" && this.state.units === "Imperial"){
    //         var BMR = 66.5 + ((13.397*this.state.kg)/2.2) + ((4.799*this.state.cm)*2.54) - (5.677*this.state.age);
    //         // this.setState({BMR : BMR })
    //         // console.log("Hi2")
    //     }
    //     if (this.state.gender === "Female" && this.state.units === "Imperial"){
    //             var BMR = 447.593 + 9.247*this.state.kg/2.2 + 3.098*this.state.cm*2.54 - 4.330*this.state.age;
    //             // this.setState({BMR : BMR })
    //             // console.log("Hi2")
    //     }

    //     this.updateBMR(BMR);
    
        
       
    // }
    // updateBMR(BMR){
    //     let nextState = Object.assign({},
    //         this.state,
    //         { BMR: Math.round(BMR)});
    //         this.setState(nextState, function TDEEupdate(){
    //             this.updateTDEE();
    //         });
    //     }


    // updateTDEE(){
   
    //     let nextState = Object.assign({},
    //         this.state,
    //         { TDEE: this.state.BMR*this.state.activityLvl });
    //         this.setState(nextState);
    // }
    // selectActivityLvl(e){
    //     e.preventDefault();
    //     var actLvlStrToNum = parseFloat(e.target.value);
    //     let nextState = Object.assign({},
    //         this.state,
    //         { activityLvl: actLvlStrToNum});
    //         this.setState(nextState, console.log(this.state));


        
        
    //     console.log("hi4");
    // }

    // userDetails(e){

    //     let nextState = Object.assign({},
    //         this.state,
    //         { [e.target.name]: e.target.value });
    //         this.setState(nextState, console.log(this.state));

        
    // }
    


    render(){
        
        return <div className="container">
            <h1 className="text-center">
              Diet 101 - Basics on Getting Started
            </h1>
            <br />
            <div className="col-md-8 offset-2">
              <h3 className="">Introduction:</h3>
              <p className="text-justify">
                There are many “diets” out there. Each one claims to
                have found a solution to weight-loss. The fact that many
                people have found success using all these different
                diets should be an indication that following a specific
                diet plan will not magically cause someone to lose
                weight. In fact, all diets follow very basic principals.
                These principles are outlined here. Read and follow
                these principals first, use the resources on this page,
                and then move on to read about some of the more popular
                diets if you wish.
              </p>
              <p className="text-justify">
                Included in the tabs above, are some of the more popular
                diets that people follow. You should be able to lose
                weight, and maintain a healthy weight if you follow the
                basic principals outlined on this page. Information on
                some of the more popular diets are included with pros
                and cons to allow individuals to decide based on
                personal preference. An emphasis should be provided that
                you do not have to follow any one of those diets.
              </p>
              <h3>Step 1: Motivation</h3>
              <p className="text-justify">
                Ask yourself the following question: Why do I want to go
                on a diet?
              </p>
              <p className="text-justify">
                Whether it be to look better, feel better, move better,
                or for health reasons (maybe a combination of all those
                reasons and more), the answer you provide should be a
                constant reminder of your goals.
              </p>
              <h3>Step 3: Discipline</h3>
              <p className="text-justify">
                Staying firm and following a plan day to day requires
                discipline. It is hard. Motivate yourself, use the
                resources and community on this page to keep your
                motived. Invite your friends and follow a weight-loss
                journey together. Get together and make some of the
                recipes contributed by other users on this site. Make it
                fun. When you feel lost, re-read your motivation.
              </p>
              <p className="text-justify font-italic col-md-10 offset-1">
                This is a marathon, and not a sprint. Take is slow, and
                be steady, and you will reach your goals.
              </p>
              <h3>Step 5: Get some exercise.</h3>
              <p className="text-justify ">
                Lift weights, run, swim, walk, join a fitness group or
                play a sport. It doesn’t matter what you do, get up and
                get active.
              </p>
              <p className="text-justify ">
                Not only will exercise allow you to reach your goals
                faster, it will also make you feel better.
              </p>
              <h3>Step 4: Log It.</h3>
              <p className="text-justify ">
                Write it down in a notebook, or create an account on
                this site and use the tracker to log your food and
                workout routines.
              </p>
              <p className="text-justify ">
                If you use this site, it will automatically help you recalculate nutritional variables as well as provide charts to visualize your nutritional and exercise progress.
                <br />Now on to the details.
              </p>
              Now on to the details.
              <h3>
                Step 5: Determine what your caloric requirements are.
              </h3>
              <div className="indentText"><p className="text-justify"><span className="font-weight-bold">Basal Metabolic Rate (BMR):</span>  <br /> Your BMR is basically how much energy you would burn if you were to do nothing all day.</p>
              </div>
              <div className="indentText"><p className="text-justify"><span className="font-weight-bold">Total Daily Energy Expenditure (TDEE):</span>  <br />Your TDEE determins how much energy you would burn taking in to account various 
              activity levels.<br />Use your best judegment to select your activity level. <br /><span className="font-italic">As an example: </span> If you have a desk job and do not 
              work out you would select "Little to No Exercise".<br />
              </p>
              </div>
            
            </div>
            <TDEEcalc />
            
           
          </div>;
    }

}