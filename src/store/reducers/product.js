import * as actions from '../actions/actions';

const initialState = {
  products: [],
  error: '',
  loading: false,
  items: 0,
  addMessage: '',
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ORDERS:
      return {
        ...state,
        items: state.items + 1,
      };
    case actions.GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        error: '',
        addMessage: '',
      };
    case actions.LOADING_PRODUCTS:
      return {
        ...state,
        loading: action.payload,
        addMessage: '',
        error: '',
      };
    case actions.GET_USER_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case actions.ADD_PRODUCTS:
      return {
        ...state,
        error: '',
        addMessage: 'item added succesfully',
      };
    default:
      return state;
  }
};

export default productReducer;
