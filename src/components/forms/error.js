import styled from 'styled-components';

const Error = styled.div`
  display: ${props => (props.primary ? 'none' : 'flex')};
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  border: 1px solid #ddd;
  color: red;
  span{
    cursor: pointer;
    color: #ddd;
    &:hover{
      border-radius: 50%;
      background-color: lightblue;
    }
  }
  p {
    margin-right: 5rem;
    text-align: center;
  }
`;

export default Error;
