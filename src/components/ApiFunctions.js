import axios from "axios";

export function login ( username, password ){
    axios.post('https://devdesk-queue-bw.herokuapp.com/auth/login', { username, password })
        .then(data=>{
            sessionStorage.setItem(data.token)
            return data
        })
        .catch(error=>{
            return error
        })
}