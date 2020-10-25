import qs from 'qs';
import React, { useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import BookmarkEditor from './BookmarkEditor';
import DirectoryEditor from './DirectoryEditor';
import PageSection from '../shared/PageSection';

interface BookmarkCreatePageQuery {
  directoryName?: string;
}

interface Props extends RouteComponentProps<{}> {}

const BookmarkCreatePage: React.FC<Props> = ({ location }) => {
  const [directory, setDirectory] = useState('');
  const query = qs.parse(location.search, { ignoreQueryPrefix: true }) as BookmarkCreatePageQuery;
  const noDirectory = !directory;

  return (
    <PageSection title={noDirectory ? '1. 디렉토리' : '2. 북마크'}>
      {noDirectory ? (
        <DirectoryEditor baseDirectoryName={query.directoryName} onClickNext={setDirectory} />
      ) : (
        <BookmarkEditor />
      )}
    </PageSection>
  );
};

export default withRouter(BookmarkCreatePage);
