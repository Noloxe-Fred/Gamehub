import { 
  CONNECT,
  SUBSCRIBE,
  CONNECT_SAVED_USER,
  DISCONNECT,
  receivedSubscribe,
  receivedConnect,
  loadingConnection,
  receivedDisconnect,
} from 'src/store/reducers/navbarreducer';
 
const navbarMiddleware = store => next => (action) => {
  switch (action.type) {
    case CONNECT_SAVED_USER:

      const userToken = localStorage.getItem('token');
      // requete api User with token + dispatch receivedConnect()
      break;
    case CONNECT:
      store.dispatch(loadingConnection());
      // en attente de requete axios

      localStorage.setItem('connect', true);
      localStorage.setItem('remember', false); // if case cochée!
      localStorage.setItem('user', 'token');
      store.dispatch(receivedConnect());
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
    case DISCONNECT:
      localStorage.clear();
      store.dispatch(receivedDisconnect());
      break;
    default:
      next(action);
  }
};

export default navbarMiddleware;
