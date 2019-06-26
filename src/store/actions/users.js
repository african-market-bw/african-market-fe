// import axois from 'axios';
import jwt from 'jsonwebtoken';
import * as actions from './actions';
import axois from '../../axios/axois';

export const successLogin = user => message => ({
  type: actions.LOGIN,
  payload: user,
  message,
});

export const errorLogin = error => ({
  type: actions.ERROR,
  payload: error,
});

const loading = bool => ({
  type: actions.LOADING,
  payload: bool,
});

const signUp = message => ({
  type: actions.SIGNUP,
  payload: message,
});

export const postLogin = data => async (dispatch) => {
  dispatch(loading(true));
  dispatch(errorLogin(''));
  try {
    const response = await axois.post('/auth/login', data);
    localStorage.setItem('userToken', response.data.token);
    const decoded = jwt.decode(response.data.token);
    dispatch(successLogin(decoded)(response.data.message));
  } catch (error) {
    dispatch(errorLogin(error.message));
  } finally {
    dispatch(loading(false));
  }
};

export const postSignUp = data => async (dispatch) => {
  dispatch(loading(true));
  dispatch(errorLogin(''));
  try {
    const response = await axois.post('/auth/register', data);
    dispatch(signUp(response.data));
  } catch (error) {
    dispatch(errorLogin(error.message));
  }
};
