import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './gamepage.scss';
import { Container, Row, Col } from 'react-bootstrap';

import AddGame from 'src/containers/User/addgameContainer';

const GameHeader = ({ datas, checkedCategories }) => {

  const handleCheckCat = id => () => {
    checkedCategories(id);
  };
  const {cover, name, score, categories, editor, developer, released, desc, id, website } = datas;
  return (
    
    <Container className="container">
      <div className="firstpart">
        <Row>
          <Col lg={5} sm={12} xs={12} className="start">
            <div className="illustration">
              <img src={cover} alt="cover" />
            </div>
          </Col>
          <Col lg={7} sm={12} xs={12} className="d-flex align-items-start">
            <div className="title">
              <h2 className="title--title">{name}</h2>
              {score && <div className="title--score">{score}%</div>} {!score && <div className="title--not-score">Pas de notes</div>}
              <AddGame gameId={id} />
              <div className="categories">
                {categories.map(category => <Link to="/advancedsearch" onClick={handleCheckCat(category.id)}> <button key={category.name} type="button">{category.name}</button></Link>)}
              </div>
              <div className="title--editor">Éditeur : {editor[0].name}</div>
              <div className="title--developer">Développeur : {developer[0].name}</div>
              <div className="title--website"><a href={website} target="blank">Site Officiel</a></div>
              <div className="title--released">Date de sortie : {released}</div>
              <div className="description">
                <div className="description--description">{desc}</div>
              </div>
            </div>
          </Col>
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
