import React from 'react';
import 'whatwg-fetch';
import 'jquery';  
import 'popper.js';

import 'bootstrap/dist/css/bootstrap.css'
import FoodStyles from '../../../static/Food.css';
import classnames from 'classnames';
// import TDEEcalc from "./ReusableComp/TDEEcalc.jsx"

import headerStyles from '../../../static/Header.css';
import {Link} from 'react-router-dom';

// import { accessSync } from 'fs';
// import NutritionFacts from 'nutrition-facts';





class SearcListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchList: [
        {
          item: {
            group: "",
            ndbno: 0,
            name: ""
          }
        }
      ],
      query: ""
    };
  }

  componentDidMount() {
    this.setState({ searchList: this.props.searchListUpdated });
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.searchListUpdated);
    console.log(this.state.searchFoods);
    if (this.state.searchFoods !== nextProps.searchListUpdated) {
      console.log("Hi");
      this.setState({
        searchList: nextProps.searchListUpdated
      });
    }
  }

  // console.log(props);
  // const searchList = props.searchListUpdated;

  render() {
    console.log(this.props);
    console.log(this.state.searchList);
    return (
      <ul className="list-group col" id="itemsearch">
        {this.state.searchList.map((items, index) => (
          <li className="list-group-item" key={items.item.ndbno}>
            <div className="md-col-10" id="itemDetails">
              {items.item.name}
            </div>
            <div className="md-col-2" id="buttonForItem">
              <button
                type="button"
                onClick={this.props.handleItemSelect(index)}
                className="btn btn-primary btn-sm"
              >
                Select Item
              </button>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}
 



class ItemList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            energy: {},
            fat: {},
        }
    }
      
}






// class ItemList extends React.Component{
//     constructor(props){
//         super(props)
    
//         this.state = { 
//             name: "",
//             measures: [{measure: {label: "100", unit: "", eQunit: 0, value: 100}}],
//             nutrition: {
//                 energy: [],
//                 fat: [],
//             },
//             modifiedDataisThere: false,
    

//         }
//     }
    
//     if(props){
//     const data = props.data.data.report;
//     console.log(data);
//     var arrayOfKeys = ["208", "203", "204", "205", "291", "269", "605"]
//     var newDataFiltered = data.food.nutrients.filter((data, index) => {
//         console.log(arrayOfKeys.includes(data.nutrient_id.toString()))
//         return arrayOfKeys.includes(data.nutrient_id.toString())
       
//     })
//     console.log(newDataFiltered)
  
//     this.setState({name : data.food.name});
//     let modifiedData = {
//                         energy: [],
//                         fat: []    
//                         }
//     console.log(this.state.name )
//     newDataFiltered.forEach(element => {
//         if(element.nutrient_id.toString() === "208"){
//             element.measures.forEach(element => {
//                 console.log(element.eunit+"hi%%%%")
//                 modifiedData.energy.push({measure: {label: element.label, unit: element.eunit, eQunit: element.eqv, qty: element.qty, value: element.value, }})
                
//             });
//             // modifiedData.measures.concat(data.measures);
//         } else if(element.nutrient_id.toString()  === "203"){
//             element.measures.forEach(element => {
//                 modifiedData.fat.push({measure: {label: element.label, unit: element.eunit, eQunit: element.eqv, qty: element.qty, value: element.value, }})
                
//         });
//     }
    
//     setModifiedDataState(newDataFiltered)

//     });
//     console.log(modifiedData);
//     console.log(modifiedData.energy.length)
//     }

//     setModifiedDataState (newDataFiltered){
//         this.setState({modifiedDataisThere: true})
//     }

//     if(modifiedDataisThere){

//         const nutritionalComponent = { 
//         <div>
//             {this.state.nutrition}<br />
//         <select>
//             {modifiedData.nutrition.energy.map((element, index) => 
                
//                 <option key={element.measure.label} value={element.measure.label}>{element.measure.qty} {element.measure.label}</option>
            
                
//             )}
//             </select>
//         <ul>
//              <li><span className="font-weight-bold">Calories ({modifiedData.nutrition.energy[0].measure.unit})</span>{modifiedData.nutrition.energy[0].measure.value}</li>
//              <li><span className="font-weight-bold">Calories {modifiedData.nutrition.fat.unit}</span>{modifiedData.nutrition.fat.value}</li>
//         </ul>
//         </div>
//     } 
// }

    
// render(){
//     return(
        
        
//             {}
       
//     )   

// }

    
// }



export default class IngredientSearch extends React.Component {
  constructor() {
    super();
    // var ndb = require('nutrient-database');
    this.searchFoods = this.searchFoods.bind(this);
    // this.foodsearch
    // this.foodSearch.bind(this);
    // this.NF.searchFoods = this.NF.searchFoods.bind(this);
    // const fda = require('fda-nutrient-database');
    this.foodQueryString = this.foodQueryString.bind(this);
    this.state = {
      dataExists: false,
      searchList: [
        {
          item: {
            group: "",
            ndbno: 0,
            name: ""
          }
        }
      ],
      query: "",
      data: ""
    };
  }

  foodQueryString(e) {
    let nextState = Object.assign({}, this.state, {
      [e.target.name]: e.target.value
    });
    this.setState(nextState, console.log(this.state));
  }

  handleItemSelect = idx => () => {
    // console.log(idx)
    // console.log(this.state.searchList)
    var stateItem = this.state.searchList.filter((items, sidx) => sidx === idx);
    var ndbnoNumber = stateItem[0].item.ndbno;
    console.log(ndbnoNumber);
    fetch(
      "https://api.nal.usda.gov/ndb/reports/?ndbno=" +
        ndbnoNumber +
        "&type=f&format=json&api_key=T5ZfZE83g43sYtNWRj7yRroXjnVI8TgBX7CjhBGb"
    )
      .then(results => {
        // console.log(results.report);
        return results.json();
      })
      .then(data => {
        console.log(data);
        let newData = Object.assign({}, this.state.data, { data: data });
        this.setState({ data: newData });
        console.log(data.report);
        console.log(data.report.food.nutrients);
        this.setState({ dataExists: true });
        // return data;
      });
    // console.log(stateItem)
  };

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

  componentDidMount() {
    this.setState({ searchList: this.props.searchList });
  }

  render() {
    const dataDoesExist = this.state.dataExists;
    let Item = null;
    if (dataDoesExist) {
      Item = <ItemList data={this.state.data} />;
    } else {
      Item = null;
    }
    return (
      <div className="container">
        <h1 className="text-center">Recipies</h1>
        <br />
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
        <div className="row">
          <SearcListComponent
            searchListUpdated={this.state.searchList}
            handleItemSelect={this.handleItemSelect}
          />
        </div>
        <div className="row">{Item}</div>
      </div>
    );
  }
}

  //  