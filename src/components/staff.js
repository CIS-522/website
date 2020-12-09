import React, { Component } from 'react';
import { Row, Col} from 'reactstrap';
import {Button} from 'react-bootstrap';
import "../css/welcome.css"
import Fade from 'react-reveal';

class Staff extends Component {
  
  render() {

    var staff = [
      {name: "Subject Zero", title: "TA", email: "email@seas", oh: "65 Million BCE 7-9P", image: require("../public/dino2.png")},   
      {name: "Subject Zero", title: "TA", email: "email@seas", oh: "65 Million BCE 7-9P", image: require("../public/dino2.png")}, 
      {name: "Subject Zero", title: "TA", email: "email@seas", oh: "Mondays 5-6P", image: require("../public/dino2.png")},    
    ]
    var stafflist = staff.map((i) => {
      return (
        <Col md={4}>
          <div style= {{padding: "5"}}> 
            <div className = "profile-pic" style={{backgroundImage: "url(" + i.image + ")", height: "250px", width: "250px"}}>
            </div>
            <h4><b>{i.name}</b></h4>
            <p>
              <i>{i.title}</i><br/>
              <b>Email:</b> {i.email}<br/>
              <b>OH:</b> {i.oh}
            </p>
          </div>
        </Col>
      )
    })
      
    return (
      <div className="light-container" style={{paddingBottom: 2+"%", minHeight: "100vh", paddingTop:"5%"}}> 
        <div className="mobile-only" style={{height: "30vh"}}/>             
        <h3>Staff</h3>
        <Row style={{paddingTop: "2%"}}>
          {stafflist}
        </Row>
      </div>
    );
  }
}

export default Staff;
