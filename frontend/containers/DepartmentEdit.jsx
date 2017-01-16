import React from 'react';
import { connect } from 'react-redux';
import DepartmentForm from 'DepartmentForm';
import { updateDepartment } from 'actions';


const mapStateToProps = (state, { params: { id }}) => {
    return {
        department: state.departments.items.filter(item => item.id === parseInt(id))[0]
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateDepartment: (department) => dispatch(updateDepartment(department))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(DepartmentForm);
