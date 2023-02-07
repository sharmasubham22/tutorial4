import React from "react";
import img from '../images/iphone.jpg'
import img2 from '../images/insta.jpg';
import img3 from '../images/rog.jpg';
import '../App.css';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Test() {
  return (
    <Carousel className="carousel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Apple unveils the new iphones line-up.</h3>
          <Link to="/">Click here to see the product specifications.</Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>The all new Insta360 action camera!!</h3>
          <Link to="/">Click here to see the product specifications.</Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Gaming Beast - Asus ROG</h3>
          <Link to="/">Click here to see the product specifications.</Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Test;