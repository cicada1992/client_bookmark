import TextInput from '@src/components/TextInput';
import RootStore from '@src/stores';
import { observer } from 'mobx-react';
import React, { useState } from 'react';
import styled from 'styled-components';
import PageArticle from '../shared/PageArticle';

const PageBody = styled.div`
  & > div:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const BookmarkCreatePage: React.FC = observer(() => {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const bookmarksStore = RootStore.getOrMakeInstance().bookmarks;
  const handleButtonClick = () => {
    bookmarksStore.addBookmark({ id: 'new-id', title, link });
  };

  return (
    <PageArticle title="새로 추가하기">
      <PageBody>
        <TextInput label="제목" value={title} onChange={setTitle} />
        <TextInput label="링크" value={link} onChange={setLink} />
        <button onClick={handleButtonClick}>추가하기</button>
      </PageBody>
    </PageArticle>
  );
});

export default BookmarkCreatePage;
