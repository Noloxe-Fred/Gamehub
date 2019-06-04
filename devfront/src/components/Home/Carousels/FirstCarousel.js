import React, { Component } from 'react';
import Proptypes from 'prop-types';

import CarouselAlice from 'src/Library/FullComponent/CarouselAlice';

class FirstCarousel extends Component {
  componentDidMount() {
    this.props.requestLastReleased();
  }

  render() {
    const { lastReleasedList, load } = this.props;
    return (
      <div id="first-carousel">
        <h3>Sorties du mois passé</h3>
        {load && <div>Chargement</div>}
        {!load && <CarouselAlice gameList={lastReleasedList} />}
      </div>
    );
  }
}

FirstCarousel.propTypes = {
  requestLastReleased: Proptypes.func.isRequired,
  lastReleasedList: Proptypes.arrayOf(Proptypes.shape({
    id: Proptypes.number.isRequired,
  })).isRequired,
  load: Proptypes.bool.isRequired,
};

export default FirstCarousel;
