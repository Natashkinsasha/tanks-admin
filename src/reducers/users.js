import * as types from '../actions/types';

const initialState = {
    users: [],
    response: null
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.GET_USERS_SUCCESS:
            return {...state, users: action.users, response: action.response};
        case types.GET_USERS_UNSUCCESS:
            return {...state, users: [], response: action.response};
        case types.POST_USER_SUCCESS:
            return {...state, response: action.response};
        case types.POST_USER_UNSUCCESS:
            return {...state, response: action.response};
        case types.PUT_USER_SUCCESS:
            return {...state, response: action.response};
        case types.PUT_USER_UNSUCCESS:
            return {...state, response: action.response};
        case types.DELETE_USER_SUCCESS:
            return {...state, response: action.response};
        case types.DELETE_USER_UNSUCCESS:
            return {...state, response: action.response};
        case types.DELETE_USERS_SUCCESS:
            return {...state, response: action.response};
        case types.DELETE_USERS_UNSUCCESS:
            return {...state, response: action.response};
        case types.CLOSE_USERS_RESPONSE:
            return {...state, response: null}
    }

    return state;
}

export default usersReducer;
