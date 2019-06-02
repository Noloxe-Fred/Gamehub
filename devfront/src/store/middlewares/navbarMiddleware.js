import { CONNECT, SUBSCRIBE, receivedSubscribe, receivedConnect } from 'src/store/reducers/navbarreducer';
 
const navbarMiddleware = store => next => (action) => {
  switch (action.type) {
    case CONNECT:
      // en attente de requete axios
      store.dispatch(receivedConnect('userToken'));
      break;
    case SUBSCRIBE:
      store.dispatch(receivedSubscribe('userToken'));
      break;
    default:
      next(action);
  }
};

export default navbarMiddleware;
