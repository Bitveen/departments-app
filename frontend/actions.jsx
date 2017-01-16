
export const createDepartment = (department) => {
    return {
        type: 'CREATE_DEPARTMENT',
        data: department
    };
};

export const showCreateDepartment = () => {
    return {
        type: 'SHOW_CREATE_DEPARTMENT'
    };
};

export const hideCreateDepartment = () => {
    return {
        type: 'HIDE_CREATE_DEPARTMENT'
    };
};







// export const createDepartment = (name) => {
//     return {
//         type: 'CREATE_DEPARTMENT',
//         data: name
//     };
// };
//
// export const updateDepartment = (id, name) => {
//     return {
//         type: 'UPDATE_DEPARTMENT',
//         data: {
//             id,
//             name
//         }
//     };
// };
//
//
// export const showCreateDepartment = () => {
//     return {
//         type: 'SHOW_CREATE_DEPARTMENT'
//     };
// };
//
// export const hideCreateDepartment = () => {
//     return {
//         type: 'HIDE_CREATE_DEPARTMENT'
//     };
// };
//
//
// export const showEditForm = (id) => {
//     return {
//         type: 'SHOW_EDIT_FORM',
//         data: id
//     };
// };
//
//
// export const hideEditForm = (id) => {
//     return {
//         type: 'HIDE_EDIT_FORM',
//         data: id
//     };
// };
