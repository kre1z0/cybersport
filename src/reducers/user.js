
export const LOGIN = 'user/login';
export const LOGIN_SUCCESS = 'user/login-success';
export const LOGIN_ERROR = 'user/login-error';
export const LOGOUT = 'user/logout';

const initState = {
    name: 'Константинопольский К. К.',
    office: 'ЦА ПАО Сбербанк',
    post: 'Руководитель ПМЗ'
};

export default (state = initState, {type, ...payload}) => {
    switch (type) {
        case LOGIN:
           return {
               ...state,
               loading: true
           };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                ...payload
            };
        case LOGIN_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            };
        default: return state;
    }
}
