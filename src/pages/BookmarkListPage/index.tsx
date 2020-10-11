import BookmarksStore from '@src/stores/BookmarksStore';
import React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import PageArticle from '../shared/PageArticle';
import Post from './Post';

const PageBody = styled.div`
  width: 100%;
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
  const bookmarksStore = BookmarksStore.instantiate();
  const { allBookmarks } = bookmarksStore;

  return (
    <PageArticle title="북마크 리스트">
      <PageBody>
        {allBookmarks.map((bookmark) => (
          <Post key={bookmark.id} bookmark={bookmark} />
        ))}
      </PageBody>
    </PageArticle>
  );
});

export default BookmarkListPage;
