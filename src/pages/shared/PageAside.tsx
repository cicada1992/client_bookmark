import React from 'react';
import styled from 'styled-components';

const Aside = styled.aside`
  position: fixed;
  top: 60px;
  left: 840px;
  width: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 15px 20px;
  border: solid 1px #ccc;
  border-radius: 3px;
  background: #fff;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Title = styled.div`
  margin-bottom: 24px;
  font-size: 18px;
  font-weight: bold;
  color: #444;
`;

interface Props {
  title: string;
  children: React.ReactNode;
}

const PageAside: React.FC<Props> = ({ title, children }) => {
  return (
    <Aside>
      <Container>
        <Title>{title}</Title>
        {children}
      </Container>
    </Aside>
  );
};

export default PageAside;
