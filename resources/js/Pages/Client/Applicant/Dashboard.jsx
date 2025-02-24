import { Head, Link, usePage } from '@inertiajs/react'
import React, { useState } from 'react'
import avatar from '@/assets/img/avatar-male.png';

export default function Dashboard({ applicant }) {
    const { auth } = usePage().props;

    const [profileComplete, setProfileComplete] = useState(false);
    const [appliedForPost, setAppliedForPost] = useState(false);

    return (
        <>
            <Head title="Dashboard"></Head>
            <div className="container mt-4">
                <div className="row">
                    {/* Sidebar */}
                    <div className="col-md-3">
                        <div className="card p-3 text-center">
                             <img
                                src={avatar}
                                width="100"
                                height="100"
                                alt="Profile"
                                className="rounded-circle mx-auto mb-2"
                            />
                            <h5>{`${applicant.first_name} ${applicant.middle_name ?? ""} ${applicant.last_name}`}</h5>
                            <p className="text-muted">Software Engineer</p>
                        </div>
                        <div>
                            {
                                !profileComplete || !appliedForPost ? (
                                    <ul className="list-group">
                                        <li className={`list-group-item ${profileComplete ? 'text-success' : 'text-danger'}`}>
                                            <Link href={`/applicant/profile/edit/${applicant.id}`}>
                                                <i className="fas fa-check-circle"></i> Complete your profile
                                            </Link>
                                        </li>
                                        <li className={`list-group-item ${appliedForPost ? 'text-success' : 'text-danger'}`}>
                                            <Link href="/applicant/apply">
                                                <i className="fas fa-check-circle"></i> Apply for a post
                                            </Link>
                                        </li>
                                    </ul>
                                )
                                    :
                                    <></>
                            }

                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="col-md-9">
                        {/* Application Status */}
                        <div className="card p-3 mb-3">
                            <h5>Application Status</h5>
                            <p className="text-success">Your application is under review.</p>
                        </div>

                        {/* Recent Notifications */}
                        <div className="card p-3 mb-3">
                            <h5>Recent Notifications</h5>
                            <ul className="list-group">
                                <li className="list-group-item">Interview scheduled for September 10</li>
                                <li className="list-group-item">New message from HR</li>
                            </ul>
                        </div>

                        {/* Upcoming Interviews */}
                        <div className="card p-3 mb-3">
                            <h5>Upcoming Interviews</h5>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Time</th>
                                        <th>Location</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Sept 10, 2025</td>
                                        <td>10:00 AM</td>
                                        <td>Zoom</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Documents Section */}
                        <div className="card p-3">
                            <h5>Documents</h5>
                            <ul className="list-group">
                                <li className="list-group-item d-flex justify-content-between">
                                    Resume.pdf <button className="btn btn-sm btn-primary">Download</button>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    CoverLetter.pdf <button className="btn btn-sm btn-primary">Download</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

