import React, { Component } from 'react';
import '../css/standard.css';
import {Button} from 'react-bootstrap';


class NotFound extends Component {
  render() {
    return (
      <div className="landing-container">
        <div className="dark-container" style={{height:"100vh"}}>
            <h1>Oops! Looks like you've gotten stuck in a local minimum.</h1>
            <h3>
            This page either doesn't exist or is currently still
            under construction. Please check back later for updates.
            </h3>
            <Button href= {process.env.PUBLIC_URL + "/"} variant="dark">
            <h3>
                Return Home
            </h3>
            </Button>
        </div>
      </div>
      
    );
  }
}

export default NotFound;
