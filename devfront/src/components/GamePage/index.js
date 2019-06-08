import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

import oneGame from '../../data/oneGame';
import './gamepage.scss';

// dans cette classe des props vont etre accessible par le container qui sont loading et request game 
class GamePage extends Component {
  // Lancement de la fonction request game avec Component did mount 
  componentDidMount() {
    this.props.requestGame();
  }

  // lancer le request game quand le composant et finit de charger 
  render() {
    const { loading, background } = this.props; 
    // dans ce return on va mettre des conditions

    const backgroundStyle = {
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
    };

    return (
      <div>
        {loading && <div>Chargement</div>}
        {!loading && (
          <div id="gamepage" style={backgroundStyle}>
            <Container fluid>
              <Row className="back--button">
                <Col lg={12} md={12} sm={12} xs={12} className="d-flex justify-content-flex-start">
                  <button type="button">back</button>
                </Col>
              </Row>
              <Row className="two--sides">
                <Col lg={6} md={12} sm={12} xs={12} className="left--part">
                 <div className="game">
                    <div className="up">
                      <div className="up--left">
                        <img src={oneGame.cover} alt="cover" />
                      </div>
                      <div className="up--right">
                        <h3>{oneGame.name}</h3>
                        <h3>{oneGame.score}%</h3>
                        <h5>Éditeur : {oneGame.editor}</h5>
                        <h5> Développeur : {oneGame.developer}</h5>
                        <h5>Date de sortie : {oneGame.released}</h5>
                        <a href="#">Ajouter à la collection</a>
                      </div>
                    </div>
                    <div className="down">
                      <h6>{oneGame.description}</h6>  
                    </div>
                 </div>             
                </Col>
                <Col lg={6} md={12} sm={12} xs={12} className="right--part">
                  <div className="comments--list">
                    
                  </div>
                </Col>
              </Row>
            </Container>
          </div> 
          )
        }
      </div>
    )
  }
};
       

GamePage.propTypes = {
  requestGame: Proptypes.func.isRequired,
  loading: Proptypes.bool.isRequired,
  background: Proptypes.string.isRequired,
};

export default GamePage;
