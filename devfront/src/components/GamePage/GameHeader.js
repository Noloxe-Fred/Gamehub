import React from 'react';
import PropTypes from 'prop-types';
import './gamepage.scss';
import { Container, Row, Col } from 'react-bootstrap';

const GameHeader = ({ datas }) => {
  return (
    
    <Container className="container">
    <div className="firstpart">
      <Row>
        <Col lg={4} sm={12} xs={12} className="d-flex align-items-start">
          <div className="illustration">
            <img src={datas.cover} alt="cover" />
          </div>
        </Col>
        <Col lg={5} sm={12} xs={12} className="d-flex align-items-start">
          <div className="title">
            <div className="title--title">{datas.name}</div>
            <div className="title--score">{datas.score}%</div>
            <div className="title--editor">Éditeur : {datas.editor}</div>
            <div className="title--developer">Développeur : {datas.developer}</div>
            <div className="title--released">Date de sortie : {datas.released}</div>
          </div>
        </Col>
        <Col lg={3} sm={12} xs={12} className="d-flex align-items-center justify-content-center">
          <div className="categories">
            <button type="button">{datas.categories[0].name}</button>
            <button type="button">{datas.categories[1].name}</button>
          </div>
        </Col>
      </Row>
      <Row lg={12} sm={12} xs={12}>
        <div className="description">
          <div className="description--description">{datas.desc}</div>
        </div>
      </Row>
      </div>
    </Container>
  );






    // <div className="header">
    //   <div className="section1">
    //     <div className="imageOneGame">
    //       <img src={datas.cover} alt="" />
    //     </div>
    //     <div className="gameInfos">
    //       <div className="title">
    //         <div className="title--info">
    //           <h2>{datas.name}</h2>
    //           <h6>({datas.released})</h6>
    //         </div>
    //         <button>Back</button>
    //       </div>
    //       <div className="note">
    //         <h3>{datas.score}%</h3>
    //       </div>
    //       <div className="otherInfos">
    //         <div className="infos">
    //           <h6>Éditeur: {datas.editor}</h6>
    //           <h6>Studio: {datas.developer}</h6>
    //           <h6>Date de sortie: {datas.released}</h6>
    //           <h6>Multijoueur: {datas.editor}</h6>
    //           <h6>Coop: {datas.editor}</h6>
    //         </div>
    //         <div className="tags">
    //           <div>
    //             <button>Action</button>
    //             <button>{datas.categories[0].name}</button>
    //             <button>Fantastique</button>
    //           </div>
    //           <div>
    //             <button>Heroic Fantasy</button>
    //             <button>{datas.categories[1].name}</button>
    //           </div>
    //         </div> 
    //       </div>
  
    //     </div>
    //   </div>
    //   <div className="description">
    //     <p>{datas.descritpion}</p>
    //   </div>
    // </div>
  
};


GameHeader.propTypes = {
  datas: PropTypes.object.isRequired,
};

export default GameHeader;
