import { useState } from 'react';
import Layout from './pages/Layout';
import Header from './components/Header';
import Feed from './components/Feed/Feed';
import Profile from './pages/Profile/Profile';

import { Switch, Route, Redirect } from 'react-router-dom';
import Auth from './pages/Auth/Auth';

function App(props) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <>
      <Switch>
        {isAuthenticated ? (
          <>
            <Header />
            <Route path='/authenticate'>
              <Redirect
                to={{
                  pathname: '/',
                  state: {
                    from: props.location,
                  },
                }}
              />
            </Route>
            <Route path='/' exact>
              <Layout>
                <Feed />
              </Layout>
            </Route>
            <Route path='/profile' exact>
              <Layout>
                <Profile />
              </Layout>
            </Route>
            <Route path='/profile/:id'>
              <Layout>
                <Profile user />
              </Layout>
            </Route>
          </>
        ) : (
          <>
            <Redirect
              to={{
                pathname: '/authenticate',
                state: {
                  from: props.location,
                },
              }}
            />
            <Route path='/authenticate'>
              <Auth />
            </Route>
          </>
        )}
        {/* {!isAuthenticated ? (
          <Route path='/authenticate'>
            <Auth />
          </Route>
        ) : (
          <>
            <Header />

            <Route path='/' exact>
              <Home>
                <Feed />
              </Home>
            </Route>
            <Route path='/profile' exact>
              <Home>
                <Profile />
              </Home>
            </Route>
            <Route path='/profile/:id'>
              <Home>
                <Profile user />
              </Home>
            </Route>
          </>
        )} */}
      </Switch>
    </>
  );
}

export default App;
