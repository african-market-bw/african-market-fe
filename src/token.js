import { LOGIN } from './store/actions/actions';

const customMiddleware = () => next => (action) => {
  if (LOGIN) {
    localStorage.setItem('userToken', action.payload);
  }
  next(action);
};

export default customMiddleware;
