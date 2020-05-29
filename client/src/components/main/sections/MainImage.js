import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export const MainImage = (props) => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={props.image1} alt="First slide" />
        <Carousel.Caption>
          <h3>{props.title1}</h3>
          <p>{props.text1}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={props.image2} alt="Second slide" />

        <Carousel.Caption>
          <h3>{props.title2}</h3>
          <p>{props.text2}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={props.image3} alt="Third slide" />

        <Carousel.Caption>
          <h3>{props.title3}</h3>
          <p>{props.text3}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MainImage;
