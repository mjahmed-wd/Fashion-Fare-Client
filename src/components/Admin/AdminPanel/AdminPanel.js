import React from 'react';
import AddProduct from '../AddProduct/AddProduct';
import SideNavigation from '../SideNavigation/SideNavigation';

const AdminPanel = () => {
    return (
        <div className="row">
            <div className="col-md-4">
                <SideNavigation/>
            </div>
            <div className="col-md-8">
                <AddProduct/>
            </div>
        </div>
    );
};

export default AdminPanel;