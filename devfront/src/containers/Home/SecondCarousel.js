import { connect } from 'react-redux';
import SecondCarousel from 'src/components/Home/Carousels/SecondCarousel';

import { requestRandom } from 'src/store/reducers/homeReducer';

const mapStateToProps = state => ({
  randomList: state.homeReducer.randomList,
  load: state.homeReducer.loadingRandom,
});

const mapDispatchToProps = dispatch => ({
  requestRandom: () => {
    dispatch(requestRandom());
  },
});

// L'SecondCarouselel à connect nous renvoie une nouvelle fonction
const composantAEnrichir = connect(mapStateToProps, mapDispatchToProps);
// Cette nouvelle fonction attend qu'on lui donne un composant à enrichir
const SecondCarouselContainer = composantAEnrichir(SecondCarousel);

export default SecondCarouselContainer;
