// == Import : npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

// == Import : local
import './app.scss';
import Navbar from 'src/components/Navbar';
import Home from 'src/components/Home';
import GamePage from 'src/containers/GamePage/gamePageContainer';

// == Composant
const App = () => (
  <div id="app">
    <Navbar />
    <Switch>
      <Route
        exact
        path="/"
        component={Home}
      />
      <Route
        path="/game/:id"
        component={GamePage}
      />
    
    </Switch>
  </div>
);

// == Export
export default App;
