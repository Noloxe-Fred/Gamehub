const testMiddleware = store => next => (action) => {

  const instance = axios.create({
    baseURL: 'http://api.gamehub.com/api/',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+user
    },
  });

  instance.post('/')
    .then((response) => {
      console.log(response.data);

      store.dispatch();
    })
    .catch((error) => {
      console.log(error);
    });

  console.log(action);
  next(action);
};

export default testMiddleware;
