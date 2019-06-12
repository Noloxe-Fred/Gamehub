import { connect } from 'react-redux';
import SearchResult from 'src/component/SearchResult';

import { cancelRedirect } from 'src/store/reducers/navbarreducer';

const mapStateToProps = state => ({
  searchList: state.navbarreducer.searchList,
});

const mapDispatchToProps = dispatch => ({
  cancelRedirect: () => {
    dispatch(cancelRedirect());
  },
});

// L'SearchBarel à connect nous renvoie une nouvelle fonction
const composantAEnrichir = connect(mapStateToProps, mapDispatchToProps);
// Cette nouvelle fonction attend qu'on lui donne un composant à enrichir
const SearchResultContainer = composantAEnrichir(SearchResult);

export default SearchResultContainer;
