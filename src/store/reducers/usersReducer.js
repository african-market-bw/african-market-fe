import * as actions from '../actions/actions';

const initialState = {
  user: [],
  login: false,
  loading: false,
  errorLogin: '',
  errorSignUp: '',
  message: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN:
      return {
        ...state,
        login: true,
        errorLogin: '',
        user: action.payload,
        message: action.message,
      };
    case actions.ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case actions.LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case actions.SIGNUP:
      return {
        ...state,
        message: action.payload,
        errorSignUp: '',
        login: true,
      };
    case actions.ERROR_LOGIN:
      return {
        ...state,
        errorLogin: action.payload,
      };
    case actions.ERROR_SIGNUP:
      return {
        ...state,
        errorSignUp: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
