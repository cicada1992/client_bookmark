import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  min-width: 500px;
  padding-top: 60px;
  background: #ddd;
`;

interface Props {
  children: React.ReactNode;
}

const Body: React.FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Body;
