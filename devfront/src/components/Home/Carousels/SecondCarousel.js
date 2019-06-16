import React, { Component } from 'react';
import Proptypes from 'prop-types';

import CarouselAlice from 'src/Library/FullComponent/CarouselAlice';

class SecondCarousel extends Component {
  componentDidMount() {
    this.props.requestRandom();
  }

  render() {
    const { randomList, load } = this.props;
    return (
      <div id="second-carousel">
        <h3 id="titre-carousel">Jeux en vrac</h3>
        {load && <div>Chargement</div>}
        {!load && <CarouselAlice gameList={randomList} />}
      </div>
    );
  }
}

SecondCarousel.propTypes = {
  requestRandom: Proptypes.func.isRequired,
  randomList: Proptypes.arrayOf(Proptypes.shape({
    id: Proptypes.number.isRequired,
  })).isRequired,
  load: Proptypes.bool.isRequired,
};

export default SecondCarousel;
