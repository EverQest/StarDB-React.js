import React, { Component } from "react";
import ItemList from "../Item-list/Item-list";
import ItemDetails from "../Item-details/Item-details";
import ErrorIndicator from "../error-indicator/Error-indicator";
import './people-page.css'
import SwapiService from "../swapi-service";
import { Record } from "../Item-details/Item-details";


export default class PeoplePage extends Component {


swapiService = new SwapiService();

state= {
    selectedItem: 3,
    hasError: false
};


componentDidCatch() {
this.setState({hasError: true})
}

    onItemSelected = (id) => {
        this.setState({
          selectedItem: id
        });
      };

 render(){
     const { getPerson, getPersonImage} = this.swapiService;
     if(this.state.hasError) {
         return <ErrorIndicator />
     }
   const itemList = (
    <ItemList onItemSelected={this.onItemSelected}
        getData={this.swapiService.getAllPeople}
        renderItem={ ({name, gender}) => `${name} (${gender})` }  >
    </ItemList>);
    
    const itemDetails = (
<ItemDetails
        itemId={this.state.selectedItem} 
        getData={getPerson}
        getImageUrl={getPersonImage}>

        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />

        </ItemDetails>
);

        


    return(
        <div className="main">
        {itemList}
        {itemDetails}
        </div>
    );
 }
}