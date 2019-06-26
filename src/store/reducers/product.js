import * as actions from '../actions/actions';

const initialState = {
  products: [],
  error: '',
  loading: false,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case actions.LOADING_PRODUCTS:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
