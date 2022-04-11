import React from 'react'
import '../Signin.css'
import {useForm, SubmitHandler} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import {signin, signup} from '../api/user'
import {authenticated} from '../ultis/localStorage'


type SigninInput = {
    email: string
    password: string
}

const Signin = () => {
    const {register, handleSubmit, formState : {errors}} = useForm<SigninInput>()
    const navigate = useNavigate()

    const onSubmit: SubmitHandler<SigninInput> = async data => {
        const {data:user} = await signin(data)
        authenticated(user, () => {
            navigate('/admin')
        })
    }
    return (
    <div>
        <div className="form-bg">
            <div className="container">
                <div className="row">
                    <div className="pt-5">
                        <div className="form-container">
                            <div className="left-content">
                                <h3 className="title">Site Name</h3>
                                <h4 className="sub-title">"Nothing called that I had too much lipstick at all".</h4>
                            </div>
                            <div className="right-content">
                                <h3 className="form-title">Signin</h3>
                                <form className="form-horizontal" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" className="form-control" {...register('email')}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control" {...register('password')} />
                                    </div>
                                    <button className="btn signin">Signin</button>
                                    <div className="remember-me">
                                        <input type="checkbox" className="checkbox" />
                                        <span className="check-label">Remember Me</span>
                                    </div>
                                    <a href="" className="forgot">Forgot Password</a>
                                </form>
                                <span className="separator">OR</span>
                                <ul className="social-links">
                                    <li><a href=""><i className="fab fa-google" /> Signin with Google</a></li>
                                    <li><a href=""><i className="fab fa-facebook-f" /> Signin with Facebook</a></li>
                                </ul>
                                <span className="signup-link">Don't have an account? Sign up <a href="/signup">here</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signin