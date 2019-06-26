import React from 'react';
import { connect } from 'react-redux';
import {
  TextField, Button,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { postLogin } from '../../store/actions/users';
import useStyles from './styles';
import Error from './error';

const Login = (props) => {
  const classes = useStyles();
  const username = React.createRef();
  const password = React.createRef();

  const clearError = () => styled(Error)`display: none;`;

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const usersName = username.current.value;
    const userPassword = password.current.value;
    if (usersName.trim() && userPassword.trim()) {
      const userData = { username: usersName, password: userPassword };
      props.postLogin(userData);
    }
  };
  const { login } = props;
  const { error } = props;
  if (login) return <Redirect to="/users" />;

  return (
    <div>
      {error && !login
        && (
        <Error>
          {' '}
          <span
            onClick={clearError}
            onKeyPress={clearError}
            role="button"
            tabIndex="0"
          >
X

          </span>
          <p>{error}</p>
          {' '}
        </Error>
        )
      }
      <form className={classes.container} onSubmit={e => onSubmitHandler(e)}>
        <h2> Kindly Input Your Login Details</h2>
        <TextField
          id="outlined-name"
          label="Username"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          inputRef={username}
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
          inputRef={password}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={e => onSubmitHandler(e)}
        >
                Login
        </Button>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  login: state.login,
  error: state.error,
});

export default connect(mapStateToProps, { postLogin })(Login);

Login.propTypes = {
  login: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  postLogin: PropTypes.func.isRequired,
};
