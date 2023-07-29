import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Index from './Components/Index';
import Contact from './Components/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div >
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path='/' Component={Index} />
            <Route path='/contact' Component={Contact} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
