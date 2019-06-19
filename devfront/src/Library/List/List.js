import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Col } from 'react-bootstrap';
import { Transition } from 'semantic-ui-react';

import AddGame from 'src/containers/User/addgameContainer';
import './list.scss';

class List extends Component {

  componentDidUpdate() {
    if(this.props.cancelRedirect) {
      this.props.cancelRedirect();
    }
  }

  render() {
    const { gamesDatas } = this.props;


    return (
      <Container fluid className="games--list">
        {gamesDatas.length === 0 && <p>Pas de résultats</p>}
        {gamesDatas.map(( game ) => {
          
          return (
            <Col lg={2} md={5} sm={12} xs={12} className="one--game">
              <Link to={"/game/"+game.id}>
                <img src={game.cover} alt={game.name} />
              </Link>
              <p>{game.name}<AddGame gameId={game.id} className="add--game--button" /></p>
            </Col>
          );
        })}
      </Container>
    );
  }
}


export default List;
