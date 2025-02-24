import { Head, Link, useForm } from '@inertiajs/react'
import { useState } from 'react';
import avatar from '@/assets/img/avatar-male.png';

export default function Edit({ applicant }) {
    const { data, setData, post, processing, errors } = useForm({
            institute_10th: '',
            percentage_10th: '',
            year_of_passing_10th: '',
            board_10th: '',
            institute_12th: '',
            percentage_12th: '',
            year_of_passing_12th: '',
            board_12th: '',
            institute_graduation: '',
            percentage_graduation: '',
            year_of_passing_graduation: '',
            board_graduation: '',
            institute_post_graduation: '',
            percentage_post_graduation: '',
            year_of_passing_post_graduation: '',
            board_post_graduation: '',
        });

    // console.log(applicant);
    const [profileComplete, setProfileComplete] = useState(false);
    const [appliedForPost, setAppliedForPost] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        post(`/profile/edit/${applicant.id}`); // Change this to your actual route
    };

    return (
        <>
            <Head title="Update Profile"></Head>
            <div className="container my-4">
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
                                            <Link href="/applicant/profile/edit">
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
                                    <>
                                    </>
                            }

                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="col-md-9">
                        <div className="container mt-4">
                            <h2 className="mb-4">Education Details</h2>
                            <form onSubmit={handleSubmit}>
                                {/* 10th Details */}
                                <fieldset className="mb-4">
                                    <legend>10th Details</legend>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label className="form-label">Institute</label>
                                            <input type="text" className="form-control" value={data.institute_10th} onChange={(e) => setData('institute_10th', e.target.value)} />
                                        </div>
                                        <div className="col-md-3">
                                            <label className="form-label">Percentage</label>
                                            <input type="number" className="form-control" value={data.percentage_10th} onChange={(e) => setData('percentage_10th', e.target.value)} />
                                        </div>
                                        <div className="col-md-3">
                                            <label className="form-label">Year of Passing</label>
                                            <input type="number" className="form-control" value={data.year_of_passing_10th} onChange={(e) => setData('year_of_passing_10th', e.target.value)} />
                                        </div>
                                        <div className="col-md-12">
                                            <label className="form-label">Board</label>
                                            <input type="text" className="form-control" value={data.board_10th} onChange={(e) => setData('board_10th', e.target.value)} />
                                        </div>
                                    </div>
                                </fieldset>

                                {/* 12th Details */}
                                <fieldset className="mb-4">
                                    <legend>12th Details</legend>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label className="form-label">Institute</label>
                                            <input type="text" className="form-control" value={data.institute_12th} onChange={(e) => setData('institute_12th', e.target.value)} />
                                        </div>
                                        <div className="col-md-3">
                                            <label className="form-label">Percentage</label>
                                            <input type="number" className="form-control" value={data.percentage_12th} onChange={(e) => setData('percentage_12th', e.target.value)} />
                                        </div>
                                        <div className="col-md-3">
                                            <label className="form-label">Year of Passing</label>
                                            <input type="number" className="form-control" value={data.year_of_passing_12th} onChange={(e) => setData('year_of_passing_12th', e.target.value)} />
                                        </div>
                                        <div className="col-md-12">
                                            <label className="form-label">Board</label>
                                            <input type="text" className="form-control" value={data.board_12th} onChange={(e) => setData('board_12th', e.target.value)} />
                                        </div>
                                    </div>
                                </fieldset>

                                {/* Graduation Details */}
                                <fieldset className="mb-4">
                                    <legend>Graduation Details</legend>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label className="form-label">Institute</label>
                                            <input type="text" className="form-control" value={data.institute_graduation} onChange={(e) => setData('institute_graduation', e.target.value)} />
                                        </div>
                                        <div className="col-md-3">
                                            <label className="form-label">Percentage</label>
                                            <input type="number" className="form-control" value={data.percentage_graduation} onChange={(e) => setData('percentage_graduation', e.target.value)} />
                                        </div>
                                        <div className="col-md-3">
                                            <label className="form-label">Year of Passing</label>
                                            <input type="number" className="form-control" value={data.year_of_passing_graduation} onChange={(e) => setData('year_of_passing_graduation', e.target.value)} />
                                        </div>
                                        <div className="col-md-12">
                                            <label className="form-label">Board</label>
                                            <input type="text" className="form-control" value={data.board_graduation} onChange={(e) => setData('board_graduation', e.target.value)} />
                                        </div>
                                    </div>
                                </fieldset>

                                {/* Post Graduation Details */}
                                <fieldset className="mb-4">
                                    <legend>Post Graduation Details</legend>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label className="form-label">Institute</label>
                                            <input type="text" className="form-control" value={data.institute_post_graduation} onChange={(e) => setData('institute_post_graduation', e.target.value)} />
                                        </div>
                                        <div className="col-md-3">
                                            <label className="form-label">Percentage</label>
                                            <input type="number" className="form-control" value={data.percentage_post_graduation} onChange={(e) => setData('percentage_post_graduation', e.target.value)} />
                                        </div>
                                        <div className="col-md-3">
                                            <label className="form-label">Year of Passing</label>
                                            <input type="number" className="form-control" value={data.year_of_passing_post_graduation} onChange={(e) => setData('year_of_passing_post_graduation', e.target.value)} />
                                        </div>
                                        <div className="col-md-12">
                                            <label className="form-label">Board</label>
                                            <input type="text" className="form-control" value={data.board_post_graduation} onChange={(e) => setData('board_post_graduation', e.target.value)} />
                                        </div>
                                    </div>
                                </fieldset>

                                {/* Submit Button */}
                                <button type="submit" className="btn btn-primary" disabled={processing}>
                                    {processing ? "Submitting..." : "Submit"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
