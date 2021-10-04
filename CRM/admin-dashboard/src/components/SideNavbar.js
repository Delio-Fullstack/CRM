import React from 'react';
import {Link} from 'react-router-dom';

const SideNavbar = () => {
    
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <Link href="index3.html" className="brand-link">
                <span className="brand-image elevation-3">H</span>
                <span className="brand-text font-weight-light">ADMIN LTE</span>
            </Link>
            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div class="image">
                        Image
                    </div>
                    <div className="info">
                        <Link href="/#" className="d-block">ADMIN NAME</Link>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default SideNavbar