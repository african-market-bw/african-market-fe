import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import UserNavBar from '../components/users/usersNav';
import Product from '../components/products/products';
import { getAllProducts, getAUserProduct } from '../store/actions/products';
import Spinner from '../UI/spinner';
import BtnControl from '../components/products/productBtn';
import Modal from '../UI/modal';
import Form from '../components/forms/addProduct';
import Footer from '../components/footer/footer';

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 700px) {
    
  }
   @media (max-width: 500px) {
      flex-direction: column;
    }
`;

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      update: '',
    };
    this.modalHandler = this.modalHandler.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    // const { subject } = this.props.user;
    // eslint-disable-next-line react/destructuring-assignment
    // this.props.getAUserProduct(subject);
    // eslint-disable-next-line react/destructuring-assignment
    // this.props.getAllProducts();
    this.props.getAUserProduct();
  }

  modalHandler() {
    return (id) => {
      this.setState({ open: true, update: id });
    };
  }

  handleOpen() {
    this.setState({ open: true, update: '' });
  }

  handleClose() {
    this.setState({ open: false, update: '' });
  }

  render() {
    const { open } = this.state;
    const { update } = this.state;
    const { loading } = this.props;
    const { products } = this.props;
    // eslint-disable-next-line react/prop-types
    const { subject } = this.props.user;
    const { error } = this.props;
    const { addMessage } = this.props;
    const { message } = this.props;
    if (message) {
      toast.success(message);
    }
    if (error) toast.error(error);
    if (addMessage) toast.success(addMessage);
    return (
      <div>
        <UserNavBar handleOpen={this.modalHandler} />
        {loading ? <Spinner />
          : (
            <div>

              <Div>
                {!loading && products.map(product => (
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      border: '1px solid #ddd',
                      margin: '1rem',
                    }}
                    key={product.id}
                  >
                    <Product product={product}>
                      <BtnControl show={this.modalHandler} id={product.id} />
                    </Product>
                  </div>
                ))}
              </Div>
              <Modal
                open={open}
                handleClose={this.handleClose}
                handleOpen={this.modalHandler}
              >
                <Form id={update} user_id={subject} />
              </Modal>
              <Footer />
            </div>
          )
      }
      </div>
    );
  }
}
const mapStateToProps = state => ({
  user: state.user.user,
  loading: state.product.loading,
  products: state.product.products,
  message: state.user.message,
  error: state.product.error,
  addMessage: state.product.addMessage,
});

export default connect(mapStateToProps, {
  getAllProducts, getAUserProduct,
})(UserProfile);


UserProfile.propTypes = {
  // getAUserProduct: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  addMessage: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  getAllProducts: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.any).isRequired,
  loading: PropTypes.bool.isRequired,
};
