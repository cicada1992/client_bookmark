import React from 'react';
import styled from 'styled-components';
import PageArticle from '../shared/PageArticle';

const PageBody = styled.div`
  & > div:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const AuthPage: React.FC = () => {
  return (
    <PageArticle title="Auth Page">
      <PageBody>
        <div>Auth</div>
      </PageBody>
    </PageArticle>
  );
};

export default AuthPage;
