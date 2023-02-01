import React from 'react';
import '../Card/Card.css';
 function Card({emoji,heading,detail}) {
    return(
        <div className='card'>
            <img src={emoji} alt=''></img>
            <span>{heading}</span>
            <span>{detail}</span>
        </div>
    );
}
export default Card;