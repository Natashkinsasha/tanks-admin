import axios from 'axios'


export default function postUser(user){
    return axios.post('api/users', user);
}

export default function putUser(user){
    return axios.put('api/users', user);
}

export default function getUsers(){
    return axios.get('api/users');
}

export default function deleteUsers(ids){
    return axios.delete('api/users', {params:{ids:ids}});
}

export default function deleteUser(id){
    return axios.delete('api/users/'+id);
}