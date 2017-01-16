import React from 'react';
import { connect } from 'react-redux';
import DepartmentsList from 'DepartmentsList';
import { Link } from 'react-router';
import { fetchDepartments } from 'actions';

const mapStateToProps = (state) => {
    return {
        departments: state.departments.items
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDepartments: () => dispatch(fetchDepartments())
    };
};


class DepartmentsListView extends React.Component {

    constructor(props) {
        super(props);
    }


    componentDidMount() {
        this.props.fetchDepartments();
    }


    render() {
        let {departments} = this.props;
        return (
            <div className='col-lg-9 col-md-9 col-sm-9'>
                <div className="panel panel-default departments-list">
                    <div className="panel-heading">
                        <h4>All departments</h4>
                    </div>
                    <div className="panel-body">
                        <DepartmentsList departments={departments}/>
                    </div>
                    <div className="panel-footer">
                        <Link className='btn btn-primary btn-sm' to={`/department/create`}>Create department</Link>
                    </div>
                </div>
            </div>
        );
    }


};

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentsListView);
