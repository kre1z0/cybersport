import {createAction, createReducer} from 'redux-act';
import {getSession, getUserInfo} from '../evergis/api';

const initState = {
    name: 'Константинопольский К. К.',
    office: 'ЦА ПАО Сбербанк',
    post: 'Руководитель ПМЗ'
};

const login = createAction('user/login');
const loginSuccess = createAction('user/login-success');
const loginError = createAction('user/login-error');

export const getUser = () => (dispatch) => {
    dispatch(login());
    getSession()
        .then(response => {
            getUserInfo({});
            dispatch(loginSuccess(response));
        })
        .catch(error => dispatch(loginError(error)))
};

export default createReducer({
    [login]: (state, payload) => ({
        ...state,
        loading: true
    }),
    [loginSuccess]: (state, payload) => ({
        ...state,
        loading: false,
        error: false,
        ...payload
    }),
    [loginError]: (state, payload) => ({
        ...state,
        loading: false,
        error: true
    })
}, initState)


