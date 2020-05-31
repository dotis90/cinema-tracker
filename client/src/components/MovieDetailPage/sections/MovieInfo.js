import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export const MovieInfo = (props) => {
  return (
    <Card style={{ width: '100%' }}>
      <Card.Header>{props.description}</Card.Header>
      <ListGroup horizontal>
        <ListGroup.Item style={{ width: '20rem' }}>Release Date</ListGroup.Item>
        <ListGroup.Item style={{ width: '100%' }}>{props.release}</ListGroup.Item>
      </ListGroup>
      <ListGroup horizontal>
        <ListGroup.Item style={{ width: '20rem' }}>Runtime</ListGroup.Item>
        <ListGroup.Item style={{ width: '100%' }}>{props.runtime} minutes</ListGroup.Item>
      </ListGroup>
      <ListGroup horizontal>
        <ListGroup.Item style={{ width: '20rem' }}>Score</ListGroup.Item>
        <ListGroup.Item style={{ width: '100%' }}>
          {props.score} / 10 ({props.votes} Votes)
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default MovieInfo;
