import { connect } from 'react-redux';
import GameHeader from 'src/components/GamePage/GameHeader';

import { checkedCategories } from 'src/store/reducers/advancedSearchPageReducer';

const mapStateToProps = (state, ownProps) => ({
  datas: state.gamePageReducer.gameDatas,
});

const mapDispatchToProps = dispatch => ({
  checkedCategories: (categoryId) => {
    dispatch(checkedCategories(categoryId));
  },
});

// L'GameHeaderel à connect nous renvoie une nouvelle fonction
const composantAEnrichir = connect(mapStateToProps, mapDispatchToProps);
// Cette nouvelle fonction attend qu'on lui donne un composant à enrichir
const GameHeaderContainer = composantAEnrichir(GameHeader);

export default GameHeaderContainer;
