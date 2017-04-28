import {createAction, createReducer} from 'redux-act';
import {Record} from 'immutable';

import {getSession, getUserInfo} from '../evergis/api';

const User = Record({
    full_name: '',
    tb_name: '',
    role_name: '',
    login: '',
    loading: false,
    error: false
});

const initState = new User();

const login = createAction('user/login');
const loginSuccess = createAction('user/login-success');
const loginError = createAction('user/login-error');

const fetch = createAction('user/fetch');
const fetchSuccess = createAction('user/fetch-success');
const fetchError = createAction('user/fetch-error');

export const getUser = () => (dispatch) => {
    dispatch(login());
    getSession()
        .then(response => {
            dispatch(loginSuccess(response));
            return response;
        })
        .catch(error => dispatch(loginError(error)))
        .then(({login}) => {
            dispatch(fetch());
            return getUserInfo({login});
        })
        .then(({data}) => {
            dispatch(fetchSuccess(data));
        })
        .catch(error => dispatch(fetchError(error)))
    
};

export default createReducer({
    [login]: (state, payload) =>
        state.set('loading', true),
    
    [loginSuccess]: (state, {login}) =>
        state.set('loading', false)
             .set('error', false)
             .set('login', login),
    
    [loginError]: (state, payload) =>
        state.set('loading', false)
             .set('error', true),
    
    [fetch]: (state, payload) =>
        state.set('loading', true),
    
    [fetchSuccess]: (state, {full_name, tb_name, role_name}) =>
        state.set('loading', false)
            .set('error', false)
            .set('full_name', full_name)
            .set('tb_name', tb_name)
            .set('role_name', role_name),
    
    [fetchError]: (state, payload) =>
        state.set('loading', false)
            .set('error', true),
    
}, initState)


