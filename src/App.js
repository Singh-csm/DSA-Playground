import React from 'react';
import "./App.css";
// import Home from './component/Home';
// import Header from './component/layout/Header/Header';
// import Lecture1 from './component/Lecture1';
// import Lecture10 from './component/Lecture10';
// import Lecture2 from './component/Lecture2';
// import Lecture3 from './component/Lecture3';
// import Lecture4 from './component/Lecture4';
// import Lecture5 from './component/Lecture5';
// import Lecture6 from './component/Lecture6';
// import Lecture7 from './component/Lecture7';
// import Lecture8 from './component/Lecture8';
// import Lecture9 from './component/Lecture9';
import About from './component/About';
import Banner from './component/Banner';
import Contact from './component/Contact';
import Nav from './component/Nav';
import Prices from './component/Prices';
import Services from './component/Services';
import ColorModeSwitcher from './ColorModeSwitcher';

function App() {
  return (
    
    <div>
    <div><ColorModeSwitcher/></div>
      <Banner />
      <Nav />
      <About  />
      <Services />
      <Prices />
      <Contact />
    </div>

  );
}

export default App;
