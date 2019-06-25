import React from 'react';
import { connect } from 'react-redux';
import {
  TextField, Button,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { postLogin } from '../../store/actions/users';
import useStyles from './styles';

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
      props.history.push('/users');
    }
  };
  return (
    <div>
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

export default connect(null, { postLogin })(withRouter(Login));

Login.propTypes = {
  postLogin: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
