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
  type: actions.ERROR_LOGIN,
  payload: error,
});

const errorSignUp = err => ({
  type: actions.ERROR_SIGNUP,
  payload: err,
});

const loading = bool => ({
  type: actions.LOADING,
  payload: bool,
});

const signUp = user => message => ({
  type: actions.SIGNUP,
  payload: user,
  message,
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
    dispatch(errorLogin('invalid username and password'));
  } finally {
    dispatch(loading(false));
  }
};

export const postSignUp = data => async (dispatch) => {
  dispatch(loading(true));
  dispatch(errorSignUp(''));
  try {
    const response = await axois.post('/auth/register', data);
    localStorage.setItem('userToken', response.data.token);
    const decoded = jwt.decode(response.data.token);
    dispatch(signUp(decoded)(response.data.message));
  } catch (error) {
    dispatch(errorSignUp('failed signup kindly input valid information'));
  } finally {
    dispatch(loading(false));
  }
};
