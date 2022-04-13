import React from 'react'
import { Link } from 'react-router-dom'
import {isAuthenticated} from '../../ultis/localStorage'

type Props = {}

const NavAdmin = (props: Props) => {
    const user= isAuthenticated()
    return (
        <nav className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 bg-gradient-dark" id="sidenav-main">
            <div className="sidenav-header">
                <a className="nav-link text-white" href="/">
                    <div className="text-white text-center me-2 d-flex align-items-center">
                        <i className="material-icons opacity-10">homepage</i>
                    </div>
                    <div className="text-white">Hello {user?.user.name}</div>
                </a>
            </div>
            <hr className="horizontal light mt-0 mb-2" />
            <div className="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link text-white" href="">
                            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="material-icons opacity-10">dashboard</i>
                            </div>
                            <span className="nav-link-text ms-1">Dashboard</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white " to="/admin/product">
                            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="material-icons opacity-10">table_view</i>
                            </div>
                            <span className="nav-link-text ms-1">Product List</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white " href="">
                            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="material-icons opacity-10">receipt_long</i>
                            </div>
                            <span className="nav-link-text ms-1">Billing</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavAdmin