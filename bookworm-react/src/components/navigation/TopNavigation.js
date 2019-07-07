import React, { Component } from 'react';
import { Menu, Segment, Input } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import { allBooksSelector } from '../../reducers/books';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logout} from '../../actions/auth';
const TopNavigation =({user, logout, hasBooks})=> (
      <Segment inverted>
        <Menu inverted secondary>
          <Menu.Item as={Link} to= "/dashboard" name='home'>
          Dashboard
          </Menu.Item>
          {hasBooks && 
          (<Menu.Item as={Link} to= "/books/new">
          Add More Books
          </Menu.Item>)}
          <Menu.Item
            name='messages' 
          />
          <Menu.Item
            name='friends'
           
            
          />
          <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item
            name='logout'
            onClick={() => logout()}
          />
        </Menu.Menu>
        </Menu>
      </Segment>
  
);

TopNavigation.propTypes = {
user: PropTypes.shape({
  email: PropTypes.string.isRequired
}).isRequired,
logout: PropTypes.func.isRequired
};

function mapStateToProps(state){

  return{
    user:state.user,
    hasBooks: allBooksSelector(state).length > 0
  }
}
export default connect(mapStateToProps, {logout})(TopNavigation);