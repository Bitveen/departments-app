import fetch from 'isomorphic-fetch';



export const createDepartment = (department) => {
    return {
        type: 'CREATE_DEPARTMENT',
        data: department
    };
};


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




// export const createDepartment = (name) => {
//     return {
//         type: 'CREATE_DEPARTMENT',
//         data: name
//     };
// };
