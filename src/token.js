import { LOGIN } from './store/actions/actions';

const customMiddleware = () => next => (action) => {
  if (action.type === LOGIN) {
    localStorage.setItem('userToken', action.payload.token);
  }
  next(action);
};

export default customMiddleware;
