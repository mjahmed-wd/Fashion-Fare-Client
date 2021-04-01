import React from 'react';
import { Link } from 'react-router-dom';

const SideNavigation = () => {
    return (
        <div>
            <Link to="/admin">Admin</Link>
            <br/>
            <Link to="/manage">Manage</Link>
        </div>
    );
};

export default SideNavigation;