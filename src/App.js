import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './clientApp/navigation/Navigation';


const App = () => {
  return (
    <Router>
      <Navigation />
    </Router>
  );
};

export default App;
