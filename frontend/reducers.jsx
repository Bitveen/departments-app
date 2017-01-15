export const departments = (state = [], action) => {

    switch (action.type) {
        case 'CREATE_DEPARTMENT':
            return state;
            break;
        case 'UPDATE_DEPARTMENT':
            return state;
            break;
        default:
            return state;
    }
};
