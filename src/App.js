import React from 'react';
import Dev from './components/dev.js';
import ScrollToTop from './components/scrolltotop.js';
import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import './css/mobile.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}  onUpdate={() => window.scrollTo(0, 0)}>
      <ScrollToTop/>
      <div>
        <Route path="/" exact component={Dev} />
      </div>
    </Router>
  );
}

export default App;
