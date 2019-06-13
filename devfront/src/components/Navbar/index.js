import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Redirect } from 'react-router-dom';
import { Icon, Input, Transition } from 'semantic-ui-react';

import ModalConnect from 'src/containers/Navbar/ModalConnect';
import ModalSubscribe from 'src/containers/Navbar/ModalSubscribe';
import SearchBar from 'src/containers/SearchBarContainer';
import './navbar.scss';

class Navbar extends Component {

  componentDidMount() {
  }

  render() {
    const { connect, disconnectUser, displayInput } = this.props;
    console.log('Navbar', displayInput);
    return (
      <nav>
        <div className="logo">
          <NavLink to="/"><h2>G<i className="fas fa-headset"></i>MEHUB</h2></NavLink>
        </div>
        { displayInput && (
            <div id="nav--search"><SearchBar /></div>
            )}
        <div className="menu">
          <NavLink to="/advancedsearch" className="advancedSearch">Recherche avancée</NavLink>
          {connect
            ? (
              <div className="nav-connect">
                <NavLink to="/collection" className="mycollection">Ma Collection</NavLink>
                <NavLink to="/profile" className="avatar--home">
                  <img src="https://vice-images.vice.com/images/content-images/2016/07/26/ce-que-votre-photo-de-profil-facebook-dit-de-vous-body-image-1469553008.jpg?output-quality=75" alt="user-avatar" />
                </NavLink>
                <button className="connectButton" onClick={disconnectUser}><Icon name="sign-out" size="large" /></button>
              </div>
            )
            : <Disconnect />}
        </div>
      </nav>
    );
  } 
}

const Disconnect = () => (
  <div className="nav-connect">
    <ModalConnect text="Se connecter" />
    <ModalSubscribe />
  </div>

);

Navbar.propTypes = {
  connect: PropTypes.bool.isRequired,
  disconnectUser: PropTypes.func.isRequired,
  displayInput: PropTypes.bool.isRequired,
};

export default Navbar;
