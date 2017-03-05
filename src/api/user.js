import axios from 'axios'


export function login(user){
    return axios.post('api/login', user);
}
