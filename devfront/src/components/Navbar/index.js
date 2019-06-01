import React from 'react';
import { NavLink } from 'react-router-dom';

import ModalConnect from 'src/containers/Navbar/ModalConnect';
import ModalSubscribe from 'src/containers/Navbar/ModalSubscribe';
import './navbar.scss';

const Navbar = () => (
  <nav>
    <div className="logo">
      <h2>G<i className="fas fa-headset"></i>MEHUB</h2>
    </div>

    <div className="menu">
      <NavLink to="advancedsearch" className="advancedSearch">Recherche avancée</NavLink>
      <ModalConnect />
      <ModalSubscribe />
    </div>
  </nav>
);

export default Navbar;
