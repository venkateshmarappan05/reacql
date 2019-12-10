import React, { Component } from 'react';
import {Link} from 'react-router-dom'
export default class SideNavbar extends Component {
    
    render() {
        return (
            <nav id="sidebar" className="sidebar">
                <div className="sidebar-content ">
                    <Link to="/" className="sidebar-brand">
                        <i className="align-middle" data-feather="box" />
                        <span className="align-middle">Sample</span>
                    </Link>
                    <ul className="sidebar-nav">
                        <li className="sidebar-header">
                            Main
                        </li>
                        <li className="sidebar-item active">
                            <Link to="/" className="sidebar-link">
                                <i className="align-middle" data-feather="activity" /> <span className="align-middle">User</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
