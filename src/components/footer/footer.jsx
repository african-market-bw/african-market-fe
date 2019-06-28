import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    clear: both;
    position: relative;
    display: flex;
    width: 100%;
    height: 60px;
    background-color: #1846BA;
    color: white;
    footer {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
const Footer = () => (
  <Div>
    <footer>
      <span>Copyright @lambda build week</span>
    </footer>
  </Div>
);

export default Footer;
