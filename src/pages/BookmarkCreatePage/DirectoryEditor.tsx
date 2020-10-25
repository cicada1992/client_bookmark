import { Button, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { FooterButtonWrapper } from '@src/lib/sharedStyledComponents';
import RootStore from '@src/stores';
import { isEmpty } from 'lodash';
import { observer } from 'mobx-react';
import React, { ChangeEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const PageBody = styled.div``;

interface Props {
  baseDirectoryName?: string;
  onClickNext: (directoryName: string) => void;
}

const DirectoryEditor: React.FC<Props> = observer(({ baseDirectoryName = '', onClickNext }) => {
  const [directoryName, setDirectoryName] = useState(baseDirectoryName);
  const history = useHistory();

  const directoriesStore = RootStore.getOrMakeInstance().directories;
  const directories = directoriesStore.allDirectories;
  const hasDirectories = !isEmpty(directories);

  const handleDirectoryNameChange = (evt: ChangeEvent<HTMLSelectElement>) => {
    setDirectoryName(evt.target.value);
  };

  const handleNextButtonClick = () => {
    onClickNext(directoryName);
  };

  const handleCreateButtonClick = () => {
    history.push('/directory/new');
  };

  return (
    <PageBody>
      {hasDirectories ? (
        <form autoComplete="off">
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
      ) : (
        <div>디렉토리가 없습니다. 아래 버튼을 눌러서 새롭게 추가해 주세요 😃</div>
      )}
      <FooterButtonWrapper>
        {hasDirectories && (
          <Button
            variant="contained"
            color="primary"
            onClick={handleNextButtonClick}
            disabled={!directoryName}
          >
            다음
          </Button>
        )}
        <Button variant="contained" onClick={handleCreateButtonClick}>
          디렉토리 추가하기
        </Button>
      </FooterButtonWrapper>
    </PageBody>
  );
});

export default DirectoryEditor;
