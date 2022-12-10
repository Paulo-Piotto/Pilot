import axios from 'axios';

const URL = 'http://localhost:5000';

function getAllEmployees(){
    return axios.get(`${URL}/employees`);
}

function registerEmployee(newEmployee){
    return axios.post(`${URL}/employees`, newEmployee);
}

function searchEmployeeByName(employeeName){
    return axios.get(`${URL}/employees?name=${employeeName}`);
}

export {
    getAllEmployees,
    registerEmployee,
    searchEmployeeByName,
}