export default class SwapiService {

    _apiBase = 'https://swapi.dev/api';
    _imageBase = 'https://starwars-visualguide.com/assets/img';
    
     getResource = async (url) => {
      const res = await fetch(`${this._apiBase}${url}`);
    
      if(!res.ok){
        throw new Error(`Could not fetch' ${url}` + `, received ${res.status}`)
      }
      return await res.json();
    }
    getAllFilms = async () =>{
      const res = await this.getResource(`/films/`);
      return res.results.map(this._transformFilm);
    }
    getAllPeople = async () => {
      const res = await this.getResource(`/people/`);
      return res.results.map(this._transformPerson);
    }
     getAllPlanets = async () => {
      const res = await this.getResource(`/planets/`);
      return res.results.map(this._transformPlanet);
    }
    
    
    getPersonImage = ({id}) => {
      return `${this._imageBase}/characters/${id}.jpg`
    }
    getFilmImage = ({id}) => {
      return `${this._imageBase}/films/${id}.jpg`
    }
    getPlanetImage = ({id}) => {
      return `${this._imageBase}/planets/${id}.jpg`
    }

    getFilm = async (id) => {
      const film = await this.getResource(`/films/${id}/`);
      return this._transformFilm(film);
    }
    getPerson = async (id) => {
      const person = await this.getResource(`/people/${id}/`);
      return this._transformPerson(person);
    }
    getPlanet = async (id) => {
      const planet = await this.getResource(`/planets/${id}/`);
      return this._transformPlanet(planet);
    }
    
_extractId = (item) => {
  const idRegExp = /\/([0-9]*)\/$/;
  return item.url.match(idRegExp)[1];
}


_transformPlanet = (planet) => {
  return {
    id:this._extractId(planet),
    name:planet.name,
    population:planet.population,
    rotationPeriod: planet.rotation_period,
    diameter: planet.diameter
  };
};
_transformPerson = (person) => {
  return {
    id:this._extractId(person),
    name: person.name,
    gender: person.gender,
    birthYear: person.birthYear,
    eyeColor: person.eyeColor
  }
}
_transformFilm = (film) => {
  return {
    id:this._extractId(film),
    name: film.name
  }
}



}