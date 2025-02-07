import { Link, usePage } from '@inertiajs/react'
import React from 'react'

export default function Navbar() {
    const { auth } = usePage().props;

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">Admission Portal</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/apply">Apply Now</Link>
                        </li>
                    </ul>
                </div>

                <ul className="navbar-nav">
                    {
                        auth ?
                            <>
                                <li>
                                    <Link className="nav-link" href="/profile">{auth.name}</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link btn btn-sm btn-danger" href="/auth/logout">Logout</Link>
                                </li>
                            </>
                            :
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/auth/register">Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/auth/login">Login</Link>
                                </li>
                            </>
                    }
                </ul>
            </div>
        </nav>
    )
}
