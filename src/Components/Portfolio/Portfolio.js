import React from 'react';
import './Portfolio.css';
import calculator from '../../img/calculator.png';
import amazona from '../../img/amazona.png';
import Carousel from 'react-bootstrap/Carousel';
import TicTacToe from '../../img/tic-tac-toe.png';
import Shop from '../../img/shop.png'
export function Portfolio() {

 

    return (
        <div className='portfolio'>
            <span>Recent Project</span>
            <span>Portfolio</span>
    <Carousel>
      <Carousel.Item className='image'>
        <a href="https://jayakumar-translator.onrender.com/" target='blank'>
        <img 
          className="d-block w-100"
          src={calculator}
          alt="First slide"
        ></img></a>
      </Carousel.Item>
      <Carousel.Item>
      <a href="https://github.com/JayaKumar-2003/Ecommerce-Amazon-clone" target='blank'>
        <img
          className="d-block w-100"
          src={amazona}
          alt="Second slide"
        />
        </a>
      </Carousel.Item>
     
      <Carousel.Item>
        <a href='https://jayakumar-tictactoe.onrender.com' target='blank'>
          <img
           className="d-block w-100"
           src={TicTacToe}
           alt="Third slide"
          >
          </img>
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href='https://shop-management.onrender.com/' target='blank'>
          <img
           className="d-block w-100"
           src={Shop}
           alt="Third slide"
          >
          </img>
        </a>
      </Carousel.Item>
    </Carousel>
        </div>
    );
}