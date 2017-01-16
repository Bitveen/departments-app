import React from 'react';
import { Link } from 'react-router';


const Department = ({ name, id}) => {
    return (
        <div className='row department'>
            <div className='col-lg-5 col-md-5 col-sm-5'>
                <strong>{name}</strong>
            </div>
            <div className='col-lg-3 col-md-3 col-sm-3'>
                <Link className='btn btn-primary btn-sm' to={`/department/${id}`}>View</Link>
            </div>
        </div>
    );
};


export default Department;
