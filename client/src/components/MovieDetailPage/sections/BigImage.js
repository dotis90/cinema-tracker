import React from 'react';
import Image from 'react-bootstrap/Image';

export const BigImage = (props) => {
  const imageStyle = {
    width: '100%',
    position: 'relative',
  };

  const titleStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
  };

  const taglineStyle = {
    position: 'absolute',
    top: '70%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
  };

  return (
    <div>
      <Image src={`https://image.tmdb.org/t/p/w1280/${props.image}`} style={imageStyle} fluid />
      <h1 style={titleStyle}>{props.title}</h1>
      <h2 style={taglineStyle}>{props.tagline}</h2>
    </div>
  );
};

export default BigImage;
