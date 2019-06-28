import React from 'react';
import { connect } from 'react-redux';
import {
  TextField, Button,
} from '@material-ui/core';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { postLogin } from '../../store/actions/users';
import useStyles from './styles';
import Spinner from '../../UI/spinner';


const Login = (props) => {
  const classes = useStyles();
  const username = React.createRef();
  const password = React.createRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const usersName = username.current.value;
    const userPassword = password.current.value;
    if (usersName.trim() && userPassword.trim()) {
      const userData = { username: usersName, password: userPassword };
      props.postLogin(userData);
    } else {
      toast.error('all fields are required');
    }
  };
  const { login } = props;
  // eslint-disable-next-line react/prop-types
  const { user } = props;
  const { error } = props;
  const { loading } = props;
  if (login && user) {
    return (
      <Redirect to="/users" />
    );
  }
  if (error) {
    toast.error(error);
  }


  return (
    <div>
      {loading && <Spinner />}
      { error && !login ? true : null}
      <form className={classes.container} onSubmit={e => onSubmitHandler(e)}>
        <h3>Input Login Details</h3>
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
  login: state.user.login,
  user: state.user.user,
  error: state.user.errorLogin,
  loading: state.user.loading,
});

export default connect(mapStateToProps, { postLogin })(Login);

Login.propTypes = {
  login: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  postLogin: PropTypes.func.isRequired,
};
