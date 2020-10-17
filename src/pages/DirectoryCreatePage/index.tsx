import { Button, TextField } from '@material-ui/core';
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

const DirectoryCreatePage: React.FC = observer(() => {
  const [label, setLabel] = useState('');
  const [error, setError] = useState(null);
  const directoriesStore = RootStore.getOrMakeInstance().directories;
  const history = useHistory();

  const handleLabelInputchange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    if (value.length >= 1) {
      setError(null);
    }
    setLabel(value);
  };

  const handleButtonClick = () => {
    if (!label) {
      return setError('타이틀을 입력해 주세요.');
    }

    setLabel('');
    directoriesStore.addDirectory({ id: 'new-id', label, bookmarks: [] });
    history.push('/bookmark/new');
  };

  return (
    <PageSection title="디렉토리 추가하기">
      <PageBody>
        <form autoComplete="off">
          <TextField
            id={error ? 'outlined-error' : 'outlined-basic'}
            label={'타이틀'}
            variant="outlined"
            fullWidth
            placeholder="타이틀을 입력해 주세요."
            error={error}
            helperText={error && '타이틀을 입력해 주세요.'}
            onChange={handleLabelInputchange}
          />
        </form>
        <Button
          variant="contained"
          color="primary"
          onClick={handleButtonClick}
          disabled={label.length < 1}
        >
          추가하기
        </Button>
      </PageBody>
    </PageSection>
  );
});

export default DirectoryCreatePage;
