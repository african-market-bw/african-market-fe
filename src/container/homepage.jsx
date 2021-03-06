import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Navigation from '../components/navigation/navigationItems';
import Modal from '../UI/modal';
import SignUp from '../components/forms/signup';
import Login from '../components/forms/login';
import { getAllProducts, orderSumary } from '../store/actions/products';
import Spinner from '../UI/spinner';
import Products from '../components/products/products';
import Footer from '../components/footer/footer';

const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 700px) {
    
  }
   @media (max-width: 500px) {
      flex-direction: column;
    }
`;
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
        {loading ? <Spinner />
          : (
            <Div>
              {!loading && products.map(product => (
                <Products product={product} key={product.id}>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ margin: '1rem' }}
                // eslint-disable-next-line react/destructuring-assignment
                    onClick={this.props.orderSumary}
                  >
                  Buy
                  </Button>
                </Products>
              ))}
              {!loading && products.map(product => (
                <Products product={product} key={product.id}>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ margin: '1rem' }}
                // eslint-disable-next-line react/destructuring-assignment
                    onClick={this.props.orderSumary}
                  >
                  Buy
                  </Button>
                </Products>
              ))}
              {!loading && products.map(product => (
                <Products product={product} key={product.id}>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ margin: '1rem' }}
                // eslint-disable-next-line react/destructuring-assignment
                    onClick={this.props.orderSumary}
                  >
                  Buy
                  </Button>
                </Products>
              ))}
              <Footer />
            </Div>
          )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.product.loading,
  products: state.product.products,
});

export default connect(mapStateToProps, {
  getAllProducts, orderSumary,
})(HomePage);

HomePage.propTypes = {
  getAllProducts: PropTypes.func.isRequired,
  orderSumary: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.any).isRequired,
  loading: PropTypes.bool.isRequired,
};
