import React from 'react';
import styled from 'styled-components';
import PageArticle from '../shared/PageArticle';
import Post from './Post';

const PageBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  & > :not(:first-child) {
    margin-top: 20px;
  }
`;

const BookmarkListPage: React.FC = () => {
  return (
    <PageArticle title="북마크 리스트">
      <PageBody>
        <Post content="Post 1" />
        <Post content="Post 2" />
      </PageBody>
    </PageArticle>
  );
};

export default BookmarkListPage;
