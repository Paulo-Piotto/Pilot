import axios from 'axios';

const URL = 'http://localhost:5000';

function getAllEmployees(){
    return axios.get(`${URL}/employees`);
}

function registerEmployee(newEmployee){
    return axios.post(`${URL}/employees`, newEmployee);
}

export {
    getAllEmployees,
    registerEmployee,
}