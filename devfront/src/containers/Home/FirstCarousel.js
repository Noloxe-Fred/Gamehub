import { connect } from 'react-redux';
import FirstCarousel from 'src/components/Home/Carousels/FirstCarousel';

import { requestLastReleased } from 'src/store/reducers/homeReducer';

const mapStateToProps = state => ({
  lastReleasedList: state.homeReducer.lastReleasedList,
  load: state.homeReducer.loadingLastReleased,
});

const mapDispatchToProps = dispatch => ({
  requestLastReleased: () => {
    dispatch(requestLastReleased());
  },
});

// L'FirstCarouselel à connect nous renvoie une nouvelle fonction
const composantAEnrichir = connect(mapStateToProps, mapDispatchToProps);
// Cette nouvelle fonction attend qu'on lui donne un composant à enrichir
const FirstCarouselContainer = composantAEnrichir(FirstCarousel);

export default FirstCarouselContainer;
