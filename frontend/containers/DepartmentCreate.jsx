import React from 'react';
import { connect } from 'react-redux';
import DepartmentForm from 'DepartmentForm';
import { createDepartment, showCreateDepartment, hideCreateDepartment } from 'actions';



const mapDispatchToProps = (dispatch) => {
    return {
        createDepartment: department => dispatch(createDepartment(department)),
        showCreateDepartment: () => dispatch(showCretateDepartment()),
        hideCreateDepartment: () => dispatch(hideCreateDepartment())
    };
};


export default connect(null, mapDispatchToProps)(DepartmentForm);
