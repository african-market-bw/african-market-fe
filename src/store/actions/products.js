
import * as actions from './actions';
import axois from '../../axios/axois';
import axoisAuth from '../../axios/axoisAuth';

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


export const orderSumary = () => ({
  type: actions.ORDERS,
});

const update = product => ({
  type: actions.UPDATE_PRODUCTS,
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
    const response = await axoisAuth().get(`/products/user/${id}`);
    dispatch(getUserProduct(response.data));
  } catch (err) {
    dispatch(error(err.message));
  } finally {
    dispatch(loading(false));
  }
};

export const addProduct = product => async (dispatch) => {
  dispatch(loading(true));
  try {
    const response = await axoisAuth().post('/products', product);
    dispatch(addUserProduct(response.data));
  } catch (err) {
    dispatch(error('unsuccessfull'));
  } finally {
    dispatch(loading(false));
  }
};

const getAItemProduct = product => ({
  type: actions.GET_A_PRODUCTS,
  payload: product,
});

const deleteProduct = message => ({
  type: actions.DELETE,
  message,
});

export const getAproduct = id => async (dispatch) => {
  dispatch(loading(true));
  try {
    const response = await axois.get(`/products/${id}`);
    dispatch(getAItemProduct(response.data));
  } catch (err) {
    dispatch(error(err.message));
  } finally {
    dispatch(loading(false));
  }
};
export const updateProduct = (id, product) => async (dispatch) => {
  dispatch(loading(true));
  try {
    const response = await axoisAuth().put(`/products/${id}`, product);
    dispatch(update(response.data));
    console.log(response.data);
  } catch (err) {
    dispatch(error(err.message));
  } finally {
    dispatch(loading(false));
  }
};

export const deleteAProduct = id => async (dispatch) => {
  dispatch(loading(true));
  try {
    const response = await axoisAuth().delete(`/products/${id}`);
    console.log(response.data);
    dispatch(deleteProduct(response.data));
  } catch (err) {
    dispatch(error(err.message));
  } finally {
    dispatch(loading(false));
  }
};
