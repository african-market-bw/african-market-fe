import React from 'react';
import {
  TextField, Button,
} from '@material-ui/core';
import useStyles from './styles';

const Login = () => {
  const classes = useStyles();
  return (
    <div>
      <form className={classes.container}>
        <TextField
          id="outlined-name"
          label="Username"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
        >
                Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
