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

import Modal from 'react-responsive-modal';


// export default class ModalSearch extends React.Component {

// constructor(){
//     super(props);
//     this.state = {
//         open:false
//     };
//     }

// onOpenModal = () =>{
//     this.setState({open:true});

// };

// onCloseModal = () => {
//     this.setState({open:false});
// };


// }

export default class ModalIngredientSearch extends React.Component {
  constructor(){
    super();
    this.state = {
      open: false,
    }
  }

onOpenModal = () =>{
    this.setState({open:true});

};

onCloseModal = () => {
    this.setState({open:false});
};

render(){
  const { open } = this.state;

  return(
    <div>
    
    <Modal open={open} onClose={this.onCloseModal} center>
    <div className="col-md-10 offset-1">
<form>
<div className="form-row align-items-center">
  <div className="col-auto form-group">
    <label className="form-Weight">Search Food</label>
    <label className="sr-only" for="form-Height">
      Search Food
    </label>
    <input
      type="text"
      className="form-control mb-2 mb-sm-0"
      id="form-Query"
      placeholder="Search Food"
      name="query"
      value={this.state.query}
      onChange={this.foodQueryString}
    />
  </div>
  <div className="col-auto form-group">
    <label className="form-Height">Height</label>
    <label className="sr-only" for="form-Height">
      Height
    </label>
    <input
      type="text"
      className="form-control mb-2 mb-sm-0"
      id="form-Height"
      placeholder="Height"
      name="height"
      value={this.state.height}
      onChange={this.userDetails}
    />
  </div>

  <div className="form-group col-auto">
    <label className="form-Age">Age</label>
    <label className="sr-only" for="form-Age">
      Age
    </label>
    <input
      type="text"
      className="form-control mb-2 mb-sm-0"
      id="Form-Age"
      placeholder="Age"
      name="age"
      value={this.state.age}
      onChange={this.userDetails}
    />
  </div>

  <div className="text-center">
    <button
      type="button"
      className="btn btn-primary btn-sm"
      onClick={this.searchFoods}
    >
      Search for Foods
    </button>
  </div>
</div>
</form>
</div>
    <h2> Modal</h2>
    </Modal>


    </div>
  )
}


}



export default class Food extends React.Component {

    constructor(){
        super();
        this.state = {
            open:false,
            IngredientList: [{ Ingredient:  '', 
                               amount: 0,
                                fat: 0,
                                carbs: 0,
                                sugars: 0,
                                protein: 0,
                               }]
            
        }
    }

    

    handleIngredientChange = (idx) => (event) => {
        event.preventDefault();
        let name = event.target.name
        const newIngredient = this.state.IngredientList.map((IngredientItem, sidx) => {
            
            if (idx !== sidx) {
                return IngredientItem;
            }else{
            console.log(this.state.IngredientList)
            IngredientItem[event.target.name] = event.target.value;
            return { ...IngredientItem,     IngredientList: event.target.value};
            }
        });

        this.setState({IngredientList: newIngredient})

    }

    handleIngredientAddition = () => {
        this.setState({
            IngredientList: this.state.IngredientList.concat([{Ingredient: ''}])
        });
    }

    handleIngredientRemoval = (idx) => () => {
        this.setState({
            IngredientList: this.state.IngredientList.filter((s, sidx)=> idx !== sidx)
        
        });
    }
    
    searchFoods() {
        var Query = this.state.query;
        var itemLists = [];
        fetch(
          "https://api.nal.usda.gov/ndb/search/?format=json&q=" +
            Query +
            "&sort=r&max=2000&offset=0&api_key=" +
            "T5ZfZE83g43sYtNWRj7yRroXjnVI8TgBX7CjhBGb"
        )
          .then(results => {
            return results.json();
          })
          .then(data => {
            console.log(data.list.item);
    
            data.list.item.forEach(element => {
              //    console.log(element.name)
              var newItem = {
                item: {
                  group: element.group,
                  ndbno: element.ndbno,
                  name: element.name
                }
              };
              //    console.log(newItem)
              itemLists.push(newItem);
            });
            console.log(itemLists);
            return itemLists;
          })
          .then(itemLists => {
            this.setState({ searchList: itemLists });
            //    console.log(itemLists)
            // let nextState = Object.assign({},
            // this.state,
            // ({searchList: itemLists}));
            // this.setState(nextState);
            console.log(this.state.searchList);
          });
      }
    

    render(){
        
        return (
            

                <div>
                ha
                <form>
                <h4>new ingredient</h4>

                {this.state.IngredientList.map((IngredientItem, idx) => (
                        <div className="form-row">
                        <div className="form-col">
                        <input 
                        type="text" 
                        class="form-control"
                        placeholder={`Ingredient #${idx + 1} name`}
                        name = "Ingredient"
                        // placeholder={`Ingredient #${idx + 1} name`} 
                        value={IngredientItem.Ingredient}
                        onChange={this.handleIngredientChange(idx)}
                        />
                        </div>
                        <div className="form-col">
                        
                        <input 
                        type="text" 
                        placeholder={`Amount #${idx + 1} name`}
                        name = "amount"
                        // placeholder={`Ingredient #${idx + 1} name`} 
                        value={IngredientItem.amount}
                        onChange={this.handleIngredientChange(idx)}
                        />
                        </div>
                        <div className="form-col">
                        <input 
                        type="text" 
                        placeholder={`fat #${idx + 1} name`}
                        name = "fat"
                        // placeholder={`Ingredient #${idx + 1} name`} 
                        value={IngredientItem.fat}
                        onChange={this.handleIngredientChange(idx)}
                        />
                        </div>
                        <div className="form-col">
                        <button type="button" onClick={this.handleIngredientRemoval(idx)} className="small">-</button>
                        <button type="button" onClick={this.onOpenModal}>Open Modal</button>
                        
                        </div>
                        </div>
                    
                    )
                    )}
                <button type="button" onClick={this.handleIngredientAddition} className="small">Add Ingredient</button>
                </form>
                
                </div>

                //     <form>

                //     {this.state.IngredientList.map((Ingredient, idx)=>(
                //     <div class="IngredientItem">

                //     <input type="text" placeholder={'Ingredeint #${idx +1} name'} 
                //     value = {IngredietntList.Ingredient} 
                //     onChange={this.handleIngredientChange(idx)}/>
                    
                //     <button type="button" onClick={this.handleIngredientRemoval(idx)} className="small"></button>
                //     </div>)
                // )}
                //         <button type="button" onClick={this.handleIngredientAddition} className="small">Add Ingredient</button>
                // </form>

           
            )

            
        
    }


}



// <input 
// type="text" 
// placeholder={`Ingredient #${idx + 1} name`} 
// value = {IngredientList.Ingredient} 
// onChange={this.handleIngredientChange(idx)}
// />

