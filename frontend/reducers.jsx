import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';



const defaultData = [
    {
        id: 1,
        name: 'Marketing',
        edit: false
    },
    {
        id: 2,
        name: 'Support',
        edit: false
    }
];



export const departments = (state = {
    isFetching: false,
    items: defaultData
}, action) => {

    switch (action.type) {
        case 'FETCH_START':
            break;
        case 'FETCH_SUCCESS':
            break;
        case 'CREATE_DEPARTMENT':
            return state;
            break;
        case 'UPDATE_DEPARTMENT':
            let {id, name} = action.data;
            return state.map(department => {
                if (department.id === id) {
                    department.name = name;
                }
                return department;
            });
            break;
        case 'SHOW_EDIT_FORM':
            return state.map(department => {
                if (department.id === action.data) {
                    department.edit = true;
                }
                return department;
            });
            break;
        case 'HIDE_EDIT_FORM':
            return state.map(department => {
                if (department.id === action.data) {
                    department.edit = false;
                }
                return department;
            });
            break;
        default:
            return state;
    }
};



export const createDepartment = (state = {
    showForm: false,
    isFetching: false
}, action) => {
    switch (action.type) {
        case 'SHOW_CREATE_DEPARTMENT':
            return Object.assign({}, state, {
                showForm: true
            });
            break;
        case 'HIDE_CREATE_DEPARTMENT':
            return Object.assign({}, state, {
                showForm: false
            });
            break;
        default:
            return state;
    }
};



export default combineReducers({
    departments: departments,
    createDepartment: createDepartment,
    routing: routerReducer
});
