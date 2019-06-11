import { connect } from 'react-redux';
import AdvancedSearchPage from 'src/components/AdvancedSearchPage';

import { requestGames } from 'src/store/reducers/advancedSearchPageReducer';

const mapStateToProps = state => ({
  gamesDatas: state.homeReducer.gamesDatas,
});

const mapDispatchToProps = dispatch => ({
  requestGames: () => {
    dispatch(requestGames());
  },
});

// L'MainListel à connect nous renvoie une nouvelle fonction
const composantAEnrichir = connect(mapStateToProps, mapDispatchToProps);
// Cette nouvelle fonction attend qu'on lui donne un composant à enrichir
const AdvancedSearchContainer = composantAEnrichir(AdvancedSearchPage);

export default AdvancedSearchContainer;
