import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Info = (props: Props) => {
    const logout = () => {
        localStorage.removeItem('user')
    }
    return (
        <div className="">
            <span>
                <Link className="text-white no-underline" to="signin">
                    Signin</Link>
                |
            </span>
            <span>
                <Link className="text-white no-underline" to="signup">
                    Signup</Link>
                |
            </span>
            <button className="text-white" onClick={() => logout()}>Logout</button>
            

        </div>
    )
}

export default Info