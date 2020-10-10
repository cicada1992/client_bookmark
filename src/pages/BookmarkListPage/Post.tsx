import { boxShadow } from '@src/lib/styleUtils';
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
  content: string;
}

const Post: React.FC<Props> = ({ content }) => {
  return <Container>{content}</Container>;
};

export default Post;
