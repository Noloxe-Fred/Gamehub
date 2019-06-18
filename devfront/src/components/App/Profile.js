import React, { Component } from 'react';
import { Button, Header, Segment, Grid, Row, Column, Input, Form } from 'semantic-ui-react';

import './profile.scss';

class Profile extends Component {
  componentDidMount() {
    this.props.requestProfile();
  }
 
  render() {
    const { loadProfile, userProfile } = this.props;
    return (
      <div id="profile">
      <Header as='h3'><span><i class="fas fa-dot-circle"></i></span>MES INFORMATIONS PERSONNELLES<span><i class="fas fa-dot-circle"></i></span></Header> 
        {loadProfile && <p> Chargement de vos informations personelles</p>}
        {loadProfile || (
          <Grid textAlign='center' className="profile-content">
            <Grid.Row> 
              <div className="left--profile">
                <h4>Paramètres</h4>
                <Segment className="infos--pseudo">
                  <p>Votre pseudo : <span>{userProfile.pseudo}</span></p><Button>Modifier votre pseudo</Button>
                  <p>Votre email : <span>{userProfile.email}</span></p>
                </Segment>
                <Segment className="infos--password">
                  <h6>Changer votre mot de passe</h6>
                  <Form className="form--infos--password">
                    <Input
                      placeholder="Ancien mot de passe"
                    />
                    <Input
                      placeholder="Nouveau mot de passe"
                    />
                    <Input
                      placeholder="Confirmation nouveau mot de passe"
                    />
                    <Button type="submit">Modifier votre mot de passe</Button>
                  </Form>
                </Segment>
              </div>
              <div className="central--profile">
                <h4>Stats</h4>
                <Segment className="stats--content">
                  <p>Vous avez <span>37</span> jeux en votre possession</p>
                  <p>Vous avez <span>12</span> jeux en liste d'achats</p>
                  <p>Vous suivez <span>12</span> jeux</p>
                </Segment>
              </div>
              <div className="right--profile">
                <h4>Commentaires</h4>
                <Segment>Commentaire 1</Segment>
                <Segment>Commentaire 2</Segment>
                <Segment>Commentaire 3</Segment>
                <Segment>Commentaire 4</Segment>
              </div>
            </Grid.Row>
        </Grid>
        )} 
      </div>
    );
  }
}

export default Profile;
