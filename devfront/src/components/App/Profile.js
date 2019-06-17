import React, { Component } from 'react';
import { Button, Header, Segment, Grid, Input, Form  } from 'semantic-ui-react';

import './profile.scss';

class Profile extends Component {
  componentDidMount() {
    this.props.requestProfile();
  }

  render() {
    const { loadProfile, userProfile } = this.props;
    return (
      <div id="profile">
      <Header as='h3'>PROFIL</Header>
        {loadProfile && <p> Chargement de vos informations personelles</p>}
        {loadProfile || (
          <Grid textAlign='center' className="profile-content">
              <div>
                <h4>Paramètres</h4>
                <h6>Vos informations</h6>
                <Segment>
                  <p>Votre pseudo: {userProfile.pseudo}</p><Button>Modifier votre pseudo</Button>
                  <p>Votre email: {userProfile.email}</p>
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
        )} 
      </div>
    );
  }
}

export default Profile;
