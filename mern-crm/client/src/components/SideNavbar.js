import React from 'react';
import {Link} from 'react-router-dom';

const SideNavbar = () => {
    
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div class="image">
                        <img src="https://icon-library.com/images/default-user-icon/default-user-icon-4.jpg" alt="profile" class="rounded-circle" />
                    </div>
                    <div className="info">
                        <Link href="/#" className="d-block">ADMIN</Link>
                    </div>
                </div>
               <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li className="nav-item">
                            <a href="/#" className="nav-link"><i className="nav-icon fas fa-users" /><p> Employee List </p></a>  
                        </li>
                        <li className="nav-item">
                        <a href="/#" className="nav-link"><i class="nav-icon fas fa-building"></i><p> Company List </p></a>  
                        </li>

                        <li className="nav-item">
                            <a href="/#" className="nav-link"> <i class="nav-icon fas fa-envelope-square"></i> <p>Email</p></a>  
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
}

export default SideNavbar