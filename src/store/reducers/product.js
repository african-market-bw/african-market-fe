import * as actions from '../actions/actions';

const initialState = {
  products: [],
  error: '',
  loading: false,
  items: 0,
  addMessage: '',
  update: '',
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
        update: '',
      };
    case actions.ADD_PRODUCTS:
      return {
        ...state,
        products: state.products.concat(action.payload),
        error: '',
        addMessage: 'item added succesfully',
      };
    case actions.GET_A_PRODUCTS:
      return {
        ...state,
        error: '',
        update: action.payload,
      };
    case actions.UPDATE_PRODUCTS:
      return {
        ...state,
        products: product(),
        error: '',
        addMessage: 'item updated succesfully',
      };
    default:
      return state;
  }
};

export default productReducer;
