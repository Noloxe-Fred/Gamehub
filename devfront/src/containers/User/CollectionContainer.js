import { connect } from 'react-redux';
import Collection from 'src/components/User/Collection';

import {
  request,
  displayProfile,
  displayFullList,
} from 'src/store/reducers/userPagesReducer';

const mapStateToProps = state => {
  console.log(state)
  return {
    fullList: state.userPagesReducer.fullList,
    listAdd: state.userPagesReducer.add,
    listWant: state.userPagesReducer.want,
    listWaiting: state.userPagesReducer.waiting,
    displayedProfile: state.userPagesReducer.displayedProfile,
  }
};

const mapDispatchToProps = dispatch => ({
  request: (nameList) => {
    dispatch(request(nameList));
  },
  displayProfile: () => {
    dispatch(displayProfile());
  },
  displayFullList: (choice) => {
    dispatch(displayFullList(choice));
  },
});

// L'appel à connect nous renvoie une nouvelle fonction
const CollectionContainer = connect(mapStateToProps, mapDispatchToProps)(Collection);
// Cette nouvelle fonction attend qu'on lui donne un composant à enrichir
// const CollectionContainer = composantAEnrichir;

export default CollectionContainer;