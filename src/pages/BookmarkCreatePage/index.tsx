import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import RootStore from '@src/stores';
import { observer } from 'mobx-react';
import React, { ChangeEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import PageSection from '../shared/PageSection';

const PageBody = styled.div`
  & > form > * {
    margin-bottom: 10px;
  }
`;

const BookmarkCreatePage: React.FC = observer(() => {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [directoryName, setDirectoryName] = useState('');
  const history = useHistory();

  const bookmarksStore = RootStore.getOrMakeInstance().bookmarks;
  const directoriesStore = RootStore.getOrMakeInstance().directories;
  const directories = directoriesStore.allDirectories;

  const handleTitleInputchange = (evt: ChangeEvent<HTMLInputElement>) => {
    setTitle(evt.target.value);
  };

  const handleLinkInputchange = (evt: ChangeEvent<HTMLInputElement>) => {
    setLink(evt.target.value);
  };

  const handleDirectoryNameChange = (evt: ChangeEvent<HTMLSelectElement>) => {
    setDirectoryName(evt.target.value);
  };

  const handleButtonClick = () => {
    setTitle('');
    setLink('');
    setDirectoryName('');
    bookmarksStore.addBookmark({ id: 'new-id', title, link, directoryName });
    history.push('/');
  };

  return (
    <PageSection title="북마크 추가하기">
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
          <FormControl variant="outlined" style={{ width: '100%' }}>
            <InputLabel id="demo-simple-select-outlined-label">디렉토리</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              label="디렉토리"
              value={directoryName}
              onChange={handleDirectoryNameChange}
            >
              {directories.map(({ id, label }) => (
                <MenuItem key={id} value={label}>
                  {label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </form>
        <Button variant="contained" color="primary" onClick={handleButtonClick}>
          추가하기
        </Button>
      </PageBody>
    </PageSection>
  );
});

export default BookmarkCreatePage;
