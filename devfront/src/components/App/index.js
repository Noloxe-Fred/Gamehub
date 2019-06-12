// == Import : npm
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

// == Import : local
import './app.scss';
import Navbar from 'src/containers/Navbar/Navbar';
import Home from 'src/components/Home';
import GamePage from 'src/containers/GamePage/gamePageContainer';
import Collection from 'src/containers/User/CollectionContainer';
import AdvancedSearchPage from 'src/containers/AdvancedSearchPage';
import Page404 from 'src/components/Page404';

// == Composant
class App extends Component {

  componentDidMount() {
    const rememberUser = localStorage.getItem('remember');
    const { connect, connectSavedUser } = this.props;

    if (!connect && rememberUser === 'false') {
      localStorage.clear();
    }
    if (!connect && rememberUser === 'true') {
      connectSavedUser();
    }
  }

  render() {
    return (
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
          <Route
            path="/collection"
            component={Collection}
          />
          <Route
            path="/advancedsearch"
            component={AdvancedSearchPage}
          />
          <Route
            component={Page404}
          />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  connect: PropTypes.bool.isRequired,
  connectSavedUser: PropTypes.func.isRequired,
};

// == Export
export default App;
