
import { useState,useEffect } from 'react';
import Navbar from './components/Navbar';
import "./style.css"
import Home from './pages/Home';
import Footer from './components/footer'
import Contact from './pages/contact-us';
import Services from './pages/services';
import Aboutus from './pages/aboutus';
import Careers from './pages/careers';

import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';


function App() {
  
  
  return (
    
    <div className="App">
  
  <div>
    <Navbar/>
    </div>
    <div className='main'>
    <Routes> 
    <Route exact path="/" element={<Home/>} />
    <Route exact path="/contact-us" element={<Contact/>} />
    <Route exact path="/services" element={<Services/>} />
    <Route exact path="/aboutus" element={<Aboutus/>} />
    <Route exact path="/careers" element={<Careers/>} />
    </Routes> 
    </div>
    <Footer />
       
    </div>
  );
}

export default App;
