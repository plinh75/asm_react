import React from 'react'
import '../Signin.css'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { signup } from '../api/user'

type SignupInput = {
    email: string,
    password: string,
    name: string
}

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<SignupInput>()
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<SignupInput> = data => {
        signup(data)
        navigate('/signin')
    }
    return (
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
                                <h3 className="form-title">Signup</h3>
                                <form className="form-horizontal" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" className="form-control" {...register('email')}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Username</label>
                                        <input type="name" className="form-control" {...register('name')}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control" {...register('password')} />
                                    </div>
                                    <button className="btn signin">Signup</button>
                                </form>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Signup