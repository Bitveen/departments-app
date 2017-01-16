import React from 'react';
import Department from 'Department';


class DepartmentsList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        let { departments } = this.props;

        return (
            <div className='departments-list'>
                {departments.map(department => {
                    return (<Department key={department.id} {...department} />);
                })
                }
            </div>




        );
    }


};

export default DepartmentsList;
