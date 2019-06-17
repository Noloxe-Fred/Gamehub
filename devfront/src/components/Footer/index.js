import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Grid, Row, Col } from 'semantic-ui-react';

import './footer.scss';

class Footer extends Component {
  componentDidMount() {
  }
 
  render() {
    return (
      <footer>
        <Grid columns={3} fluid centered>
          <Grid.Row>
            <Grid.Column computer={5} tablet={16} mobile={16}>
              <div className="left--footer">
                <h5>G<i className="fas fa-headset" />MEHUB</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quidem quo tenetur recusandae quis, consectetur assumenda veniam doloremque exercitationem corrupti eveniet dicta esse suscipit maiores accusamus voluptatum nam aut</p> 
              </div>
            </Grid.Column>
            <Grid.Column computer={5} tablet={16} mobile={16}>
                <div className="central--footer">
                  <h5>Plan du site</h5>
                  <ul>
                    <li> <NavLink to="/"> Accueil </NavLink>  </li>
                    <li><NavLink to="/collection">Ma collection</NavLink></li>
                    <li><NavLink to="/advancedsearch">Recherche avancée </NavLink> </li>
                    <li>Admin</li>
                  </ul>
                </div>
            </Grid.Column>
            <Grid.Column computer={5} tablet={16} mobile={16}>
              <div className="right--footer">
                <div className="right--footer--left">
                  <h5>Nous contacter</h5>
                  <img src="https://www.lsa-conso.fr/mediatheque/1/7/5/000330571_5.jpg" alt="map" />
                </div>
                <div className="right--footer--right">
                  <p>
                    28, chemin du jeu<br />
                    Forêt de Brocéliande<br />
                    <a href="tel:0254846587">02.54.84.65.87</a><br />
                    <a href="mailto:gamehub@game.com">gamehub@game.com</a>
                  </p>
                </div>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </footer>
    );
  }
}
 
export default Footer;
