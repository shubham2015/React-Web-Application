import React from 'react'
import { Card } from 'semantic-ui-react'
import {connect} from 'react-redux';
import { allBooksSelector } from '../../reducers/books';
import {fetchBooks} from '../../actions/books';
import Item from './Item';
class LoadBooks extends React.Component {

  render(){
return (
  <div>
   <Card.Group>
    {this.props.load.map(item =>(
     <Item item={item} key={item._id}/>
    ))}
    </Card.Group>
   </div>
    );
}

    



}
export default LoadBooks;