export const createDepartment = (name) => {
    return {
        type: 'CREATE_DEPARTMENT',
        data: name
    };
};

export const updateDepartment = (department) => {
    return {
        type: 'UPDATE_DEPARTMENT',
        data: department
    };
};
