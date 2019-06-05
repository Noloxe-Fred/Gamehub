import { CONNECT, SUBSCRIBE, receivedSubscribe, receivedConnect, loadingConnection } from 'src/store/reducers/navbarreducer';
 
const navbarMiddleware = store => next => (action) => {
  switch (action.type) {
    case CONNECT:
      store.dispatch(loadingConnection());
      // en attente de requete axios
      store.dispatch(receivedConnect('userToken'));
      break;
    case SUBSCRIBE:
      // requete axios: if subscribe ok =
      store.dispatch(receivedSubscribe('subscribeOk'));

      // if subscribe not ok = erreur
      // store.dispatch(receivedSubscribe('subscribeError'));

      // il user already exist:
      // store.dispatch(receivedSubscribe('subscribeAlreadyExist'));

      // il password not conforme:
      // store.dispatch(receivedSubscribe('subscribePassWordNotConforme'));

      // il password not match:
      // store.dispatch(receivedSubscribe('subscribePassNotPareil'));
      break;
    default:
      next(action);
  }
};

export default navbarMiddleware;
