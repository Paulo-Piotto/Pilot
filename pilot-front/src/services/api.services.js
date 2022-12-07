import axios from 'axios';

const URL = 'http://localhost:5000';

function getAllEmployees(){
    return axios.get(`${URL}/employees`);
}

export {
    getAllEmployees,
}