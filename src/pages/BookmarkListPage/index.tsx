import RootStore from '@src/stores';
import React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import PageSection from '../shared/PageSection';
import Post from './Post';
import { Container } from '@material-ui/core';

const StyledContainer = styled(Container)`
  display: flex;
  max-width: 1000px;
  margin: 0;
`;

const PageBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-width: 600px;

  & > :not(:first-child) {
    margin-top: 20px;
  }
`;

const Spacer = styled.div`
  width: 15px;
`;

const BookmarkListPage: React.FC = observer(() => {
  const {
    bookmarks: bookmarksStore,
    directories: directoriesStore
  } = RootStore.getOrMakeInstance();
  const { allBookmarks } = bookmarksStore;
  const { allDirectories } = directoriesStore;

  return (
    <StyledContainer>
      <PageSection title="북마크 리스트">
        <PageBody>
          {allBookmarks.map((bookmark) => (
            <Post key={bookmark.id} bookmark={bookmark} />
          ))}
        </PageBody>
      </PageSection>
      <Spacer />
      <PageSection title="디렉토리">
        {allDirectories.map((directory) => (
          <div key={directory.id}>{directory.label}</div>
        ))}
      </PageSection>
    </StyledContainer>
  );
});

export default BookmarkListPage;
