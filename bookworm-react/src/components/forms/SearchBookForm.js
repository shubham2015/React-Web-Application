import React from 'react';
import PropTypes from "prop-types";
import axios from "axios";
import { Form, Dropdown } from "semantic-ui-react";
class SearchBookForm extends React.Component{
 //query is the searched data which user types to get info abt
    state={
    	query:'',
      loading: false,
      options: [],
      books: {}
    };

    onChange = (e, data) => {
    this.setState({ query: data.value });
    this.props.onBookSelect(this.state.books[data.value]);
    };
    onSearchChange =(e,data)=>{
      clearTimeout(this.timer);
      this.setState({
        query: data,
      });
      this.timer = setTimeout(this.fetchOptions, 1000);
    }
   
    onChange=(e,data)=>{
      this.setState({query:data.values});
      this.props.onBookSelect(this.state.books[data.value]);
    }
   // This is where we make request to server to invoke the API request to goodreads
   fetchOptions = () => {
    if (!this.state.query) return;
    this.setState({ loading: true });
    //console.log("Sending ",this.state.query.searchQuery);
    axios
      .get(`/api/books/search?q=${this.state.query.searchQuery}`)
      .then(res => res.data.books)
      .then(books => {
        const options = [];
        const booksHash = {};
        books.forEach(book => {
          booksHash[book.goodreadsId] = book;
          options.push({
            key: book.goodreadsId,
            value: book.goodreadsId,
            text: book.title
          });
        });
        this.setState({ loading: false, options, books: booksHash });
      });
  };

	render(){
       
		return(
        <Form>
          <Dropdown
            search 
            fluid
            placeholder="Search"
            value={this.state.query}
            onSearchChange={this.onSearchChange}  
            options = {this.state.options}
            loading = {this.state.loading}
            onChange = {this.onChange}
          /> 
         </Form>    
			);
	}
}

export default SearchBookForm;