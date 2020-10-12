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

const DirectoryCreatePage: React.FC = observer(() => {
  const [label, setLabel] = useState('');
  const directoriesStore = RootStore.getOrMakeInstance().directories;
  const handleButtonClick = () => {
    directoriesStore.addDirectory({ id: 'new-id', label, bookmarks: [] });
  };

  return (
    <PageArticle title="디렉토리 추가하기">
      <PageBody>
        <TextInput label="제목" value={label} onChange={setLabel} />
        <button onClick={handleButtonClick}>추가하기</button>
      </PageBody>
    </PageArticle>
  );
});

export default DirectoryCreatePage;
