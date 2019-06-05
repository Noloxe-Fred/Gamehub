// == Import : npm
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

// == Import : local
import './app.scss';
import Navbar from 'src/components/Navbar';
import Home from 'src/components/Home';
import GamePage from 'src/containers/GamePage/gamePageContainer';
import Page404 from 'src/components/Page404';

// == Composant
class App extends Component {

  componentDidMount() {
    const { connectSavedUser } = this.props;

    if (localStorage.getItem('connect') && localStorage.getItem('remember')) {
      connectSavedUser();
    }
  }

  componentWillUnmount() {
    const { disconnectUser } = this.props;

    if ( localStorage.getItem('remember')===false ) {
      console.log('disconnect');
      disconnectUser();
    }
  }

  render() {
    console.log('LocalStorage on App:', localStorage);
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
            component={Page404}
          />
        </Switch>
      </div>
    );
  }
}

// == Export
export default App;
