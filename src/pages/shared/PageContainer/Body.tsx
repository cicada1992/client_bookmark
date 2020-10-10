import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  position: absolute;
  top: 60px;
  min-width: 500px;
  min-height: 500px;
`;

interface Props {
  children: React.ReactNode;
}

const Body: React.FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Body;
