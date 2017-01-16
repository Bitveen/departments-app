import React from 'react';
import { Link } from 'react-router';


const Sidebar = () => {
    return (
        <div className='col-lg-3 col-md-3 col-sm-3 sidebar'>
            <div className="page-header">
                <h3>Staff</h3>
            </div>
            <ul className="nav nav-pills nav-stacked">
                <li><Link to='/departments'>Departments</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;
