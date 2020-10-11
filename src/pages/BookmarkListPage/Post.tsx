import { boxShadow } from '@src/lib/styleUtils';
import { Bookmark } from '@src/types';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  padding: 15px 20px;
  border-radius: 6px;
  background: #eee;
  ${boxShadow(0.25)};
`;

interface Props {
  bookmark: Bookmark;
}

const Post: React.FC<Props> = ({ bookmark }) => {
  const { title, link } = bookmark;
  return (
    <Container>
      <div>Title: {title}</div>
      <div>Link: {link}</div>
    </Container>
  );
};

export default Post;
