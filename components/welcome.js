import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Fade from 'react-reveal';
import Parallax from './parallax';

class Welcome extends Component {
  render() {
    const items = {
      name : "blog-welcome",
      background: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
      backgrounddepth: "-0.3",
      layers: [ 
      {image: require("../public/background-net.jpg"), depth: "-0.75", name: "layer1"},
      // {image: require("../public/background-2.svg"), depth: "-1.2",  name: "layer2"},
      // {image: require("../public/background-2.svg"), depth: "-1.0",  name: "layer3"},
      // {image: require("../public/background-2.svg"), depth: "-0.8",  name: "layer4"},
      ]
    }

    return (
    <div>
        <section id = "blog-welcome">
        <Parallax items = {items}>
        <div className= "namecard">
        <Row>
          <Col md={8} className= "welcome-title" style={{color: "white"}}>
          <Fade bottom duration= {5000}>
            <h1>CIS 522</h1>
            <h3>Deep Learning @ Penn</h3>
          </Fade>
          </Col>
        </Row>
        </div>
        </Parallax>
        </section>
    </div>
    );
  }
}

export default Welcome;
