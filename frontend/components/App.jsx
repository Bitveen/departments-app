import React from 'react';
import Sidebar from 'Sidebar';

const App = ({ children }) => {
    return (
        <div className='container-fluid'>
            <div className="row">
                <Sidebar />
                {children}
            </div>
        </div>
    );
};

export default App;
