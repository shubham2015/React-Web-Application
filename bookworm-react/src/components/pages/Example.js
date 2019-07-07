import React from 'react';
import { Button, Icon} from 'semantic-ui-react';
import {Visibility} from 'semantic-ui-react';
import {Link} from "react-router-dom";
import './styles.css';
import jscripts from './jscripts';
//import visibility from '@bit/semantic-org.semantic-ui-react.visibility'
//import 'semantic-ui/dist/semantic.min.css';
import $ from 'jquery';
//const Example = () => (
class Example extends React.Component{


render(){
return(  
<div>
<html>
<head>
 
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>

 
  <title>Homepage - Semantic</title>
  <link rel="stylesheet" type="text/css" href="../dist/components/reset.css"/>
  <link rel="stylesheet" type="text/css" href="../dist/components/site.css"/>

  <link rel="stylesheet" type="text/css" href="../dist/components/container.css"/>
  <link rel="stylesheet" type="text/css" href="../dist/components/grid.css"/>
  <link rel="stylesheet" type="text/css" href="../dist/components/header.css"/>
  <link rel="stylesheet" type="text/css" href="../dist/components/image.css"/>
  <link rel="stylesheet" type="text/css" href="../dist/components/menu.css"/>

  <link rel="stylesheet" type="text/css" href="../dist/components/divider.css"/>
  <link rel="stylesheet" type="text/css" href="../dist/components/dropdown.css"/>
  <link rel="stylesheet" type="text/css" href="../dist/components/segment.css"/>
  <link rel="stylesheet" type="text/css" href="../dist/components/button.css"/>
  <link rel="stylesheet" type="text/css" href="../dist/components/list.css"/>
  <link rel="stylesheet" type="text/css" href="../dist/components/icon.css"/>
  <link rel="stylesheet" type="text/css" href="../dist/components/sidebar.css"/>
  <link rel="stylesheet" type="text/css" href="../dist/components/transition.css"/>

  
  
</head>

<body>

<div class="ui large top fixed hidden menu">
  <div class="ui container">
    <a class="active item">Home</a>
    <div class="right menu">
      <div class="item">
        <a class="ui button">Log in</a>
      </div>
      <div class="item">
        <a class="ui primary button">Sign Up</a>
      </div>
    </div>
  </div>
</div>


<div class="ui vertical inverted sidebar menu">
  <a class="active item">Home</a>
  <a class="item">Login</a>
  <a class="item">Signup</a>
</div>



<div class="pusher">
  <div class="ui inverted vertical masthead center aligned segment">

    <div class="ui container">
      <div class="ui large secondary inverted pointing menu">
        <a class="toc item">
          <i class="sidebar icon"></i>
        </a>
        <a class="active item">Home</a>
  
        <div class="right item">
          <Link to="/login">
    <Button animated>
      <Button.Content visible>
       Login
      </Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>
   </Link>  
     <Link to ="/signup">                                                                                                     
    <Button animated='fade'>
      <Button.Content visible>New User</Button.Content>
      <Button.Content hidden>Sign-Up</Button.Content>
    </Button>
    </Link>
        </div>
      </div>
    </div>

    <div class="ui text container">
      <h1 class="ui inverted header">
        Book-Tracker
      </h1>
      <h2>Store your Favourite Books</h2>
     <Link to="/login"> <div class="ui huge primary button">Get Started <i class="right arrow icon"></i></div></Link>
    </div>

  </div>

 


  

 


  
</div>

</body>

</html>
</div>
)
}
}
export default Example