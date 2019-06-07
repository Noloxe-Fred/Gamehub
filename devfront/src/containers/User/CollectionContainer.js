import { connect } from 'react-redux';
import Collection from 'src/components/User/Collection';

import {
  request,
} from 'src/store/reducers/userPagesReducer';

const mapStateToProps = state => {
  
  return ({
    listsDatas: state.userPagesReducer.listsDatas,
  })
};

const mapDispatchToProps = dispatch => ({
  request: () => {
    dispatch(request());
  },
});

// L'appel à connect nous renvoie une nouvelle fonction
const CollectionContainer = connect(mapStateToProps, mapDispatchToProps)(Collection);
// Cette nouvelle fonction attend qu'on lui donne un composant à enrichir
// const CollectionContainer = composantAEnrichir;

export default CollectionContainer;
