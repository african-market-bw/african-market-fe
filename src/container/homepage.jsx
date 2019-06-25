import React, { Component } from 'react';
import Navigation from '../components/navigation/navigationItems';
import Modal from '../UI/modal';
import SignUp from '../components/forms/signup';
import Login from '../components/forms/login';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      signUp: false,
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    return (bool) => {
      this.setState({ open: true, signUp: bool });
    };
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    const { open } = this.state;
    const { signUp } = this.state;
    return (
      <div>
        <Navigation
          open={open}
          handleClose={this.handleClose}
          handleOpen={this.handleOpen}
        />
        <Modal
          open={open}
          handleClose={this.handleClose}
          handleOpen={this.handleOpen}
        >
          {signUp ? <SignUp /> : <Login />}
        </Modal>
      </div>
    );
  }
}

export default HomePage;
