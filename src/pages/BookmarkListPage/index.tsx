import RootStore from '@src/stores';
import React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import PageArticle from '../shared/PageArticle';
import Post from './Post';
import PageAside from '../shared/PageAside';

const PageBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  & > :not(:first-child) {
    margin-top: 20px;
  }
`;

const BookmarkListPage: React.FC = observer(() => {
  const {
    bookmarks: bookmarksStore,
    directories: directoriesStore
  } = RootStore.getOrMakeInstance();
  const { allBookmarks } = bookmarksStore;
  const { allDirectories } = directoriesStore;

  return (
    <>
      <PageArticle title="북마크 리스트">
        <PageBody>
          {allBookmarks.map((bookmark) => (
            <Post key={bookmark.id} bookmark={bookmark} />
          ))}
        </PageBody>
      </PageArticle>
      <PageAside title="디렉토리">
        {allDirectories.map((directory) => (
          <div key={directory.id}>{directory.label}</div>
        ))}
      </PageAside>
    </>
  );
});

export default BookmarkListPage;
