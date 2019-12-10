import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class HeaderNavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand navbar-light bg-white">
                <Link  to="" className="sidebar-toggle d-flex mr-2">
                    <i className="hamburger align-self-center" />
                </Link>
                {/* <form className="form-inline d-none d-sm-inline-block">
                    <input className="form-control form-control-no-border mr-sm-2" type="text" placeholder="Search projects..." aria-label="Search" />
                </form> */}
                <div className="navbar-collapse collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle d-none d-sm-inline-block" to="#" data-toggle="dropdown">
                                <i className="align-middle" data-feather="users" /> {' '}
                                 <span className="align-middle">User Name</span>
                            </Link>
                            <div className="dropdown-menu dropdown-menu-right">
                                <Link className="dropdown-item" to="#"><i className="align-middle mr-1" data-feather="user" /> Profile</Link>
                                <Link className="dropdown-item" to="#"><i className="align-middle mr-1" data-feather="pie-chart" /> Analytics</Link>
                                <div className="dropdown-divider" />
                                <Link className="dropdown-item" to="#">Settings &amp; Privacy</Link>
                                <Link className="dropdown-item" to="#">Help</Link>
                                <Link className="dropdown-item" to="#">Sign out</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>

        );
    }
}
