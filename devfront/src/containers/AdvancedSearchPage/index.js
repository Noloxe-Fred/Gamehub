import { connect } from 'react-redux';
import AdvancedSearchPage from 'src/components/AdvancedSearchPage';

import { requestGames, requestByCategories } from 'src/store/reducers/advancedSearchPageReducer';

const mapStateToProps = state => ({
  gamesDatas: state.advancedSearchPageReducer.gamesDatas,
  loading: state.advancedSearchPageReducer.loadingGames,
});

const mapDispatchToProps = dispatch => ({
  requestGames: () => {
    dispatch(requestGames());
  },
  requestByCategories: () => {
    dispatch(requestByCategories());
  },
});

// L'MainListel à connect nous renvoie une nouvelle fonction
const composantAEnrichir = connect(mapStateToProps, mapDispatchToProps);
// Cette nouvelle fonction attend qu'on lui donne un composant à enrichir
const AdvancedSearchPageContainer = composantAEnrichir(AdvancedSearchPage);

export default AdvancedSearchPageContainer;
