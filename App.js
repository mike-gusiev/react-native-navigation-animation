import React, { useState } from 'react';
import { NativeRouter, Redirect, Route } from 'react-router-native';
import Layout from './components/Layout';
import Navigation from './components/Navigation';
import { routes } from './routes';

const App = () => {
  const [ menuOpen, setMenuOpen ] = useState(false);
  return (
    <Layout>
      <NativeRouter>
        <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        {routes.map(({ link, Component }) => (
          <Route exact path={link} key={link}>
            <Component menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          </Route>
        ))}
        <Redirect exact from='/' to='/start'/>
      </NativeRouter>
    </Layout>
  );
};

export default App;
