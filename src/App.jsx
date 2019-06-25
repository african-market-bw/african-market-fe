import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './container/homepage';


function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={HomePage} />
      </Router>
    </div>
  );
}

export default App;
