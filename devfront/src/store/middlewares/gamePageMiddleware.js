import oneGame from 'src/data/oneGame';

// Import de Request_Game depuis GamepageReducer
import { REQUEST_GAME, receivedGame, loadGame } from 'src/store/reducers/gamePageReducer';

// on fait un switch (permet une ou plusieurs conditions comme les IF,else if ect )
const gamePageMiddleware = store => next => (action) => {
switch (action.type) {
    case REQUEST_GAME:
        store.dispatch(loadGame());
        // requete axios en attente!
        store.dispatch(receivedGame(oneGame));
        break;
    default:
        next(action);
    }
};

export default gamePageMiddleware;
