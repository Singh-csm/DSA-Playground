import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './component/Home';
import Header from './component/layout/Header/Header';
import Lecture1 from './component/Lecture1';
import Lecture10 from './component/Lecture10';
import Lecture2 from './component/Lecture2';
import Lecture3 from './component/Lecture3';
import Lecture4 from './component/Lecture4';
import Lecture5 from './component/Lecture5';
import Lecture6 from './component/Lecture6';
import Lecture7 from './component/Lecture7';
import Lecture8 from './component/Lecture8';
import Lecture9 from './component/Lecture9';

function App() {
  return (
    
    <Router>
    <Header />
      <Routes>
   
        <Route path="/" element={<Home/>}/>
        <Route path="/lecture1" element={<Lecture1/>}/>
        <Route path="/lecture2" element={<Lecture2/>}/>
        <Route path="/lecture3" element={<Lecture3/>}/>
        <Route path="/lecture4" element={<Lecture4/>}/>
        <Route path="/lecture5" element={<Lecture5/>}/>
        <Route path="/lecture6" element={<Lecture6/>}/>
        <Route path="/lecture7" element={<Lecture7/>}/>
        <Route path="/lecture8" element={<Lecture8/>}/>
        <Route path="/lecture9" element={<Lecture9/>}/>
        <Route path="/lecture10" element={<Lecture10/>}/>
      </Routes>
    </Router>

  );
}

export default App;
