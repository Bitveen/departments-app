import React from 'react';
import { Link } from 'react-router';

export default class DepartmentForm extends React.Component {

    constructor(props) {
        super(props);
        this.createDepartment = this.createDepartment.bind(this);
    }

    createDepartment() {
        let name = this.refs.name.value.trim();
        if (name) {
            this.props.onCreateDepartment({name});
        }
    }


    render() {

        let department = this.props.department || {};

        let cancelPath = this.props.onCreateDepartment ? `/departments` : `/department/${department.id}`;

        return (
            <div className='col-lg-9 col-md-9 col-sm-9'>
                <div className="panel panel-default departments-list">
                    <div className="panel-heading">
                        { this.props.onCreateDepartment ? <h4>Create Department</h4> : <h4>Edit Department</h4>}
                    </div>
                    <div className="panel-body">
                        <input type="text" ref='name' className='form-control input-sm' defaultValue={department.name || ''} placeholder='Department name...'/>
                    </div>
                    <div className="panel-footer">
                        {this.props.onCreateDepartment ?
                            <button className='btn btn-primary btn-sm' onClick={this.createDepartment}>Create</button>
                            :
                            <button className='btn btn-primary btn-sm'>Save</button>
                        }
                        <Link className='btn btn-primary btn-sm' to={cancelPath}>Cancel</Link>
                    </div>
                </div>
            </div>
        );
    }
};
