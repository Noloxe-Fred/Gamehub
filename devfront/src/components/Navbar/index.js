import React from 'react';
// import { NavLink } from 'react-router-dom';

import './navbar.scss';

const Navbar = () => (
  <nav>
    <div className="logo">
      <h2>G<i class="fas fa-headset"></i>MEHUB</h2>
    </div>

    <div className="menu">
      <a href="#">Recherche avancée</a>
      <a href="#" className="connexion">Se connecter</a>
      <a href="#" className="inscription">S'inscrire</a>
    </div>
  </nav>
);

// const Navbar = () => (
//   <nav>
//     <div className="logo">
//       <h2>G<i class="fas fa-headset"></i>MEHUB</h2>
//     </div>

//     <div className="menu">
//       <NavLink to="advancedsearch">Recherche avancée</NavLink>
//       <NavLink to="connection">Se connecter</NavLink>
//       <NavLink to="inscription">S'inscrire</NavLink>
//     </div>
//   </nav>
// );

export default Navbar;
