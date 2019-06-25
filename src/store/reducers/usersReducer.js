import * as actions from '../actions/actions';

const initialState = {
  user: [],
  login: false,
  loading: false,
  error: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN:
      return {
        ...state,
        login: true,
        error: '',
        user: action.payload,
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
    default:
      return state;
  }
};

export default userReducer;
