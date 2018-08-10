import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Header from './components/Header/Header';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import UserPage from './components/UserPage/UserPage';
import InfoPage from './components/InfoPage/InfoPage';
import Stats from './components/Stats/Stats';

import AddItem from './components/AddItem/AddItem'

import ViewShelfPage from './components/ViewShelfPage/ViewShelfPage';


import './styles/main.css';

const App = () => (
  <div>
    <Header title="Project Base" />
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route
          path="/home"
          component={LoginPage}
        />
        <Route
          path="/register"
          component={RegisterPage}
        />
        <Route
          path="/user"
          component={UserPage}
        />
        <Route
          path="/info"
          component={InfoPage}
        />
        <Route
          path="/add"
          component={AddItem}
          />
        <Route
          path="/view"
          component={ViewShelfPage}
        />
        <Route
          path="/stats"
          component={Stats}
        />
      </Switch>
    </Router>
  </div>
);

export default App;
