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
    {/* <Row className="row--titre--derniers--commentaires">
      <Col lg={12} className="title--comments">
        <h2>Les derniers commentaires sur le jeu</h2>
      </Col>
    </Row> */}

    <Row className="row--comments row--header">

      {/* <Col lg={1} sm={1} xs={1} className="cell cell--header"></Col> */}

      <Col lg={12} sm={3} xs={3} className="cell cell--header d-flex justify-content-center">
       <div className="profil--comments">
         <h6>{datas.comments.length >1 ? 'Les derniers commentaires publiés' : 'Pas encore de commentaires sur ce jeu'}</h6>
       </div>
      </Col>
{/* 
      <Col lg={4} sm={4} xs={4} className="cell cell--header">
       <div>
         <h6>Titre</h6>
       </div>
      </Col>

      <Col lg={4} sm={4} xs={4} className="cell cell--header">
       <div>
         <h6>Test</h6>
       </div>
      </Col>

      <Col lg={1} sm={4} xs={12} className="cell cell--header">
       <div>
         <h6>Score</h6>
       </div>
      </Col> */}
    </Row>
    {(!datas.comments === 0) && <div></div>}
    {(datas.comments.length > 0) && (
      <div>
      {datas.comments.map((comment) => (
        <div>
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
      

      {/* <Row className="row--comments">
        <Col lg={1} sm={1} xs={0} className="cell cell--number">
        2
        </Col>

        <Col lg={2} sm={3} xs={12} className="cell">
        <div className="profil">
          <div className="avatar--comments">
            <img src="https://i.pinimg.com/236x/f0/0f/0a/f00f0addecd1fc175278c2b021025e72.jpg" alt=""/>
          </div>
            <h6>{datas[1].user}</h6>
        </div>
        </Col>

        <Col lg={4} sm={4} xs={12} className="cell">
        <div>
          <h6>{datas[1].content}</h6>
        </div>
        </Col>

        <Col lg={4} sm={4} xs={12} className="cell">
        <div>
          <h6>{datas[1].test}</h6>
        </div>
        </Col>

        <Col lg={1} sm={4} xs={12} className="cell cell--score">
        <div>
          <h6>{datas[1].score}</h6>
        </div>
        </Col>
      </Row>

      <Row className="row--comments">
        <Col lg={1} sm={1} xs={0} className="cell cell--number">
        3
        </Col>

        <Col lg={2} sm={3} xs={12} className="cell">
        <div className="profil">
          <div className="avatar--comments">
            <img src="https://defis.leparisien.fr/revo_vignettes/etapes/medium/d3aea34fcf528735740acfe217712043.jpg" alt=""/>
          </div>
          <h6>{datas[2].user}</h6>
        </div>
        </Col>

        <Col lg={4} sm={4} xs={12} className="cell">
        <div>
          <h6>{datas[2].content}</h6>
        </div>
        </Col>

        <Col lg={4} sm={4} xs={12} className="cell">
        <div>
          <h6>{datas[2].test}</h6>
        </div>
        </Col>

        <Col lg={1} sm={4} xs={12} className="cell cell--score">
        <div>
          <h6>{datas[2].score}</h6>
        </div>
        </Col>
      </Row> */}
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
 