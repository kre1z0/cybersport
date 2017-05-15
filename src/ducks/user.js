import {createAction, createReducer} from 'redux-act';
import {Record} from 'immutable';

import {fetchSession, fetchUserInfo} from '../evergis/api';

const User = Record({
    full_name: '',
    tb_name: '',
    role_name: '',
    employee_id: undefined,
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

export const getUser = () => dispatch => {
    dispatch(login());
    return fetchSession()
        .then(response => {
            dispatch(loginSuccess(response));
            return response;
        })
        .then(({login}) => {
            dispatch(fetch());
            return fetchUserInfo({login});
        })
        .then(({data}) => {
            dispatch(fetchSuccess(data));
        })
        .catch(error => dispatch(loginError(error.message || error)));
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
             .set('error', payload),
    
    [fetch]: (state, payload) =>
        state.set('loading', true),
    
    [fetchSuccess]: (state, {full_name, tb_name, role_name, employee_id}) =>
        state.set('loading', false)
            .set('error', false)
            .set('full_name', full_name)
            .set('tb_name', tb_name)
            .set('role_name', role_name)
            .set('employee_id', employee_id)
}, initState)


