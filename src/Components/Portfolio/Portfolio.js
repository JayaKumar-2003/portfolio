import React from 'react';
import './Portfolio.css';
import calculator from '../../img/calculator.png';
import amazona from '../../img/amazona.png';
import Carousel from 'react-bootstrap/Carousel'
export function Portfolio() {
    return (
        <div className='portfolio'>
            <span>Recent Project</span>
            <span>Portfolio</span>
    <Carousel>
      <Carousel.Item className='image'>
        <img
          className="d-block w-100"
          src={calculator}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={amazona}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
        </div>
    );
}