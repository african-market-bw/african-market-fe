import React from 'react';
import PropTypes from 'prop-types';
import './product.css';

const Products = ({ product, children }) => (
  <div className="Card">
    <div className="Overlay">
      {children}
    </div>
    <h2>{product.name}</h2>
    <p>
Description:
      {' '}
      {product.description}
    </p>
    <p>
Price:
      {' '}
      {product.price}
    </p>
    <p>
Location:
      {' '}
      {product.location}
    </p>
  </div>
);

export default Products;

Products.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
};
