import * as types from '../actions/types';

const initialState = {
    rooms: [],
    response: null
}

const roomsReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.GET_ROOMS_SUCCESS:
            return {...state, rooms: action.rooms, response: action.response};
        case types.GET_ROOMS_UNSUCCESS:
            return {...state, rooms: [], response: action.response};
        case types.POST_ROOM_SUCCESS:
            return {...state, response: action.response};
        case types.POST_ROOM_UNSUCCESS:
            return {...state, response: action.response};
        case types.PUT_ROOM_SUCCESS:
            return {...state, response: action.response};
        case types.PUT_ROOM_UNSUCCESS:
            return {...state, response: action.response};
        case types.DELETE_ROOM_SUCCESS:
            return {...state, response: action.response};
        case types.DELETE_ROOM_UNSUCCESS:
            return {...state, response: action.response};
        case types.DELETE_ROOMS_SUCCESS:
            return {...state, response: action.response};
        case types.DELETE_ROOMS_UNSUCCESS:
            return {...state, response: action.response};
        case types.CLOSE_ROOMS_RESPONSE:
            return {...state, response: null}
    }
    return state;
}

export default roomsReducer;