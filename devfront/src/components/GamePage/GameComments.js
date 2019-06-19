import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
 
import './gamepage.scss'; 

const GameComments = ({ datas, loadingGame }) => (
  <div>
  {loadingGame && <div></div>}
  {!loadingGame && (
<Container className="comments--container">
  <div className="partie--commentaire">
    <Row className="row--comments row--header">
      <Col lg={12} sm={3} xs={3} className="cell cell--header d-flex justify-content-center">
       <div className="profil--comments">
         <h5>{datas.comments.length >1 ? 'LES DERNIERS COMMENTAIRES' : 'PAS ENCORE DE COMMENTAIRE SUR CE JEU'}</h5>
       </div>
      </Col>
    </Row>
    {(!datas.comments === 0) && <div></div>}
    {(datas.comments.length > 0) && (
      <div>
      {datas.comments.map((comment) => (
        <div className="one--comment">
          <Row className="row--comments">

            <Col lg={2} sm={2} xs={12} className="cell">
            <div className="profil">
              <div className="avatar--comments">
                <img src="https://vice-images.vice.com/images/content-images/2016/07/26/ce-que-votre-photo-de-profil-facebook-dit-de-vous-body-image-1469553008.jpg?output-quality=75" alt=""/>
              </div>
              <h6>{comment.user.pseudo}</h6>
            </div>
            </Col>

            <Col lg={8} sm={8} xs={12} className="cell">
            <div className="cell--title">
              <h6>{comment.title}</h6>

            </div>
            </Col>

            <Col lg={2} sm={2} xs={12} className="cell">
            <div className="cell--score">
              <h6>{comment.score ? comment.score : 'Pas de note'}</h6>
            </div>
            </Col>
          </Row>

          <Row className="row--comments--content">
            <Col lg={12} sm={12} xs={12} className="cell">
            <div>
              <h6>{comment.content}</h6>
            </div>
            </Col>
          </Row>
        </div>
      ))}
      </div>
    )}

    </div>
  </Container>
  )}
  </div>

);

GameComments.propTypes = {
  datas: PropTypes.object.isRequired,
};

export default GameComments;
 