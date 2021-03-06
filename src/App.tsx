import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AuthPage, BookmarkCreatePage, BookmarkListPage } from './pages';
import DirectoryCreatePage from './pages/DirectoryCreatePage';
import PageContainer from './pages/shared/PageContainer';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <PageContainer>
        <Switch>
          <Route path="/auth">
            <AuthPage />
          </Route>
          <Route path="/directory/new">
            <DirectoryCreatePage />
          </Route>
          <Route path="/bookmark/new">
            <BookmarkCreatePage />
          </Route>
          <Route path="/">
            <BookmarkListPage />
          </Route>
        </Switch>
      </PageContainer>
    </BrowserRouter>
  );
};

export default App;
