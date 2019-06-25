import axois from 'axios';
import * as actions from './actions';
// import axois from '../../axios/axois';

export const successLogin = user => ({
  type: actions.LOGIN,
  payload: user,
});

export const errorLogin = error => ({
  type: actions.ERROR,
  payload: error,
});

const loading = bool => ({
  type: actions.LOADING,
  payload: bool,
});

export const postLogin = data => async (dispatch) => {
  dispatch(loading(true));
  try {
    const response = await axois.post('https://amarketplace.herokuapp.com/api/auth/login', data);
    console.log(response.data)
    dispatch(successLogin(response.data));
  } catch (error) {
    dispatch(errorLogin(error.message));
  } finally {
    dispatch(loading(false));
  }
};
