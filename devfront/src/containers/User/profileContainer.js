import { connect } from 'react-redux';
import Profile from 'src/components/App/Profile';


import { requestProfile } from 'src/store/reducers/userPagesReducer';

const mapStateToProps = state => ({
  loadProfile: state.userPagesReducer.loadProfile,
  userProfile: state.userPagesReducer.userProfile,
});

const mapDispatchToProps = dispatch => ({
  requestProfile: () => {
    dispatch(requestProfile());
  }
});

// L'Profileel à connect nous renvoie une nouvelle fonction
const composantAEnrichir = connect(mapStateToProps, mapDispatchToProps);
// Cette nouvelle fonction attend qu'on lui donne un composant à enrichir
const ProfileContainer = composantAEnrichir(Profile);

export default ProfileContainer;
