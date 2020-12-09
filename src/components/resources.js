import React, { Component } from 'react';
import { Row, Col} from 'reactstrap';
import {Button} from 'react-bootstrap';
import "../css/welcome.css"
import Fade from 'react-reveal';

class Resources extends Component {
  
  render() {
    
    return (
      <div className="light-container" style={{paddingBottom: 2+"%", minHeight: "100vh", paddingTop:"5%"}}>   
        <div className="mobile-only" style={{height: "30vh"}}/>         
        <h3>Resources</h3>
        <Row style={{paddingTop: "2%"}}>

          <Col md = {6} style={{paddingTop: "30px"}}>
            <Button variant = "outline-dark" href = {process.env.PUBLIC_URL + "/#/not-found"} target="blank_" style={{textAlign:"left", width: "100%", height: "100%", padding: "5%"}}>
            <Row style={{backgroundColor: "rgba(0, 0, 0, 0)"}}>
              <Col md = {4}><img src={require("../public/github_logo.png")} style={{width: "140px", paddingBottom: "30px"}}></img></Col>
              <Col md = {8}>
                <h3><b>Course Content</b></h3>
                <p>See out Github for an up-to-date version of the course syllabus, content, and homeworks.</p>
              </Col>
            </Row>
            </Button>
          </Col>

          <Col md = {6} style={{paddingTop: "30px"}}>
            <Button variant = "outline-dark" href = {process.env.PUBLIC_URL + "/#/not-found"} target="blank_" style={{textAlign:"left", width: "100%", height: "100%", padding: "5%"}}>
            <Row style={{backgroundColor: "rgba(0, 0, 0, 0)"}}>
              <Col md = {4}><img src={require("../public/piazza_logo.png")} style={{width: "100px", paddingBottom: "30px"}}></img></Col>
              <Col md = {8}>
                <h3><b>Q&A</b></h3>
                <p>Have a Question? No problem, we have you covered. Check out our Piazza!</p>
              </Col>
            </Row>
            </Button>
          </Col>

          

          <Col md = {6} style={{paddingTop: "30px"}}>
            <Button variant = "outline-dark" href = {process.env.PUBLIC_URL + "/#/not-found"} target="blank_" style={{textAlign:"left", width: "100%", height: "100%", padding: "5%"}}>
            <Row style={{backgroundColor: "rgba(0, 0, 0, 0)"}}>
              <Col md = {4}><img src={require("../public/crowdcast_logo.png")} style={{width: "120px", paddingBottom: "30px"}}></img></Col>
              <Col md = {8}>
                <h3><b>Live Lectures</b></h3>
                <p>Head on over to Crowdcast to watch lectures live!</p>
              </Col>
            </Row>
            </Button>
          </Col>

          <Col md = {6} style={{paddingTop: "30px"}}>
            <Button variant = "outline-dark" href = "https://d2l.ai/" target="blank_" style={{textAlign:"left", width: "100%", height: "100%", padding: "5%"}}>
            <Row style={{backgroundColor: "rgba(0, 0, 0, 0)"}}>
              <Col md = {4}><img src={require("../public/d2l_logo.png")} style={{width: "120px", paddingBottom: "30px"}}></img></Col>
              <Col md = {8}>
                <h3><b>Textbook</b></h3>
                <p>D2L is our (unofficial) textbook.</p>
              </Col>
            </Row>
            </Button>
          </Col>

        </Row>
      </div>
    );
  }
}

export default Resources;
