import React ,{useContext}from 'react';
import './FloatingDiv.css';

import { themeContext } from '../../Context';
 function FloatingDiv({image , txt1,txt2}) {
       const theme = useContext(themeContext);
    console.log(theme.state.darkMode);
    const darkMode = theme.state.darkMode;
    return (
    <div className='floating-main'>
      
           <img src={image} alt=""></img>
       
           <span style={darkMode?{color:'var(--orange)',display:'block',}:{color:'var(--black)',display:'block'}}>{txt1}
            <br/>
           {txt2}</span>
    </div>
    
    );
}
export default FloatingDiv;