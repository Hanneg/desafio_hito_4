import React from 'react'
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap'

const CardPizza = (props) => {
  return (
    <Card style={{ width: '25rem' }} >
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>Pizza {props.name}</Card.Title>
        <Card.Body style={{border: "0.05px dashed gray"}}>
          <Card.Text style={{fontSize: '14px', textAlign: 'justify'}}>{props.desc}</Card.Text>
          <Card.Text style={{fontSize: '14px', textAlign: 'left'}}>Ingredientes:</Card.Text>
          <ListGroup style={{fontSize: '12px'}}>
            <ListGroupItem>{props.ingredients}</ListGroupItem>
          </ListGroup>
        </Card.Body>
        <Card.Text style={{fontSize: '20px', textAlign: 'center'}}>
          Precio: ${props.price}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CardPizza