import React from 'react';
import { connect } from 'react-redux';
import DepartmentForm from 'DepartmentForm';
import { createDepartment } from 'actions';



const mapDispatchToProps = (dispatch) => {
    return {
        onCreateDepartment: department => dispatch(createDepartment(department)),
    };
};


export default connect(null, mapDispatchToProps)(DepartmentForm);
