import TextInput from '@src/components/TextInput';
import React from 'react';
import styled from 'styled-components';
import PageArticle from '../shared/PageArticle';

const PageBody = styled.div`
  & > div:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const BookmarkCreatePage: React.FC = () => {
  return (
    <PageArticle title="새로 추가하기">
      <PageBody>
        <TextInput label="제목" value="" onChange={null} />
        <TextInput label="링크" value="" onChange={null} />
      </PageBody>
    </PageArticle>
  );
};

export default BookmarkCreatePage;
