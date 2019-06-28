/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { deleteAProduct } from '../../store/actions/products';

const Div = styled.div`
    display: flex;
    border: 1px solid #ddd;
    justify-content: center;
    align-items: center;
`;

const Btn = (props) => {
  const { show, id, deleteAProduct } = props;
  return (
    <Div>
      <Button
        variant="contained"
        color="primary"
        style={{ margin: '1rem' }}
        onClick={e => show(e)(id)}
      >
Update

      </Button>
      <Button
        variant="contained"
        color="secondary"
        style={{ margin: '1rem' }}
        onClick={() => deleteAProduct(id)}
      >
Delete

      </Button>
    </Div>

  );
};

export default connect(null, { deleteAProduct })(Btn);
