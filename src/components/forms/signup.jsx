import React from 'react';
import {
  TextField, Button,
} from '@material-ui/core';
import useStyles from './styles';


const SignUp = () => {
  const classes = useStyles();
  return (
    <div>
      <form className={classes.container}>
        <h2>Kindly Fill The Form</h2>
        <TextField
          id="outlined-name"
          label="Name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-name"
          label="Name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
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
                Sign up
        </Button>
      </form>
    </div>

  );
};

export default SignUp;
