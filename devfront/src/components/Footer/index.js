import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './footer.scss';

class Footer extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <footer>
        <div className="footer__content">
          <div className="left">
            <article>
              <header>G<i className="fas fa-headset" />mehub</header>
              <main>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, saepe culpa? Rem dolore vitae quae corporis quidem, inventore aut enim?</p>
              </main>
            </article>
          </div>
          <div className="right">
            <article>
              <header>Plan du site</header>
              <main>
                <ul>
                  <li> <NavLink to="/"> Accueil </NavLink>  </li>
                  <li><NavLink to="/collection">Ma collection</NavLink></li>
                  <li>Mon compte</li>
                  <li><NavLink to="/advancedsearch">Recherche avancée </NavLink> </li>
                  <li>Admin</li>
                </ul>
              </main>
            </article>
            <article>
              <header>Nous contacter</header>
              <main>
                <img src="https://www.lsa-conso.fr/mediatheque/1/7/5/000330571_5.jpg" alt="map" />
                <p>
                  28, chemin du jeu<br />
                  Forêt de Brocéliande<br />
                  <a href="tel:0254846587">02.54.84.65.87</a><br />
                  <a href="mailto:gamehub@game.com">gamehub@game.com</a>
                </p>
              </main>
            </article>
          </div>
        </div>
      </footer>
    );
  }
}
 
export default Footer;
