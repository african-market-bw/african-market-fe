import React from 'react';
import PropTypes from 'prop-types';
import './product.css';
import faker from 'faker';

const productImg = faker.random.image();
// eslint-disable-next-line react/prop-types
const Products = ({ product, children }) => (
  <div className="Card">
    <div className="Overlay">
      {children}
    </div>
    <img src={productImg} alt="images" loading="eager" />
    <h2>{product.name}</h2>
    <div className="Container">
      <div className="Container-left">
        <p>
Description:
          {' '}
          {product.description}
        </p>
        <p>
Location:
          {' '}
          {product.location}
        </p>
      </div>
      <div className="Container-right">
        <p>
Price:
          {' '}
          {product.price}
        </p>
      </div>
    </div>
  </div>
);

export default Products;

Products.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
};
