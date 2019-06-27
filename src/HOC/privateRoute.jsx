/* eslint-disable no-unused-expressions */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ component: Component, login, ...rest }) => (
  <Route
    {...rest}
    render={props => (login ? (
      <Component {...props} />
    ) : (<Redirect to="/" />)
    )}
  />
);

const mapStateToProps = state => ({
  login: state.user.login,
});
export default connect(mapStateToProps)(PrivateRoute);

PrivateRoute.propTypes = {
  login: PropTypes.bool.isRequired,
};
