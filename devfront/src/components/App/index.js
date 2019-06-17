// == Import : npm
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Segment, Sidebar } from 'semantic-ui-react';


// == Import : local
import './app.scss';
import Navbar from 'src/containers/Navbar/Navbar';
import Profile from 'src/containers/User/profileContainer';
import Home from 'src/components/Home';
import GamePage from 'src/containers/GamePage/gamePageContainer';
import Collection from 'src/containers/User/CollectionContainer';
import AdvancedSearchPage from 'src/containers/AdvancedSearchPage';
import SearchResult from 'src/containers/searchResultContainer';


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

  componentDidUpdate() {
    // console.log('Composant Update');
  }

  render() {
    const { redirectSearch, displayedProfile } = this.props;
    return (
      <div id="app">
        {redirectSearch && <Redirect to="/search" />}
        {/* {sessionStorage.getItem('disconnect') && <Redirect to="/" />} */}
        <Navbar />

        <Sidebar.Pushable>
          <Sidebar as={Segment} animation="overlay" direction="top" visible={displayedProfile}>
            <Profile />
          </Sidebar>
          <Sidebar.Pusher dimmed={displayedProfile}>

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
                path="/search"
                component={SearchResult}
              />
              <Route
                path="/advancedsearch"
                component={AdvancedSearchPage}
              />
              <Route
                component={Page404}
              />
            </Switch>

          </Sidebar.Pusher>
        </Sidebar.Pushable>

      </div>
    );
  }
}

App.propTypes = {
  connect: PropTypes.bool.isRequired,
  connectSavedUser: PropTypes.func.isRequired,
  redirectSearch: PropTypes.bool.isRequired,
  displayedProfile: PropTypes.bool.isRequired,
};

// == Export
export default App;
