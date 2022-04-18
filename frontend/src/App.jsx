import React from 'react';

import './App.css';
import Navbar from './components/navbar/Navbar';
import Display from './components/display/Display'

import { BrowserRouter as Router } from  'react-router-dom'

export default props => {
  return (
    <div>
      <Navbar className="Navbar"></Navbar>
      <Router>
        <Display/>
      </Router>
    </div>
  )
}