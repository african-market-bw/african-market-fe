// import { LOGIN, SIGNUP } from './store/actions/actions';

const customMiddleware = () => next => (action) => {
  // if (action.type === LOGIN || action.type === SIGNUP) {
  //   localStorage.setItem('userToken', action.payload.token);
  // }
  next(action);
};

export default customMiddleware;
