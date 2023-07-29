import React, { Component } from 'react';
import Home from './../Home';
import Work from './../Work';
import Portfolio from './../Portfolio';
import About from './../About';
import Social from './../Social';

class Index extends Component {
    render() {
        return (
            <div className="Index" >
                <Home />
                <Work />
                <Portfolio />
                <About />
                <Social />
            </div>
        );
    }
}

export default Index;
