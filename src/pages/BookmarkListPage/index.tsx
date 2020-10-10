import { Article } from '@src/lib/styles';
import React from 'react';
import styled from 'styled-components';
import Post from './Post';

const PostWrapper = styled.div`
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
    <Article>
      <PostWrapper>
        <Post content="Post 1" />
        <Post content="Post 2" />
      </PostWrapper>
    </Article>
  );
};

export default BookmarkListPage;
