// == Import : npm
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Progress, Button, Header, Icon, Image, Menu, Segment, Sidebar, SidebarPushable, Grid, Row, Column, Input, Form  } from 'semantic-ui-react';


// == Import : local
import './app.scss';
import Navbar from 'src/containers/Navbar/Navbar';
import Home from 'src/components/Home';
import GamePage from 'src/containers/GamePage/gamePageContainer';
import Collection from 'src/containers/User/CollectionContainer';

import AdvancedSearchPage from 'src/containers/AdvancedSearchPage';

import SearchResult from 'src/containers/searchResultContainer';


import Page404 from 'src/components/Page404';

import Footer from 'src/components/Footer';

// == Composant
class App extends Component {
  componentDidMount() {
    console.log('Composant Monté!');
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
    console.log('Composant Update');
  }

  render() {
    const { redirectSearch, displayedProfile } = this.props;
    return (
      <div id="app">
        {redirectSearch && <Redirect to="/search" />}
        {/* {sessionStorage.getItem('disconnect') && <Redirect to="/" />} */}
        <Navbar />
        <Switch>
        <Sidebar.Pushable>

        <Sidebar as={Segment} animation="overlay" direction="top" visible={displayedProfile}>
          <Header as='h3'>PROFIL</Header>
          <Grid textAlign='center' className="profile-content">
                <div>
                  <h4>Paramètres</h4>
                  <h6>Vos informations</h6>
                  <Segment>
                    <p>Votre pseudo:</p><Button>Modifier votre pseudo</Button>
                    <p>Votre email:</p>
                  </Segment>
                  <Segment>
                    <h6>Changer votre mot de passe</h6>
                    <Form>
                      <Input
                        placeholder="Ancien mot de passe"
                      />
                      <Input
                        placeholder="Nouveau mot de passe"
                      />
                      <Input
                        placeholder="Confirmation nouveau mot de passe"
                      />
                      <Button type="submit">Modifier</Button>
                    </Form>
                  </Segment>
                </div>
                <div>
                  <h4>Stats</h4>
                  <h6>Votre collection</h6>
                  <Segment>
                    <p>Vous avez 37 jeux en votre possession</p>
                    <p>Vous avez 12 jeux en liste d'achats</p>
                    <p>Vous suivez 12 jeux</p>
                  </Segment>
                </div>
                <div>
                  <h4>Commentaires</h4>
                  <Segment>Commentaire 1</Segment>
                  <Segment>Commentaire 2</Segment>
                  <Segment>Commentaire 3</Segment>
                  <Segment>Commentaire 4</Segment>
                </div>
          </Grid>
        </Sidebar>
        <Sidebar.Pusher dimmed={displayedProfile}>
  
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
 
        </Sidebar.Pusher>
      </Sidebar.Pushable>
      </Switch>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  connect: PropTypes.bool.isRequired,
  connectSavedUser: PropTypes.func.isRequired,
  redirectSearch: PropTypes.string.isRequired,
};

// == Export
export default App;
