
import React from 'react';
import { Card,Image,Icon} from 'semantic-ui-react'
const Item =({item})=>

<Card>
     <Image src={item.cover} size ='small' />
      <Card.Content>
        <Card.Header>{item.title}</Card.Header>
        <Card.Meta>Author</Card.Meta>
        <Card.Description>{item.authors}</Card.Description>
      </Card.Content>
      <Card.Content extra>
      <a>
        <Icon name='book' />
        200 pages
      </a>
    </Card.Content>
    </Card>
	
   

	
export default Item;