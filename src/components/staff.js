import React, { Component } from 'react';
import { Row, Col} from 'reactstrap';
import {Button} from 'react-bootstrap';
import "../css/welcome.css"
import Fade from 'react-reveal';

class Staff extends Component {
  
  render() {

    var staff = [
      {name: "Konrad Körding", title: "Professor", email: "email@seas", oh: "TBD", image: require("../public/dino2.png")},   
      {name: "Lyle Ungar", title: "Professor", email: "email@seas", oh: "TBD", image: require("../public/dino2.png")}, 
      {name: "Ann-Katrin Reuel", title: "Lead TA", email: "akreuel [at] seas.upenn.edu", oh: "TBD", image: require("../public/dino2.png")},    
      {name: "Aditya Singh", title: "TA", email: "adiprs [at] seas.upenn.edu", oh: "TBD", image: require("../public/dino2.png")},  
      {name: "Felipe Parodi", title: "TA", email: "fparodi [at] pennmedicine.upenn.edu", oh: "TBD", image: require("../public/dino2.png")},  
      {name: "Hannah Horng", title: "TA", email: "hhorng [at] seas.upenn.edu", oh: "TBD", image: require("../public/dino2.png")},  
      {name: "Harsh Goel", title: "TA", email: "harshg99 [at] seas.upenn.edu", oh: "TBD", image: require("../public/dino2.png")},  
      {name: "Kausik Sivakumar", title: "TA", email: "kausik [at] seas.upenn.edu", oh: "TBD", image: require("../public/dino2.png")},  
      {name: "Kevin Liang", title: "TA", email: "kevliang [at] sas.upenn.edu", oh: "TBD", image: require("../public/dino2.png")},  
      {name: "Mrigank Saksena", title: "TA", email: "mrigank [at] seas.upenn.edu", oh: "TBD", image: require("../public/dino2.png")},  
      {name: "Olivia Sandvold", title: "TA", email: "sandvold [at] seas.upenn.edu", oh: "TBD", image: require("../public/dino2.png")},  
      {name: "Tianyi Zhang", title: "TA", email: "zty [at] upenn.edu", oh: "TBD", image: require("../public/dino2.png")},  
      {name: "Yifei Li", title: "TA", email: "liyifei [at] seas.upenn.edu", oh: "TBD", image: require("../public/dino2.png")},  
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
