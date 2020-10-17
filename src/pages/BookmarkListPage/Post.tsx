import { Card, CardContent } from '@material-ui/core';
import { Bookmark } from '@src/types';
import React from 'react';

interface Props {
  bookmark: Bookmark;
}

const Post: React.FC<Props> = ({ bookmark }) => {
  const { title, link } = bookmark;
  return (
    <Card style={{ width: '100%', background: '#eee' }}>
      <CardContent>
        <div>Title: {title}</div>
        <div>Link: {link}</div>
      </CardContent>
    </Card>
  );
};

export default Post;
