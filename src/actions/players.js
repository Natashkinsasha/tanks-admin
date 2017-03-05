import * as types from '../actions/types';

export function postPlayerSuccess(response) {
    return {
        type: types.POST_PLAYER_SUCCESS,
        response,
    };
};


export function postPlayerUnsuccess(response) {
    return {
        type: types.POST_PLAYER_UNSUCCESS,
        response,
    };
};

export function putPlayerSuccess(response) {
    return {
        type: types.PUT_PLAYER_SUCCESS,
        response,
    }
};

export function putPlayerUnsuccess(response) {
    return {
        type: types.PUT_PLAYER_UNSUCCESS,
        response,
    }
};


export function getPlayersSuccess(players, response) {
    return {
        type: types.GET_PLAYERS_SUCCESS,
        players,
        response,
    }
};

export function getPlayersUnsuccess(response) {
    return {
        type: types.GET_PLAYERS_UNSUCCESS,
        response,
    }
};

export function deletePlayersSuccess(response) {
    return {
        type: types.DELETE_PLAYERS_SUCCESS,
        response,
    }
};

export function deletePlayersUnsuccess(response) {
    return {
        type: types.DELETE_PLAYERS_UNSUCCESS,
        response,
    }
};

export function deletePlayerSuccess(response) {
    return {
        type: types.DELETE_PLAYER_SUCCESS,
        response,
    }
};

export function deletePlayerUnsuccess(response) {
    return {
        type: types.DELETE_PLAYER_UNSUCCESS,
        response,
    }
};


