import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


const mapStateToProps = (state, { params: { id }}) => {
    return {
        department: state.departments.items.filter(item => item.id === parseInt(id))[0]
    };
};



const DepartmentView = ({ department }) => {
    return (
        <div className='col-lg-9 col-md-9 col-sm-9'>
            <div className="panel panel-default departments-list">
                <div className="panel-heading">
                    <h4>Department: {department.name}</h4>
                </div>
                <div className="panel-body">
                    {department.name}
                </div>
                <div className="panel-footer">
                    <Link className='btn btn-primary btn-sm' to='/departments'><span className='glyphicon glyphicon-menu-left' /> View all departments</Link>
                    <Link className='btn btn-primary btn-sm' to={`/department/${department.id}/edit`}><span className='glyphicon glyphicon-edit' /> Edit</Link>
                </div>
            </div>
        </div>
    );
};

export default connect(mapStateToProps)(DepartmentView);
