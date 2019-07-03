import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ConfirmEmailMessage from '../messages/ConfirmEmailMessage';
import TopNavigation from '../navigation/TopNavigation';
import { allBooksSelector } from '../../reducers/books';
import AddBookCtA from '../ctA/AddBookCtA';
//import { fetchBooks } from "../../actions/books";

const Dashboard = ({isConfirmed,username,books}) =>(

	<div>
	    
      {<ConfirmEmailMessage username={username} />}
      {books.length === 0 && <AddBookCtA/>}
      <p>Welcome Bro </p>
	</div>
);

Dashboard.propTypes ={
	isConfirmed: PropTypes.bool.isRequired,
	books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

function mapStateToProps(state){
  return{
	isConfirmed: !!state.user.confirmed,
	username: state.user.name,
	books:allBooksSelector(state)
}
}

export default connect(mapStateToProps)(Dashboard);
