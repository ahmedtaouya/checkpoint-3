import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Playerscard(props) {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.ImgUrl} />
    <Card.Body>
      <Card.Title>{props.Name}</Card.Title>
      <Card.Text>
      {props.Name}
      {props.Team}
      {props.Position}
      </Card.Text>
      <Button variant="primary"> {props.Age}</Button>
    </Card.Body>
  </Card>
  )
}

export default Playerscard
