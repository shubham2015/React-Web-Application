import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ConfirmEmailMessage from '../messages/ConfirmEmailMessage';
import TopNavigation from '../navigation/TopNavigation';
import { allBooksSelector } from '../../reducers/books';
import AddBookCtA from '../ctA/AddBookCtA';
import {fetchBooks} from '../../actions/books';
import LoadBooks from './LoadBooks';

class Dashboard extends React.Component {
  componentDidMount =() =>{
  	 this.onInit(this.props);	 
  }

  // Thunk action to place the initial data into redux store
  onInit = (props) =>props.fetchBooks();	
  

	render(){
		const{isConfirmed,books,username} = this.props;
		return(
      <div>
       <h1> Welcome Home {username} </h1>
	     {<ConfirmEmailMessage username={username} />}
         {books.length === 0 ? <AddBookCtA/> : <LoadBooks load={books}/>}
	     </div>
	);
	}
}  


Dashboard.propTypes ={
	isConfirmed: PropTypes.bool.isRequired,
	books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

function mapStateToProps(state){
  console.log(allBooksSelector(state));
  return{
	isConfirmed: !!state.user.confirmed,
	books:allBooksSelector(state)
}
}


export default connect(mapStateToProps,{fetchBooks})(Dashboard);
