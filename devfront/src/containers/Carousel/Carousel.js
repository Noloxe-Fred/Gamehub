import { connect } from 'react-redux';
import CarouselAlice from 'src/Library/FullComponent/CarouselAlice';
import { receivedListCarousel } from 'src/store/reducers/homeReducer';

const mapStateToProps = state => ({
  carouselGameList: state.homeReducer.listCarousel,
});

const mapDispatchToProps = dispatch => ({
  receivedListCarousel: () => {
    dispatch(receivedListCarousel());
  },
});

// L'appel à connect nous renvoie une nouvelle fonction
const CarouselContainer = connect(mapStateToProps, mapDispatchToProps)(CarouselAlice);
// Cette nouvelle fonction attend qu'on lui donne un composant à enrichir
// const ModalConnectContainer = composantAEnrichir;

export default CarouselContainer;
