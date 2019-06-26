import React from 'react';
import {
  TextField, Button,
} from '@material-ui/core';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { postSignUp } from '../../store/actions/users';
import useStyles from './styles';
import Error from './error';


const SignUp = (props) => {
  const classes = useStyles();
  const username = React.createRef();
  const email = React.createRef();
  const password = React.createRef();
  const name = React.createRef();

  const onSubmitHandler = () => {
    const usersName = username.current.value;
    const userPassword = password.current.value;
    const userEmail = email.current.value;
    const userName = name.current.value;
    if (usersName.trim() && userPassword.trim() && userEmail) {
      const userData = {
        username: usersName,
        email: userEmail,
        name: userName,
        password: userPassword,
      };
      props.postSignUp(userData);
      props.history.push('/users');
    }
  };
  const clearError = () => styled(Error)`display: none;`;

  const { login } = props;
  const { error } = props;
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
      <form className={classes.container}>
        <h2>Kindly Fill The Form</h2>
        <TextField
          id="outlined-name"
          label="Name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          inputRef={name}
        />
        <TextField
          id="outlined-name"
          label="Username"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          inputRef={username}
        />
        <TextField
          id="outlined-email-input"
          label="Email"
          className={classes.textField}
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
          inputRef={email}
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
          onClick={onSubmitHandler}
        >
                Sign up
        </Button>
      </form>
    </div>

  );
};

const mapStateToProps = state => ({
  login: state.login,
  error: state.error,
});

export default connect(mapStateToProps, { postSignUp })(withRouter(SignUp));

SignUp.propTypes = {
  postSignUp: PropTypes.func.isRequired,
  login: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
