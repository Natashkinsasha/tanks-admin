import axios from 'axios'


export function postRoom(user){
    return axios.post('api/rooms', user);
}

export function putRoom(user){
    return axios.put('api/rooms', user);
}

export function getRooms(){
    return axios.get('api/rooms');
}

export function deleteRooms(ids){
    return axios.delete('api/rooms', {params:{ids:ids}});
}

export  function deleteRoom(id){
    return axios.delete('api/rooms/'+id);
}