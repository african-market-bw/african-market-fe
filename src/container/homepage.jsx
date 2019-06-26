import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navigation from '../components/navigation/navigationItems';
import Modal from '../UI/modal';
import SignUp from '../components/forms/signup';
import Login from '../components/forms/login';
import { getAllProducts } from '../store/actions/products';
import Spinner from '../UI/spinner';
import Products from '../components/products/products';

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

  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.getAllProducts();
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
    const { loading } = this.props;
    const { products } = this.props;
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
        {loading && <Spinner /> }
        <div style={{ display: 'flex' }}>
          {!loading && products.map(product => (
            <Products product={product} key={product.id} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.product.loading,
  products: state.product.products,
});

export default connect(mapStateToProps, {
  getAllProducts,
})(HomePage);

HomePage.propTypes = {
  getAllProducts: PropTypes.func.isRequired,
  products: PropTypes.arrayOf({

  }).isRequired,
  loading: PropTypes.bool.isRequired,
};
