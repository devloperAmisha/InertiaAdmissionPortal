import React from 'react'
import { useForm, Link } from '@inertiajs/react'

export default function Register() {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    function handleSubmit(e) {
        e.preventDefault()
        post('/auth/register')
    }
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-header bg-primary text-white text-center">
                            <h4>Register</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="fullName" className="form-label">Full Name</label>
                                    <input type="text" className="form-control" id="name" value={data.name} onChange={e => setData('name', e.target.value)} placeholder="Enter your full name" required />
                                    {errors.name && <div className='text-danger text-sm'>{errors.name}</div>}
                                </div>
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
                                <div className="mb-3">
                                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                                    <input type="password" className="form-control" id="password_confirmation" value={data.password_confirmation} onChange={e => setData('password_confirmation', e.target.value)} placeholder="Confirm your password" required />
                                    {errors.password_confirmation && <div className='text-danger text-sm'>{errors.password_confirmation}</div>}
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary" disabled={processing}>Register</button>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer text-center">
                            <small>Already have an account? <Link href="/auth/login" className="text-primary">Login</Link></small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
