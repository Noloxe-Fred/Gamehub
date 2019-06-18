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
        {gamesDatas.map(({ game }) => {
          return (
            <Col id={game.id} lg={2} md={5} sm={12} xs={12} className="one--game">
                {name === 'have' && <EditGame game={game} name={name} />}
                <ModifyGame game={game} name={name} statusId={game.id} /> // Status Id à déterminer
                <img src={game.cover} alt={game.name} />
                <p>{game.name}</p>
            </Col>
          );
        })}
      </Container>
    );
  }
}

export default ListUser;
