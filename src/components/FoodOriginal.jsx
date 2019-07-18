import React from 'react';
import 'whatwg-fetch';
import 'jquery';  
import 'popper.js';

import 'bootstrap/dist/css/bootstrap.css'
import FoodStyles from '../../static/Food.css';
import classnames from 'classnames';
import TDEEcalc from "./ReusableComp/TDEEcalc.jsx"

import headerStyles from '../../static/Header.css';
import {Link} from 'react-router-dom';
import IngredientSearch from './ReusableComp/IngredientSearch.jsx';

// import { accessSync } from 'fs';
// import NutritionFacts from 'nutrition-facts';




//compoents: 
//  ingredient input
//  reusable component for adding ingredient.




// function FormInputIngredient(props)  {
//         console.log(props)
        
//         const recipeName = props.recipeName;
//         const allIngredients = props.Ingred;
//         const IngredRemoval = props.IngredRemoveFunction;
//         // const keyholder = props.keyholder
//         const handleIngredientChange = props.handleIngredientChange
//         // const id = props.id
//         return (
        
//                 <div className="ingred" >
//                     <input
                    
//                     type="text" 
//                     name = "ingred"
//                     placeholder={allIngredients}
//                     value={allIngredients}
//                     onChange={handleIngredientChange}
//                     />
//                     <button type="button" onClick={IngredRemoval}> Remove Ingredient </button>
//                 </div>
        
//         )
//     }







// export default class Food extends React.Component {
    

//     constructor() {
//         super();
//         // this.handleIngredientRemoval.bind(this); 
//         this.state = {
//             recipeName: "",
//             allIngredients: [
//                             {ingred: ''}]
//         }
//     }

//     handleIngredientChange = (idx) => (event) => {
//         // console.log(idx)
//         // console.log(event.target.value)
//         const changedIngredient = this.state.allIngredients.map((ingred, sidx) => {
//             if(sidx !== idx) {
//                 // console.log("hi")
//                 return ingred
//             }else{
//                 // console.log("hi")
//                 return {...ingred, [event.target.name] : event.target.value}
//             }
            
//         })
//         this.setState({allIngredients:  changedIngredient})
//         // console.log(this.state.allIngredients)
//     }

//     handleIngredientRemoval = (idx) => () => {
//         // console.log(idx)
//         const newState = this.state.allIngredients.filter((ingred, sidx) => idx !== sidx)
//         // this.setState({allIngredients: this.state.allIngredients.filter((ingred, sidx) =>  idx !== sidx) })
//         this.setState({allIngredients: newState})
//         // console.log(this.state.allIngredients)
//     }

//     handleAddIngredient = () => {
//         this.setState({allIngredients: this.state.allIngredients.concat({ingred: ''})})
//         console.log(this.state.allIngredients)
//      }

//     render (){

//         const IndividualIngredient = this.state.allIngredients.map((Ingred, idx) => <FormInputIngredient 
//         key = {idx}
//         // keyholder = {idx}
//         // recipeName={this.state.recipeName}
//         allIngredients={Ingred.ingred}
//         // id = {Ingred.id}
//         IngredRemoveFunction = {this.handleIngredientRemoval(idx)}
//         handleIngredientChange = {this.handleIngredientChange(idx).bind(this)}
//         />)

//         return(
//             <div>
//             <form>
//             {IndividualIngredient}
//             <button type="button" onClick = {this.handleAddIngredient}>Add Ingredient</button>
//             </form>
//             </div>
//         )
//     }

// }




let id = 0;
export default class Food extends React.Component {
    constructor() {
        super();
        
        this.state = {
          recipeName: '',
          allIngredients: [
          {Allingred:
              {id: id,
              Ingred: "",
              fat : 0,
              satF: 0,
              chol: 0 ,
              sodium: 0,
              carbs: 0,
              sugars: 0,
              fiber : 0,
              protein : 0,
              altSugar : 0}
          }
        ]
        };
      }

    handleRecipeNameChange = (event) => {
        console.log(event)
        this.setState({ recipeName: event.target.value});
    }

    handleIngredientChange = (idx) => (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        // console.log(idx)
        let name = event.target.name
        console.log(this.state.allIngredients)
        
        const newIngredient =this.state.allIngredients.map((ingred, sidx) => {

        console.log(name)
        console.log(ingred.Allingred[name])
        if (sidx !== idx ) {return ingred;}
        // return { ...ingred, [event.target.name]: event.target.value}
        else{
        ingred.Allingred[name] = event.target.value
        return ingred;
        }
            
           
    });
        this.setState({ allIngredients: newIngredient });
        console.log(this.state.allIngredients)
    
    }

    handleSubmit = (event) => {
        const { recipeName, allIngredients } = this.state;
        alert('recipe added')
    }

    handleAddIngredient = () => {
        this.setState({ allIngredients: this.state.allIngredients.concat([{Allingred:
            {
            id : ++id,
            Ingred: "",
            fat : 0,
            satF: 0,
            chol: 0 ,
            sodium: 0,
            carbs: 0,
            sugars: 0,
            fiber : 0,
            protein : 0,
            altSugar : 0}
        }]) 
    });
    }

    handleIngredientRemoval = (idx) => () => {
        this.setState({allIngredients: this.state.allIngredients.filter(( ingred, sidx) => idx !== sidx) });
    }

    render(){
        
        return (
            <div>

           <form onSubmit={this.handleSubmit}>
           <h4>Recipe</h4>
            <input
            type="text"
            placeholder="Recipe Name"
            value={this.state.name}
            onChange={this.handleRecipeNameChange}
            />

            <h4>Ingredients</h4>


            

           {this.state.allIngredients.map((ingred, idx) =>
        (
            <div className="ingred" key={ingred.Allingred.id}>
            <input
            type="text"
            name="Ingred"
            placeholder={`Ingredient #${idx + 1} ingredient`}
            value={ingred.Allingred.Ingred}
            onChange={this.handleIngredientChange(idx)}
            />
            <input 
            type="number"
            placeholder = "0"
            name='fat'
            value={ingred.Allingred.fat}  
            onChange={this.handleIngredientChange(idx)} 
            />
            <input 
            type="number"
            placeholder = "0"
            name='satF'
            value={ingred.satF}
            onChange={this.handleIngredientChange(idx)} 
            />
            <input 
            type="number"
            placeholder = "0"
            name='chol'
            value={ingred.chol}
            onChange={this.handleIngredientChange(idx)} 
            />
            <input 
            type="number"
            placeholder = "0"
            name='sodium'
            value={ingred.sodium}
            onChange={this.handleIngredientChange(idx)} 
            />
            <input 
            type="number"
            placeholder = "0"
            name='sugar'
            value={ingred.sugar}
            onChange={this.handleIngredientChange(idx)} 
            />
            <input 
            type="number"
            placeholder = "0"
            name='fiber'
            value={ingred.fiber}
            onChange={this.handleIngredientChange(idx)} 
            />
            <input 
            type="number"
            placeholder = "0"
            name='protein'
            value={ingred.protein}
            onChange={this.handleIngredientChange(idx)} 
            />
            <input 
            type="number"
            placeholder = "0"
            name='altSugar'
            value={ingred.altSugar}
            onChange={this.handleIngredientChange(idx)} 
            />
            <button type="button" onClick={this.handleIngredientRemoval(idx)} className="small">-</button>
            </div>
        ))}
        <button type="button" onClick={this.handleAddIngredient}
        className="small">Add Ingredient</button>
        <button>Add Recipe</button>
       
           </form>

        <IngredientSearch   />
       
        </div>

     
        )
    }

}

// {this.state.allIngredients.map(function(object) {
//     return (
//         <p key={object.id} data={object} />
//     )
// })}
