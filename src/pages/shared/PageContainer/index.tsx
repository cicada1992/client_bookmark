import React from 'react';
import styled from 'styled-components';
import Body from './Body';
import Gnb from './Gnb';

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

interface Props {
  children: React.ReactNode;
}

const PageContainer: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <Gnb />
      <Body>{children}</Body>
    </Container>
  );
};

export default PageContainer;
