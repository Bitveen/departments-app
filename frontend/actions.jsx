import fetch from 'isomorphic-fetch';
import { browserHistory } from 'react-router';



export const requestDepartments = () => {
    return {
        type: 'REQUEST_DEPARTMENTS'
    }
};

export const receiveDepartments = (json) => {
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






export const requestCreateDepartment = () => {
    console.log('requestCreateDepartment');
    return {
        type: 'REQUEST_CREATE_DEPARTMENT'
    };
};


export const successCreateDepartment = (json) => {
    console.log('successCreateDepartment');
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
                return dispatch(successCreateDepartment(json));
            });
    };
};






// export const createDepartment = (name) => {
//     return {
//         type: 'CREATE_DEPARTMENT',
//         data: name
//     };
// };
