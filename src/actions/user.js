import * as types from '../actions/types';

export function loginSuccess(user, response) {
    return {
        type: types.LOGIN_SUCCESS,
        response,
        user,
    };
};


export function loginUnsuccess(response) {
    return {
        type: types.LOGIN_UNSUCCESS,
        response,
    };
};


export function logout() {
    return {
        type: types.LOGOUT,
    };
};


