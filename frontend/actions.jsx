import fetch from 'isomorphic-fetch';
import { browserHistory } from 'react-router';



const requestDepartments = () => {
    return {
        type: 'REQUEST_DEPARTMENTS'
    }
};

const receiveDepartments = (json) => {
    return {
        type: 'RECEIVE_DEPARTMENTS',
        data: json
    };
};

export function fetchDepartments() {
    return dispatch => {
        dispatch(requestDepartments());
        return fetch(`/api/departments`)
            .then(response => response.json())
            .then(json => dispatch(receiveDepartments(json)))
    };
};






const requestCreateDepartment = () => {
    return {
        type: 'REQUEST_CREATE_DEPARTMENT'
    };
};


const successCreateDepartment = (json) => {
    return {
        type: 'SUCCESS_CREATE_DEPARTMENT',
        data: json
    };
};




export function createDepartment(department) {
    return dispatch => {
        dispatch(requestCreateDepartment());
        return fetch(`/api/department`, { method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(department) })
            .then(response => response.json())
            .then(json => {
                browserHistory.push('/departments');
                dispatch(successCreateDepartment(json));
            });
    };
};



export function updateDepartment(department) {
    return dispatch => {
        dispatch(requestUpdateDepartment());
        return fetch(`/api/department/${department.id}`,
            { method: 'PUT', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: department.name }) })
            .then(response => response.json())
            .then(json => {
                dispatch(successUpdateDepartment(json));
                browserHistory.push(`/departments`);
            });
    };


};



const requestUpdateDepartment = () => {
    return {
        type: 'REQUEST_UPDATE_DEPARTMENT'
    };
};


const successUpdateDepartment = () => {
    return {
        type: 'SUCCESS_UPDATE_DEPARTMENT'
    };
};
