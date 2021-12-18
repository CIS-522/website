import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import "../css/welcome.css"
import Fade from 'react-reveal';

class Prerequisites extends Component {
  
  render() {

    var innerContent=[
        <Col md={3}>
        <Fade bottom duration={5000}>
          <h3>
            Prerequisites
          </h3>
        </Fade>
        </Col>,
        <Col md={1}></Col>,
        <Col md={5}>
          <p>
          To make sure that we're all on the same page, we have decided to require some machine learning fundamentals for this course. You can only register for our class if you have taken CIS 520, CIS 519, or an equivalent course. In addition, we'll have a mandatory quiz covering basic machine learning and PyTorch knowledge, which will be used to select students for the class each year.
          </p>
        </Col>]
    
      
    return (
      <div className="light-container" style={{paddingBottom: 2+"%"}}>            
        <div className= "mobile-only">
        <Row>
          <div className= "banner">
            {innerContent}
          </div>
        </Row>
        </div>

        <div className= "web-only" style={{paddingTop: "5%"}}>
        <Row>
            {innerContent}
        </Row>
        </div>
      </div>
    );
  }
}

export default Prerequisites;
