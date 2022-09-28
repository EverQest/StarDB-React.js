import './Randomplanet.css';
import React, {Component} from 'react';
import SwapiService from '../swapi-service.js'
import Spinner from '../Spinner/Spinner';

export default class Randomplanet extends Component {
  constructor() {
    super();
    this.UpdatePlanet();
  }
SwapiService = new SwapiService();

state = {
  id:null,
  name:null,
  population:null,
  rotationPeriod:null,
  diameter:null,
  loading: true
};


componentDidMount() {
  this.UpdatePlanet();
  this.interval = setInterval(this.UpdatePlanet, 4500);
}

componentWillUnmount() {
  clearInterval(this.interval);
}

UpdatePlanet = () => {
  const id = Math.floor(Math.random()*20 +2); 
this.SwapiService.getPlanet(id).then((planet) => {
  this.setState({
    id,
    loading: false,
    name: planet.name,
    population: planet.population,
    rotationPeriod: planet.rotation_period,
    diameter: planet.diameter
  });
});
}

render(){

  const {name, population, diameter, rotationPeriod, id, loading} = this.state;

  if (loading) {
    return <Spinner />
  }
  return (
    <div className="Randomplanet">
        <div className="imgHolder">
            <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="planet" />
        </div>
        <div className='information'>
            <h1>{name}</h1>
            <div><p>Population: {population}</p></div>
            <div><p>Rotation period: {rotationPeriod}</p></div>
            <div><p>Diameter: {diameter}</p></div>
            <div><p>ID: {id}</p></div>
            </div>
    </div>
  );
}}
