import React from 'react';
import styled from 'styled-components';
import PageSection from '../shared/PageSection';

const PageBody = styled.div`
  & > div:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const AuthPage: React.FC = () => {
  return (
    <PageSection title="Auth Page">
      <PageBody>
        <div>Auth</div>
      </PageBody>
    </PageSection>
  );
};

export default AuthPage;
