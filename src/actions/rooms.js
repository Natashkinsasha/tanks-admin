import * as types from '../actions/types';

export function postRoomSuccess(response) {
    return {
        type: types.POST_ROOM_SUCCESS,
        response,
    };
};


export function postRoomUnsuccess(response) {
    return {
        type: types.POST_ROOM_UNSUCCESS,
        response,
    };
};

export function putRoomSuccess(response) {
    return {
        type: types.PUT_ROOM_SUCCESS,
        response,
    }
};

export function putRoomUnsuccess(response) {
    return {
        type: types.PUT_ROOM_UNSUCCESS,
        response,
    }
};


export function getRoomsSuccess(rooms, response) {
    return {
        type: types.GET_ROOMS_SUCCESS,
        rooms: rooms,
        response,
    }
};

export function getRoomsUnsuccess(response) {
    return {
        type: types.GET_ROOMS_UNSUCCESS,
        response,
    }
};

export function deleteRoomsSuccess(response) {
    return {
        type: types.DELETE_ROOMS_SUCCESS,
        response,
    }
};

export function deleteRoomsUnsuccess(response) {
    return {
        type: types.DELETE_ROOMS_UNSUCCESS,
        response,
    }
};

export function deleteRoomSuccess(response) {
    return {
        type: types.DELETE_ROOM_SUCCESS,
        response,
    }
};

export function deleteRoomUnsuccess(response) {
    return {
        type: types.DELETE_ROOM_UNSUCCESS,
        response,
    }
};

