import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Col } from 'react-bootstrap';

import './list.scss';

const List = ({ gamesDatas }) => {
  console.log('List', gamesDatas);
  return (
    <Container fluid className="games--list">
      {gamesDatas.map((game) => {
        return (
          <Col lg={2} md={5} sm={12} xs={12} className="one--game">
            <Link to={"/game/"+game.id}> 
              <img src={game.cover} alt={game.name} /> 
            </Link>
          </Col>
        );
      })}
    </Container>
  );
};

export default List;
