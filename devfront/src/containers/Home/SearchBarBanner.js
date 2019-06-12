import { connect } from 'react-redux';
import SearchBarBanner from 'src/components/Home/Banner/SearchBarBanner';

import { displayInputInNavbar } from 'src/store/reducers/homeReducer';

const mapStateToProps = state => ({
  displayInput: state.homeReducer.displayInput,
});

const mapDispatchToProps = dispatch => ({
  display: (bool) => {
    dispatch(displayInputInNavbar(bool));
  },
});

// L'FirstCarouselel à connect nous renvoie une nouvelle fonction
const composantAEnrichir = connect(mapStateToProps, mapDispatchToProps);
// Cette nouvelle fonction attend qu'on lui donne un composant à enrichir
const SearchBarBannerContainer = composantAEnrichir(SearchBarBanner);

export default SearchBarBannerContainer;
