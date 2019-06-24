import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/navigation/navigationItems';
import Modal from './UI/modal';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Route exact path="/login" component={Modal} />
      </Router>
    </div>
  );
}

export default App;
