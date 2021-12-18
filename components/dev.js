import React, { Component } from 'react';
import '../css/standard.css';
import Welcome from './welcome';
import About from './about';
import Menu from './menu';
import Resources from './resources';
import Prerequisites from './prerequisites';
import Staff from './staff';
import Footer from './footer';


class Dev extends Component {
  render() {
    return (
      <div className="landing-container">
        <Menu/>
        <section id = "welcome">
          <Welcome/>
        </section>
        <section id = "about">
          <About/>
        </section>
        <section id = "prerequisites">
          <Prerequisites/>
        </section>
        <section id = "resources">
          <Resources/>
        </section>
        <section id = "staff">
          <Staff/>
        </section>
        <Footer/>

      </div>
      
    );
  }
}

export default Dev;
