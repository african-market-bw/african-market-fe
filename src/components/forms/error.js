import styled from 'styled-components';

const Error = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border: 1px solid salmon;
  color: red;
  span{
    cursor: pointer;
    &:hover{
      border-radius: 50%;
      background-color: salmon;
    }
  }
  p {
    margin-right: 5rem;
  }
`;

export default Error;
