import React from 'react';
import styled from 'styled-components';

const Article = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: solid 1px #ccc;
  border-radius: 3px;
  padding: 15px 20px;
  background: #fff;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const PageTitle = styled.div`
  margin-bottom: 24px;
  font-size: 20px;
  font-weight: bold;
`;

interface Props {
  title: string;
  children: React.ReactNode;
}

const PageArticle: React.FC<Props> = ({ title, children }) => {
  return (
    <Article>
      <Container>
        <PageTitle>{title}</PageTitle>
        {children}
      </Container>
    </Article>
  );
};

export default PageArticle;
