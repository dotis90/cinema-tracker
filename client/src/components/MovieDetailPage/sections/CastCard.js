import React from 'react';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';

export const CastCard = (props) => {
  return (
    <Col>
      <Card style={{ width: '18rem', flex: 1 }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CastCard;
