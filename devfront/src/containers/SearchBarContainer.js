import { connect } from 'react-redux';
import SearchBar from 'src/Library/FullComponent/SearchBar';

import { changeInput, submitSearch } from 'src/store/reducers/navbarreducer';

const mapStateToProps = state => ({
  inputValue: state.navbarreducer.inputSearch,
});

const mapDispatchToProps = dispatch => ({
  changeInput: (value) => {
    dispatch(changeInput(value));
  },
  submitSearch: () => {
    dispatch(submitSearch());
  },
});

// L'SearchBarel à connect nous renvoie une nouvelle fonction
const composantAEnrichir = connect(mapStateToProps, mapDispatchToProps);
// Cette nouvelle fonction attend qu'on lui donne un composant à enrichir
const SearchBarContainer = composantAEnrichir(SearchBar);

export default SearchBarContainer;
