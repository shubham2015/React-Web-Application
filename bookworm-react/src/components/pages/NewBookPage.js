import React from 'react';
import SearchBookForm from '../forms/SearchBookForm';

import PropTypes from "prop-types";
import BookForm from '../forms/BookForm';
import { connect } from "react-redux";
import { Segment } from "semantic-ui-react";
import {createBook} from '../../actions/books';
class NewBookPage extends React.Component{

    state={
    	book:null
    }
   onBookSelect= book => this.setState({book});

   addBook = (book)=> this.props.createBook(book)
                      .then(()=> this.props.history.push('/dashboard'));

	render(){
       
		return(
            <Segment>
              <h1>Add New Book</h1>
              <SearchBookForm onBookSelect = {this.onBookSelect}/>
              {this.state.book && (<BookForm submit={this.addBook} book={this.state.book}/>)}
              </Segment>
			);
	}


}



export default connect(null, {createBook})(NewBookPage);