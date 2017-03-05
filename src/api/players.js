import axios from 'axios'

const players = [];

export function postPlayer(player){
    return axios.post('api/players', player);
}

export function putPlayer(player){
    return axios.put('api/players', player);
}

export function getPlayers(){
    return axios.get('api/players');
}

export function deletePlayers(ids){
    return axios.delete('api/players', {params:{ids:ids}});
}

export function deletePlayer(id){
    return axios.delete('api/players/'+id);
}