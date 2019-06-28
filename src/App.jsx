import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import HomePage from './container/homepage';
import UserPage from './container/userProfile';
import PrivateRoute from './HOC/privateRoute';
import ErrorPage from './components/errorPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={HomePage} />
        <PrivateRoute exact path="/users" component={UserPage} />
        <ToastContainer />
        <Route exact path="*" component={ErrorPage} />
      </Router>
    </div>
  );
}

const mapStateToProps = state => ({
  loading: state.loading,
});

export default connect(mapStateToProps)(App);
