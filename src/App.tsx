import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AuthPage, BookmarkCreatePage, BookmarkListPage } from './pages';
import PageContainer from './pages/shared/PageContainer';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <BrowserRouter>
      <PageContainer>
        <Switch>
          <Route path="/auth">
            <AuthPage />
          </Route>
          <Route path="/new">
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
