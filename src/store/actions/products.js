
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

const error = errors => ({
  type: actions.ERROR,
  payload: errors,
});

const getUserProduct = product => ({
  type: actions.GET_USER_PRODUCTS,
  payload: product,
});

const addUserProduct = product => ({
  type: actions.ADD_PRODUCTS,
  payload: product,
});

export const getAllProducts = () => async (dispatch) => {
  dispatch(loading(true));
  try {
    const response = await axois.get('/products');
    dispatch(fetchProductSuccess(response.data));
  } catch (err) {
    dispatch(error(err.message));
  } finally {
    dispatch(loading(false));
  }
};

export const getAUserProduct = id => async (dispatch) => {
  dispatch(loading(true));
  try {
    const response = await axois.get(`/products/${id}`);
    console.log(response.data);
  } catch (err) {
    console.log(err);
  } finally {
    dispatch(loading(false));
  }
};

export const addProduct = product => async (dispatch) => {
  dispatch(loading(true));
  try {
    const response = await axois.post('/products', product);
    console.log(response.data);
  } catch (err) {
    console.log(err);
  } finally {
    dispatch(loading(false));
  }
};
