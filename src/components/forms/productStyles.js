import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 300px;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    border: 1px solid #ddd;
    height: 100%;

    input {
      border: 1px solid #ddd;
      &:hover {
        width: 93%;
        transition: all 5 ease-out;
      }
    }

    input,button {
      margin: 5px;
      width: 90%;
      padding: 5px;
      height: 25px;
      outline: none;
    }

    button {
      height: 30px;
      background-color: #4040a1;
      color: #fff;
      cursor: pointer;
      &:hover {
        width: 99%;
        background-color: #36486b;
        transition: all 5 ease-in-out;
      }
    }
  }
`;

export default Div;
