import React, { Component } from 'react';
import { Row, Col} from 'reactstrap';
import {Button} from 'react-bootstrap';
import "../css/welcome.css"
import Fade from 'react-reveal';

class Footer extends Component {
  
  render() {
    return (
      <div className="light-container" style={{paddingBottom: 2+"%", minHeight: "5vh", paddingTop:"5%", textAlign: "center"}}>            
        <p>Made with Love by the CIS 522 Teaching Staff ♥</p>
      </div>
    );
  }
}

export default Footer;
