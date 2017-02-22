import * as types from '../actions/types';

export default postRoomSuccess(response)({
    type:types.POST_ROOM_SUCCESS,
    response: response
});

export default postRoomUnsuccess(response)({
    type:types.POST_ROOM_UNSUCCESS,
    response: response
});

export default putRoomSuccess(response)({
    type:types.PUT_ROOM_SUCCESS,
    response: response
});

export default putRoomUnsuccess(response)({
    type:types.PUT_ROOM_UNSUCCESS,
    response: response
});


export default getRoomsSuccess(rooms,response)({
    type:types.GET_ROOMS_SUCCESS,
    rooms: rooms,
    response: response
});

export default getRoomsUnsuccess(response)({
    type:types.GET_ROOMS_UNSUCCESS,
    response: response
});

export default deleteRoomsSuccess(response)({
    type:types.DELETE_ROOMS_SUCCESS,
    response: response
});

export default deleteRoomsUnsuccess(response)({
    type:types.DELETE_ROOMS_UNSUCCESS,
    response: response
});

export default deleteRoomSuccess(response)({
    type:types.DELETE_ROOM_SUCCESS,
    response: response
});

export default deleteRoomUnsuccess(response)({
    type:types.DELETE_ROOM_UNSUCCESS,
    response: response
});

