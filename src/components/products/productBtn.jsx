import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';


const Div = styled.div`
    display: flex;
    border: 1px solid #ddd;
    justify-content: center;
    align-items: center;
`;

const Btn = ({ show, id }) => {
  console.log(id);
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
      >
Delete

      </Button>
    </Div>

  );
};

export default Btn;
