import React from 'react'
import {Link} from 'react-router-dom'

type Props = {}

const Info = (props: Props) => {
    return (
        <div>
            <span>
                <Link className="text-white no-underline"to="signin">
                    Signin</Link>
                |
            </span>
            <span>
                <Link className="text-white no-underline" to="signup">
                    Signup</Link>
                |
            </span>
            {/* <span>
                <a className="text-white" id="logout">
                    Logout</a>
            </span> */}
            <span>
                <Link className="text-white" target="_blank" to="#" title="Shop son môi trên Facebook">
                    <i className="fa-brands fa-facebook-square" />
                </Link>
            </span>
            <span>
                <Link className="text-white" target="_blank" to="#" title="Shop son môi trên Instagram">
                    <i className="fa-brands fa-instagram" />
                </Link>
            </span>
        </div>
    )
}

export default Info