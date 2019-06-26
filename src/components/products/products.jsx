import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    border: 1px solid #ddd;
    margin: .5rem 1rem;
`;

const Products = ({ product }) => (
  <Div>
    <h2>{product.product}</h2>
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
  </Div>
);

export default Products;

Products.propTypes = {
  product: PropTypes.shape({
    product: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
};
