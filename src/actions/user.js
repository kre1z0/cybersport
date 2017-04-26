import {getSession} from '../evergis/api';
import {LOGIN_ERROR, LOGIN, LOGIN_SUCCESS, LOGOUT} from '../reducers/user';

const login = () => ({
    type: LOGIN
});

export const loginSuccess = (payload) => ({
    type: LOGIN_SUCCESS,
    ...payload
});

export const loginError = (error) => ({
    type: LOGIN_ERROR,
    error
});

export const getUser = () => (dispatch) => {
    dispatch(login());
    getSession()
        .then(response => dispatch(loginSuccess(response)))
        .catch(error => dispatch(loginError(error)))
};
