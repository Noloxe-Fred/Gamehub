import { connect } from 'react-redux';
import TabList from 'src/components/Home/TabList';

import { requestTabList } from 'src/store/reducers/homeReducer';

const mapStateToProps = state => ({
  bestever: state.homeReducer.bestever,
  worstever: state.homeReducer.worstever,
  bestyear: state.homeReducer.bestyear,
  worstyear: state.homeReducer.worstyear,
  bestmonth: state.homeReducer.bestmonth,
  worstmonth: state.homeReducer.worstmonth,
  loadingbestever: state.homeReducer.loadingbestever,
  loadingworstever: state.homeReducer.loadingworstever,
  loadingbestyear: state.homeReducer.loadingbestyear,
  loadingworstyear: state.homeReducer.loadingworstyear,
  loadingbestmonth: state.homeReducer.loadingbestmonth,
  loadingworstmonth: state.homeReducer.loadingworstmonth,
});

const mapDispatchToProps = dispatch => ({
  requestTabList: () => {
    dispatch(requestTabList());
  },
});

// L'MainListel à connect nous renvoie une nouvelle fonction
const composantAEnrichir = connect(mapStateToProps, mapDispatchToProps);
// Cette nouvelle fonction attend qu'on lui donne un composant à enrichir
const TabListContainer = composantAEnrichir(TabList);

export default TabListContainer;
