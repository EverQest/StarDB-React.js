import './App.css';
import Header from '../Header/Header';
import Randomplanet from '../Randomplanet/Randomplanet';
import React, {Component} from 'react';
import PeoplePage from '../people-page/people-page';
import ItemList from '../Item-list/Item-list';
import ItemDetails from '../Item-details/Item-details';
import SwapiService from '../swapi-service';
import { Record } from '../Item-details/Item-details';
import {
  PersonDetails,
  PlanetDetails,
  FilmDetails,
  PersonList,
  PlanetList,
  FilmList
} from '../sw-components';

export default class App extends Component {

swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
  }

  onItemSelected = (id) => {
    this.setState({
      selectedItem: id
    });
  };

render(){

const {getPlanet, getPlanetImage} = this.swapiService;


  return (
    <div className="App">
      <Header />
       <Randomplanet />
       <PeoplePage />
      
       <div className="main">

        {/* <ItemList 
        onItemSelected={this.onItemSelected}
        getData={this.swapiService.getAllPlanets}
        renderItem={ (item) => item.name} />
        <ItemDetails
        itemId={2} 
        getData={getPlanet}
        getImageUrl={getPlanetImage}>
        <Record field="population" label="Population" />
        <Record field="diameter" label="Diameter" />
        </ItemDetails> */}

        </div>
    </div>
  );

}
}