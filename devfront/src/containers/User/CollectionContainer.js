import { connect } from 'react-redux';
import Collection from 'src/components/User/Collection';

import {
  request,
  displayProfile,
} from 'src/store/reducers/userPagesReducer';

const mapStateToProps = state => ({
  listAdd: state.userPagesReducer.listAdd,
  listWant: state.userPagesReducer.listWant,
  listWish: state.userPagesReducer.listWish,
  displayedProfile: state.userPagesReducer.displayedProfile,
});

const mapDispatchToProps = dispatch => ({
  request: (nameList) => {
    dispatch(request(nameList));
  },
  displayProfile: () => {
    dispatch(displayProfile());
  },
});

// L'appel à connect nous renvoie une nouvelle fonction
const CollectionContainer = connect(mapStateToProps, mapDispatchToProps)(Collection);
// Cette nouvelle fonction attend qu'on lui donne un composant à enrichir
// const CollectionContainer = composantAEnrichir;

export default CollectionContainer;