import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export const MovieCard = (props) => {
  return (
    <Col>
      <Card style={{ width: '18rem', flex: 1, margin: '5%' }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.release}</Card.Text>
          <Link to={`/movies/${props.movieId}`}>
            <Button variant="primary">See Movie</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MovieCard;
