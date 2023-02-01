import React from 'react';
import { Navbar } from './Components/NavBar/Navbar';
import './App.css';
import { Intro } from './Components/Intro/Intro';
import { Services } from './Components/Services/Services';
import { Works } from './Components/Works/Works';
import { Portfolio } from './Components/Portfolio/Portfolio';
import { Contact } from './Components/Contact/Contact';
import { Footer } from './Components/Footer/Footer';
import { themeContext } from './Context';
import { useContext } from 'react';
function App() {
  const theme = useContext(themeContext);
 const darkMode = theme.state.darkMode;
  return(
    <div className='App'
    style={{background: darkMode ? 'black':'',
     color:darkMode?'white':''}}>
       <Navbar style={{'z-index' : '1'}}></Navbar>
       <Intro></Intro>
       <Services ></Services>
       <Works></Works>
       <Portfolio></Portfolio>
       <Contact></Contact>
       <Footer></Footer>
    </div>
  );
}
export default App;