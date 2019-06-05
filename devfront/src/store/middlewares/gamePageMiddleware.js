import oneGame from 'src/data/oneGame';

// Import de Request_Game depuis GamepageReducer
import { REQUEST_GAME, receivedGame, loadGame } from 'src/store/reducers/gamePageReducer';

// on fait un switch (permet une ou plusieurs conditions comme les IF,else if ect )
const gamePageMiddleware = store => next => (action) => {
  switch (action.type) {
    case REQUEST_GAME:
      store.dispatch(loadGame());
      // requete axios en attente!
      // Pour requete du jeu: id du jeu = action.gameId
      // scinder datas
      const gameDatas = {
        name: oneGame.name,
        cover: oneGame.cover, 
        desc: oneGame.description, 
        score: oneGame.score, 
        developer: oneGame.developer, 
        editor: oneGame.editor, 
        released: oneGame.released, 
        website: oneGame.website, 
        categories: oneGame.categories
      };
      const commentsDatas = oneGame.comments;
      const background = oneGame.illustration;

      store.dispatch(receivedGame(gameDatas, commentsDatas, background));
      break;
    default:
      next(action);
  }
};

export default gamePageMiddleware;
