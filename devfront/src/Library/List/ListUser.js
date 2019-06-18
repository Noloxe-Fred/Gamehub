import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Col } from 'react-bootstrap';
import { Transition } from 'semantic-ui-react';

import EditGame from 'src/containers/User/editGameCont';
import ModifyGame from 'src/containers/User/modifyGameCont';
import './listuser.scss';

class ListUser extends Component {

  componentDidUpdate() {
    if (this.props.cancelRedirect) {
      this.props.cancelRedirect();
    }
  }

  render() {
    const { gamesDatas, name } = this.props;
    return (
      <Container  className="games--list">
        {gamesDatas.length === 0 && <p>Pas de résultats</p>}
        {gamesDatas.map(( game ) => {
          return (
            <Col id={game.game.id} lg={2} md={5} sm={12} xs={12} className="one--game">
              <img src={game.game.cover} alt={game.game.name} />
              <p>{game.game.name}</p>
              <div className="edit--button--complete--collection">
                {name === 'have' && <EditGame game={game.game} name={name} />}
              </div>
              <div className="see--delete--button--complete--collection">
                <ModifyGame game={game.game} name={game.name} statusId={game.id} />
              </div>
              
            </Col>
          );
        })}
      </Container>
    );
  }
}

export default ListUser;
