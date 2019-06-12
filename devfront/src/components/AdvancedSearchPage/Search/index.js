import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


import './search.scss';

class Search extends React.Component {

  componentDidMount() {
    this.props.requestCategories();
  }

  render() {
    const { loading, categoriesDatas } = this.props;
    return (
      <Container fluid className="search--container">
        <Row>
          <Col lg={4} md={4} sm={12} xs={12} className="partie--gauche">
            <div className="titre--section--search">
              <h5>Types de jeux :</h5>
            </div>
            <div className="choix--types">
              {loading && <div>PROUUUUUUT</div>}
              {!loading && categoriesDatas.map(category => {categoriesDatas.name})}
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
};

export default Search;
