import * as types from '../actions/types';

const initialState = {
    players: [],
    response: null
}

const playersReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.GET_PLAYERS_SUCCESS:
            return {...state, players: action.players, response: action.response};
        case types.GET_PLAYERS_UNSUCCESS:
            return {...state, players: [], response: action.response};
        case types.POST_PLAYER_SUCCESS:
            return {...state, response: action.response};
        case types.POST_PLAYER_UNSUCCESS:
            return {...state, response: action.response};
        case types.PUT_PLAYER_SUCCESS:
            return {...state, response: action.response};
        case types.PUT_PLAYER_UNSUCCESS:
            return {...state, response: action.response};
        case types.DELETE_PLAYER_SUCCESS:
            return {...state, response: action.response};
        case types.DELETE_PLAYER_UNSUCCESS:
            return {...state, response: action.response};
        case types.DELETE_PLAYERS_SUCCESS:
            return {...state, response: action.response};
        case types.DELETE_PLAYERS_UNSUCCESS:
            return {...state, response: action.response};
        case types.CLOSE_PLAYERS_RESPONSE:
            return {...state, response: null}
    }

    return state;
}

export default playersReducer;
