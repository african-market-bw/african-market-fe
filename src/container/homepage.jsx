import React, { Component } from 'react';
import Navigation from '../components/navigation/navigationItems';
import Modal from '../UI/modal';
import Form from '../components/forms/signup';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    const { open } = this.state;
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
          <Form />
        </Modal>
      </div>
    );
  }
}

export default HomePage;
