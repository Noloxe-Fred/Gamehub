import { connect } from 'react-redux';
import Search from 'src/components/AdvancedSearchPage/Search';

import { requestCategories, requestGames, checkedCategories, requestByCategories } from 'src/store/reducers/advancedSearchPageReducer';

const mapStateToProps = state => ({
  categoriesDatas: state.advancedSearchPageReducer.categoriesDatas,
  loading: state.advancedSearchPageReducer.loadingCategories,
  checkedCategories: state.advancedSearchPageReducer.checkedCategories,
});

const mapDispatchToProps = dispatch => ({
  requestCategories: () => {
    dispatch(requestCategories());
  },
  requestGames: () => {
    dispatch(requestGames());
  },
  checkCategories: (categoryId) => {
    dispatch(checkedCategories(categoryId));
  },
  requestByCategories: () => {
    dispatch(requestByCategories());
  },
});

// L'MainListel à connect nous renvoie une nouvelle fonction
const composantAEnrichir = connect(mapStateToProps, mapDispatchToProps);
// Cette nouvelle fonction attend qu'on lui donne un composant à enrichir
const SearchContainer = composantAEnrichir(Search);

export default SearchContainer;
