import React from 'react';
import {connect} from 'react-redux';
import * as types from '../actions/types';
import axios from 'axios';
import {
    postRoomSuccess,
    postRoomUnsuccess,
    putRoomSuccess,
    putRoomUnsuccess,
    getRoomsSuccess,
    getRoomsUnsuccess,
    deleteRoomSuccess,
    deleteRoomUnsuccess,
    deleteRoomsSuccess,
    deleteRoomsUnsuccess
} from '../actions/rooms'

import {
    postRoom,
    putRoom,
    deleteRoom,
    deleteRooms,
    getRooms
} from '../api/rooms'

const Rooms = () => {
    return (
        <div>
            Rooms
        </div>
    );
}

export default connect(state => (
    {
        rooms: state.roomState.rooms
    }
), dispatch => (
    {
        postRoom: (room) => {
            postRoom(room).then((response) => {
                dispatch(postRoomSuccess(response));
            }, (response) => {
                dispatch(postRoomUnsuccess(response));
            }).then(() => {
                return getRooms();
            }).then((response) => {
                dispatch(getRoomsSuccess(response.data, response));
            }, (response) => {
                dispatch(getRoomsUnsuccess(response));
            });
        },
        putRoom: (room) => {
            putRoom.then((response) => {
                dispatch(putRoomSuccess(response));
            }, (response) => {
                dispatch(putRoomUnsuccess(response));
            }).then(() => {
                return getRooms();
            }).then((response) => {
                dispatch(getRoomsSuccess(response.data, response));
            }, (response) => {
                dispatch(getRoomsUnsuccess(response));
            });
        },
        getRooms: () => {
            getRooms.then((response) => {
                dispatch(getRoomsSuccess(response.data, response));
            }, (response) => {
                dispatch(getRoomsUnsuccess(response));
            });
        },
        deleteRoom: (id) =>{
            deleteRooms(id).then((response) => {
                dispatch(deleteRoomSuccess(response));
            }, (response) => {
                dispatch(deleteRoomUnsuccess(response));
            }).then(() => {
                return getRooms();
            }).then((response) => {
                dispatch(getRoomsSuccess(response.data, response));
            }, (response) => {
                dispatch(getRoomsUnsuccess(response));
            });
        },
        deleteRooms: (ids) =>{
            deleteRooms(ids).then((response) => {
                dispatch(deleteRoomsSuccess(response));
            }, (response) => {
                dispatch(deleteRoomsUnsuccess(response));
            }).then(() => {
                return getRooms();
            }).then((response) => {
                dispatch(getRoomsSuccess(response.data, response));
            }, (response) => {
                dispatch(getRoomsUnsuccess(response));
            });
        }
    }
))(Rooms);