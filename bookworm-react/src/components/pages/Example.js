import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import {Link} from "react-router-dom";
const Example = () => (
  <div>
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
)

export default Example