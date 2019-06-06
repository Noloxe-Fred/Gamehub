import axios from 'axios';

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
      store.dispatch(receivedConnect());
      break;

    case CONNECT:
      store.dispatch(loadingConnection());
      // en attente de requete axios
      const email = store.getState().navbarreducer.connectPseudo;
      const password = store.getState().navbarreducer.connectPassword;

      axios.post('http://api.gamehub.com/api/signin', {
        headers: {
          'Content-Type': 'application/json',
        },
        username: email,
        password: password
      })
        .then((response) => {
          console.log('Reponse Connexion', response);
          localStorage.setItem('connect', true);
          localStorage.setItem('remember', true); // if case cochée!
          localStorage.setItem('user', response.data.token);
          store.dispatch(receivedConnect());
        })
        .catch((error) => {
          console.log(error);
        });

      break;

    case SUBSCRIBE:
      // requete axios: if subscribe ok =
      store.dispatch(receivedSubscribe('subscribeOk'));
      const subemail = store.getState().navbarreducer.subemail;
      const subpseudo = store.getState().navbarreducer.subpseudo;
      const subpassword = store.getState().navbarreducer.subpassword;
      const subconfirmpassword = store.getState().navbarreducer.subconfirmpassword;
      console.log(subpseudo);

      axios.post('http://api.gamehub.com/api/signup', {
        headers: {
          'Content-Type': 'application/json',
        },
        email: subemail,
        pseudo: subpseudo,
        password: subpassword,
        confirmpassword: subconfirmpassword,
      })
        .then((response) => {
          console.log('Reponse Subscribe', response.data);
          const { email } = response.data;
          store.dispatch(receivedSubscribe('subscribeOk', email));

        })
        .catch((error) => {
          console.log(error);
        });

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
