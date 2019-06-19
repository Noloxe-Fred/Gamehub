import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Redirect, Link } from 'react-router-dom';
import {
  Icon,
  Input,
  Transition,
  Dropdown,
  Divider,
} from 'semantic-ui-react';


import ModalConnect from 'src/containers/Navbar/ModalConnect';
import ModalSubscribe from 'src/containers/Navbar/ModalSubscribe';
import SearchBar from 'src/containers/SearchBarContainer';
import './navbar.scss';

class Navbar extends Component {

  componentDidMount() {

  }

  render() {
    const { connect, disconnectUser, displayInput, displayProfile, userProfile, loadProfile, openModSub, openModalConnect } = this.props;
    return (
      <nav>
        <div className="logo--alone">
          <NavLink to="/"><i className="fas fa-headset" /></NavLink>
        </div>
        <div className="logo">
          <NavLink to="/"><h2>G<i className="fas fa-headset" />MEHUB</h2></NavLink>
        </div>
        {
          displayInput && (
            <div id="nav--search"><SearchBar /></div>
          )
        }
        <div className="menu">
          <NavLink to="/advancedsearch" className="advancedSearch">Recherche avancée</NavLink>
          {connect
            ? (
              <div className="nav-connect">
                <NavLink to="/collection" className="mycollection">Mon Hub</NavLink>
                <div className="avatar--home" onClick={displayProfile}>
                  {loadProfile ? <img src="https://www.loginradius.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png" alt="user-avatar" /> : <img src={userProfile.photo} alt="user-avatar" />}
                </div>
                <NavLink to="/"><button className="connectButton" onClick={disconnectUser}><Icon name="sign-out" size="large" /></button></NavLink>
              </div>
            )
            : <Disconnect />}
        </div>
        <p className="drop">
          <Dropdown icon="bars" labeled className="icon" direction="left">
            <Dropdown.Menu>
              <Dropdown.Item className="item--drop"><NavLink to="/advancedsearch">Recherche avancée</NavLink></Dropdown.Item>
              <Dropdown.Item className="item--drop"><p onClick={openModalConnect}>Se connecter</p></Dropdown.Item>
              <Dropdown.Item className="item--drop"><p onClick={openModSub}>S'inscrire</p></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </p>
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
  displayProfile: PropTypes.func.isRequired,
};

export default Navbar;
