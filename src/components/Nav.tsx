import React from 'react'

type Props = {}

const Nav = (props: Props) => {
    return (
        <div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 px-5">
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Collections</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Blog</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About Us</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                </li>
            </ul>
        </div>
    )
}

export default Nav