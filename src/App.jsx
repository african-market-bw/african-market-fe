import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from './container/homepage';
import UserPage from './components/users/userProfile';
import PrivateRoute from './HOC/privateRoute';


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={HomePage} />
        <PrivateRoute exact path="/users" component={UserPage} />
      </Router>
    </div>
  );
}

const mapStateToProps = state => ({
  loading: state.loading,
});

export default connect(mapStateToProps)(App);
