import { connect } from 'react-redux';
import MainList from 'src/components/Home/Lists/MainList';

import { requestComingSoon, increaseCount, decreaseCount } from 'src/store/reducers/homeReducer';

const mapStateToProps = state => ({
  gameList: state.homeReducer.listComingSoon,
  load: state.homeReducer.loadingComingSoon,
  count: state.homeReducer.countComingSoon,
});

const mapDispatchToProps = dispatch => ({
  requestComingSoon: () => {
    dispatch(requestComingSoon());
  },
  increaseCount: () => {
    dispatch(increaseCount());
  },
  decreaseCount: () => {
    dispatch(decreaseCount());
  },
});

// L'MainListel à connect nous renvoie une nouvelle fonction
const composantAEnrichir = connect(mapStateToProps, mapDispatchToProps);
// Cette nouvelle fonction attend qu'on lui donne un composant à enrichir
const MainListContainer = composantAEnrichir(MainList);

export default MainListContainer;
