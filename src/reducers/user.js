import * as types from '../actions/types';

const initialState = {
    user: {
        roles: ["GUEST_ROLE"]
    },
    response: null
}

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.LOGIN_SUCCESS:
            return {...state, user: action.user};
        case types.LOGIN_UNSUCCESS:
            return {...state, response: action.response};
        case types.LOGOUT:
            return initialState;
    }

    return state;
}

export default userReducer;