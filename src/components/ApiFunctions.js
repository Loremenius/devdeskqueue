import axios from "axios";

function login ( username, password ){
    axios.post('https://devdesk-queue-bw.herokuapp.com/auth/login', { username, password })
        .then(data=>{
            
        })
        .catch(error=>{

        })
}