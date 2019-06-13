import React, { Component } from 'react';

import './profile.scss';

class Profile extends Component {
  render() {
    return (
      <div id="profile">
        <Header as='h3'>PROFIL</Header>
        <Grid textAlign='center' className="profile-content">
              <div>
                <h4>Paramètres</h4>
                <Segment>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quam quasi tempore laboriosam sapiente, asperiores reiciendis facilis, corrupti cupiditate ratione impedit fugiat adipisci aut hic ipsam vitae beatae? Consequatur, fugiat.</Segment>
                <Segment>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quam quasi tempore laboriosam sapiente, asperiores reiciendis facilis, corrupti cupiditate ratione impedit fugiat adipisci aut hic ipsam vitae beatae? Consequatur, fugiat.</Segment>
              </div>
              <div>
                <h4>Stats</h4>
                <Segment>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quam quasi tempore laboriosam sapiente, asperiores reiciendis facilis, corrupti cupiditate ratione impedit fugiat adipisci aut hic ipsam vitae beatae? Consequatur, fugiat.</Segment>
              </div>
              <div>
                <h4>Commentaires</h4>
                <Segment>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quam quasi tempore laboriosam sapiente, asperiores reiciendis facilis, corrupti cupiditate ratione impedit fugiat adipisci aut hic ipsam vitae beatae? Consequatur, fugiat.</Segment>
                <Segment>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quam quasi tempore laboriosam sapiente, asperiores reiciendis facilis, corrupti cupiditate ratione impedit fugiat adipisci aut hic ipsam vitae beatae? Consequatur, fugiat.</Segment>
                <Segment>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quam quasi tempore laboriosam sapiente, asperiores reiciendis facilis, corrupti cupiditate ratione impedit fugiat adipisci aut hic ipsam vitae beatae? Consequatur, fugiat.</Segment>
                <Segment>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quam quasi tempore laboriosam sapiente, asperiores reiciendis facilis, corrupti cupiditate ratione impedit fugiat adipisci aut hic ipsam vitae beatae? Consequatur, fugiat.</Segment>
              </div>
        </Grid>
      </div>
    );
  }
}

export default Profile;
