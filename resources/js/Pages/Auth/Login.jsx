import React from 'react'
import { Link, useForm } from '@inertiajs/react'

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
    })

    function handleSubmit(e) {
        e.preventDefault()
        post('/auth/login')
    }
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-header bg-primary text-white text-center">
                            <h4>Login</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email Address</label>
                                    <input type="email" className="form-control" id="email" value={data.email} onChange={e => setData('email', e.target.value)} placeholder="Enter your email" required />
                                    {errors.email && <div className='text-danger text-sm'>{errors.email}</div>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" value={data.password} onChange={e => setData('password', e.target.value)} placeholder="Enter your password" required />
                                    {errors.password && <div className='text-danger text-sm'>{errors.password}</div>}
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary" disabled={processing}>Login</button>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer text-center">
                            <small>Don't have an account? <Link href="/auth/register" className="text-primary">Register</Link></small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
