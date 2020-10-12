import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  background: #333;
  z-index: 10000;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: white;
  font-weight: bold;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: white;
  font-weight: bold;
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100%;
  text-decoration: none;
  color: white;

  &:hover {
    background: #111;
  }
`;

const Gnb: React.FC = () => {
  return (
    <Container>
      <Left>
        <StyledLink to="/">Bookmarks</StyledLink>
      </Left>
      <Right>
        <StyledLink to="/bookmark/new">북마크 추가</StyledLink>
        <StyledLink to="/auth">Auth</StyledLink>
      </Right>
    </Container>
  );
};

export default Gnb;
