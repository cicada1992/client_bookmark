import React from 'react';
import styled from 'styled-components';

const Article = styled.article`
  position: relative;
  left: 20px;
  max-width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 15px 20px;
  border: solid 1px #ccc;
  border-radius: 3px;
  background: #fff;
  overflow-y: scroll;
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

const PageArticle: React.FC<Props> = ({ title, children }) => {
  return (
    <Article>
      <Container>
        <Title>{title}</Title>
        {children}
      </Container>
    </Article>
  );
};

export default PageArticle;
