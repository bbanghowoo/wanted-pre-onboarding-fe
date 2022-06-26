import React, { useContext } from 'react';
import styled from 'styled-components';

import { AuthContext } from '../contexts/AuthContext';

const NavigationBar = () => {
  const context = useContext(AuthContext);

  const { logout } = context;

  const handleLogout = () => {
    localStorage.removeItem('accountInformation');

    logout();
  };

  return (
    <Nav>
      <h1>Instagram</h1>
      <SearchBox placeholder="검색" />
      <IconContainer>
        <Icon />
        <Icon />
        <Icon onClick={handleLogout}>logout</Icon>
      </IconContainer>
    </Nav>
  );
};

export default NavigationBar;

const Nav = styled.nav`
  display: flex;
  position: sticky;
  top: 0;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  border: 1px solid #dbdbdb;
  background-color: white;

  @media screen and (max-width: 500px) {
    justify-content: space-between;
  }
`;

const SearchBox = styled.input`
  height: 36px;
  width: 268px;
  background-color: #efefef;
  padding: 0 16px;

  @media screen and (max-width: 500px) {
    visibility: hidden;
  }
`;

const IconContainer = styled.div`
  display: flex;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: 36px;
  margin-left: 7px;
  background-color: #efefef;
  cursor: pointer;
`;
