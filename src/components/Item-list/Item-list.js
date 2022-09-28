import React from 'react';
import SwapiService from '../swapi-service.js'
import styles from './Item-list.css'
import { withData } from '../hoc-helper/'


const ItemList = (props) => {

        const { data, onItemSelected, children: renderLabel } = props;
        const items = data.map((item) => {
            const {id} = item;
            const label = item.name;
            return(
                <li className="list-group-item"
                key={id}
                onClick={() => onItemSelected(id)}>
                    {label}
                </li>
            );
           
        });

        return (
            <ul className="item-list list-group">
             {items}
           </ul>
            );
};

const { getAllPeople } = new SwapiService();

export default withData(ItemList, getAllPeople);