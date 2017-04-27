import {createAction, createReducer} from 'redux-act';
import {getSession, getUserInfo} from '../evergis/api';

const initState = {
    full_name: '',
    tb_name: '',
    role_name: ''
};

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
    }),
    [fetch]: (state, payload) => ({
        ...state,
        loading: true
    }),
    [fetchSuccess]: (state, payload) => ({
        ...state,
        loading: false,
        error: false,
        ...payload
    }),
    [fetchError]: (state, payload) => ({
        ...state,
        loading: false,
        error: true
    })
}, initState)


