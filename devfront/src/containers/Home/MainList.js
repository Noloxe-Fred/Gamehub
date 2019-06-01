import { connect } from 'react-redux';
import MainList from 'src/components/Home/Lists/MainList';

import { requestComingSoon } from 'src/store/reducers/homeReducer';

const mapStateToProps = state => ({
  gameList: state.homeReducer.listComingSoon,
  load: state.homeReducer.loadingComingSoon,
});

const mapDispatchToProps = dispatch => ({
  requestComingSoon: () => {
    dispatch(requestComingSoon());
  },
});

// L'MainListel à connect nous renvoie une nouvelle fonction
const composantAEnrichir = connect(mapStateToProps, mapDispatchToProps);
// Cette nouvelle fonction attend qu'on lui donne un composant à enrichir
const MainListContainer = composantAEnrichir(MainList);

export default MainListContainer;
