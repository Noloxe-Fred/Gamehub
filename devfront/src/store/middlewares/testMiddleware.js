const testMiddleware = store => next => (action) => {
  console.log(action);
  next(action);
};

export default testMiddleware;
