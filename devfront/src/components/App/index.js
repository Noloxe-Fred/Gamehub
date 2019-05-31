// == Import : npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

// == Import : local
import './app.scss';
import NavBar from 'src/containers/NavBar';
// import Home from 'src/containers/Home';
// import FullList from 'src/containers/FullList';
// import Search from 'src/containers/Search';
// import AdvancedSearch from 'src/containers/AdvancedSearch';

// == Composant
const App = () => (
  <div id="app">
    <NavBar />
    {/* <Switch>
      <Route
        exact
        path="/"
        component={Home}
      />
      <Route
        path="/fulllist/:slug"
        component={FullList}
      />
      <Route
        path='search'
        component={Search}
      />
      <Route
        path='advancedsearch'
        component={AdvancedSearch}
      />
    </Switch> */}
  </div>
);

// == Export
export default App;
