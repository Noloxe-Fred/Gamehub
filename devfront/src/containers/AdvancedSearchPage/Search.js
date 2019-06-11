import { connect } from 'react-redux';
import Search from 'src/components/AdvancedSearchPage/Search';

import { requestCategories } from 'src/store/reducers/advancedSearchPageReducer';

const mapStateToProps = state => ({
  categoriesDatas: state.homeReducer.categoriesDatas,
  loading: state.homeReducer.loadingCategories,
});

const mapDispatchToProps = dispatch => ({
  requestCategories: () => {
    dispatch(requestCategories());
  },
});

// L'MainListel à connect nous renvoie une nouvelle fonction
const composantAEnrichir = connect(mapStateToProps, mapDispatchToProps);
// Cette nouvelle fonction attend qu'on lui donne un composant à enrichir
const SearchContainer = composantAEnrichir(Search);

export default SearchContainer;
