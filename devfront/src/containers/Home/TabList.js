import { connect } from 'react-redux';
import TabList from 'src/components/Home/TabList';

import { requestTabList } from 'src/store/reducers/homeReducer';

const mapStateToProps = state => ({
  tabList: state.homeReducer.tabList,
  load: state.homeReducer.loadingTabList,
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
