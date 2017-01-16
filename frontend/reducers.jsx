import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';


const departments = (state = {
    isFetching: false,
    items: []
}, action) => {

    switch (action.type) {
        case 'REQUEST_DEPARTMENTS':
            return Object.assign({}, state, {
                isFetching: true
            });
            break;
        case 'RECEIVE_DEPARTMENTS':
            return Object.assign({}, state, {
                items: action.data,
                isFetching: false
            });
            break;

        case 'REQUEST_CREATE_DEPARTMENT':
            return Object.assign({}, state, {
                isFetching: true
            });
            break;
        case 'SUCCESS_CREATE_DEPARTMENT':
            console.log(action.data);
            return Object.assign({}, state, {
                items: state.items.concat([action.data]),
                isFetching: false
            });
            break;
        case 'REQUEST_UPDATE_DEPARTMENT':
            return Object.assign({}, state, {
                isFetching: true
            });
            break;
        case 'SUCCESS_UPDATE_DEPARTMENT':
            return Object.assign({}, state, {
                isFetching: false,
                items: state.items.map(item => {
                    if (item.id === action.id) {
                        item.name = action.name;
                    }
                    return item;
                })
            });
            break;
        default:
            return state;
    }
};


export default combineReducers({
    departments: departments,
    routing: routerReducer
});
