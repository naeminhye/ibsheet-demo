import React from 'react';
import styled from 'styled-components';
import logo from 'static/images/logo.png';

const StyledLogo = styled.div`
  display: flex;
  float: left;
  height: 64px;
  img {
    padding: 16px 0;
  }
  h1 {
    padding-left: 10px;
    margin: 0;
    color: #ffffff;
    font-weight: bold;
  }
`;

function Logo() {
  return (
    <StyledLogo>
      <img src={logo} alt="logo" />
      <h1>인사시스템</h1>
    </StyledLogo>
  );
}

export default Logo;
