import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import "../css/welcome.css"
import Fade from 'react-reveal';

class About extends Component {
  
  render() {

    var innerContent=[
        <Col md={3}>
        <Fade bottom duration={5000}>
          <h3>
            The Methods Behind the Magic
          </h3>
        </Fade>
        </Col>,
        <Col md={1}></Col>,
        <Col md={5}>
          <p>
          Deep learning techniques now touch on data systems of all varieties.<br/><br/>
          Sometimes, deep learning is a product; sometimes, deep learning optimizes 
          a pipeline; sometimes, deep learning provides critical insights; sometimes, 
          deep learning sheds light on neuroscience.<br/><br/>
          The purpose of this course is to 
          deconstruct the hype by teaching deep learning theories, models, skills, 
          and applications that are useful for applications. Here, we will shed light
          on the methods behind the magic of Deep Learning. 
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

export default About;
