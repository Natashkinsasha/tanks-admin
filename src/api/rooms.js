import axios from 'axios'


export default function postRoom(user){
    return axios.post('api/rooms', user);
}

export default function putRoom(user){
    return axios.put('api/rooms', user);
}

export default function getRooms(){
    return axios.get('api/rooms');
}

export default function deleteRooms(ids){
    return axios.delete('api/rooms', {params:{ids:ids}});
}

export default function deleteRoom(id){
    return axios.delete('api/rooms/'+id);
}