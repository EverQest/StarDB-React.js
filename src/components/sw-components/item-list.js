import React from "react";
import ItemList from "../Item-list/Item-list";
import SwapiService from "../swapi-service";


const swapiService = new SwapiService();
const {
    getAllPeople,
    getAllStarships,
    getAllPlanets,
} = swapiService;

const PersonList = () => {};

const PlanetList = () => {};

const FilmList = () => {};


export {
    PersonList,
    PlanetList,
    FilmList
};