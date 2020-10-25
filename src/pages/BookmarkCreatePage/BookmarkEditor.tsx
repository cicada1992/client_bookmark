import { Button, TextField } from '@material-ui/core';
import RootStore from '@src/stores';
import { observer } from 'mobx-react';
import React, { ChangeEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const PageBody = styled.div`
  & > form > * {
    margin-bottom: 10px;
  }
`;

const BookmarkEditor: React.FC = observer(() => {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const history = useHistory();

  const bookmarksStore = RootStore.getOrMakeInstance().bookmarks;

  const handleTitleInputchange = (evt: ChangeEvent<HTMLInputElement>) => {
    setTitle(evt.target.value);
  };

  const handleLinkInputchange = (evt: ChangeEvent<HTMLInputElement>) => {
    setLink(evt.target.value);
  };

  const handleButtonClick = () => {
    setTitle('');
    setLink('');
    bookmarksStore.addBookmark({ id: 'new-id', title, link, directoryName: '' });
    history.push('/');
  };

  return (
    <PageBody>
      <form autoComplete="off">
        <TextField
          id="outlined-basic"
          label="타이틀"
          variant="outlined"
          fullWidth
          placeholder="타이틀을 입력해 주세요."
          onChange={handleTitleInputchange}
        />
        <TextField
          id="outlined-basic"
          label="링크"
          variant="outlined"
          fullWidth
          placeholder="링크를 입력해 주세요."
          onChange={handleLinkInputchange}
        />
      </form>
      <Button variant="contained" color="primary" onClick={handleButtonClick}>
        추가하기
      </Button>
    </PageBody>
  );
});

export default BookmarkEditor;
