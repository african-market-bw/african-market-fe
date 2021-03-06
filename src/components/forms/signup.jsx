import React from 'react';
import {
  TextField, Button,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { postSignUp, errorLogin } from '../../store/actions/users';
import useStyles from './styles';
import Spinner from '../../UI/spinner';

const SignUp = (props) => {
  const classes = useStyles();
  const username = React.createRef();
  const email = React.createRef();
  const password = React.createRef();
  const name = React.createRef();

  const { user } = props;
  const { login } = props;
  const { error } = props;
  const { loading } = props;

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
    } else {
      toast.error('all fields are required');
    }
  };
  if (error) {
    toast.error(error);
  }
  if (login && user) {
    return (
      <Redirect to="/users" />
    );
  }
  return (
    <div>
      {loading && <Spinner />}
      {/* {error && !login ? true : null} */}
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
  login: state.user.login,
  error: state.user.errorSignUp,
  loading: state.user.loading,
  user: state.user.user,
});

export default connect(mapStateToProps, { postSignUp, errorLogin })(SignUp);

SignUp.propTypes = {
  postSignUp: PropTypes.func.isRequired,
  login: PropTypes.bool.isRequired,
  user: PropTypes.arrayOf(PropTypes.any).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};
