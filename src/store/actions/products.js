import * as actions from './actions';
import axois from '../../axios/axois';

const fetchProductSuccess = products => ({
  type: actions.GET_ALL_PRODUCTS,
  payload: products,
});

export const errorFetching = bool => ({
  type: actions.ERROR_PRODUCTS,
  payload: bool,
});

const loading = bool => ({
  type: actions.LOADING_PRODUCTS,
  payload: bool,
});

export const getAllProducts = () => async (dispatch) => {
  dispatch(loading(true));
  try {
    const response = await axois.get('/products');
    dispatch(fetchProductSuccess(response.data));
  } catch (error) {
    debugger;
  } finally {
    dispatch(loading(false));
  }
};
