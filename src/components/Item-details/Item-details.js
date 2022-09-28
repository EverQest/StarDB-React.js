import React, {Component} from 'react';
import SwapiService from '../swapi-service.js'
import styles from './Item-details.css'



const Record = ({item, field, label}) => {
    return (
        <div className='information'>{ label } :{ item[field] }</div>
    );
};

export {
    Record
};

export default class ItemDetails extends Component {

SwapiService = new SwapiService();

state = {
    item: null,
    image: null
};

componentDidMount() {
    this.updateItem();
}

componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
        this.updateItem();
    }
}


updateItem() {
const { itemId, getData, getImageUrl } = this.props;
if(!itemId) {
    return;
}
getData(itemId)
.then((item) => {
    this.setState({ item, image:getImageUrl(item) });
})
}
    render() {
        
const {item, image} = this.state;
if(!item) {
    return <span>Select a item from a list</span>;
}
const {id, name} = item;

        return (
          <div className="container_frame">
            <img src={image} alt="img" />
         <div className='information_frame'> 
            <div className='name'>{name}</div>

         {
            React.Children.map(this.props.children, (child) => {
                return React.cloneElement(child, { item });
            })
         }

          </div>

          </div>
        );
      }
    }