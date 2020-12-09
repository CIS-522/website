import React, { Component } from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';
import { Link, animateScroll as scroll } from "react-scroll";
import '../css/standard.css';

class Menu extends Component {
  
  render() {
    return (
      <div className = "sidenav">
        <Nav vertical>
          <NavItem>
            <Link class= "navlink" activeClass="active" to="welcome" href= "" spy={true} smooth={true} duration= {800}> Welcome</Link>
          </NavItem>
          <NavItem>
            <Link class= "navlink" activeClass="active" to="about" href= "" spy={true} smooth={true} duration= {800}> About</Link>
          </NavItem>
          <NavItem>
            <Link class= "navlink" activeClass="active" to="resources" href= "" spy={true} smooth={true} duration= {800}> Resources</Link>
          </NavItem>
          <NavItem>
            <Link class= "navlink" activeClass="active" to="staff" href= "" spy={true} smooth={true} duration= {800}> Staff</Link>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default Menu;
