import React from 'react';
import SearchBookForm from '../forms/SearchBookForm';
import PropTypes from "prop-types";
import BookForm from '../forms/BookForm';
import { connect } from "react-redux";
import { Segment } from "semantic-ui-react";
class NewBookPage extends React.Component{

    state={
    	book:null
    }
   onBookSelect= book => this.setState({book});
   addBook = ()=> console.log('hi');
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

export default NewBookPage;