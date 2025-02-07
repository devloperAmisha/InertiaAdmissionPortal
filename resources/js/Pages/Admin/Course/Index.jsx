import React from 'react'
import AdminLayout from '../../../Layouts/Admin/AdminLayout'
import { Head, Link, useForm } from '@inertiajs/react'

function Index({ courses }) {
    const { delete: destroy } = useForm();

    function handleDelete(e, courseId) {
        e.preventDefault()

        destroy(`/admin/courses/${courseId}`);
    }


    return (
        <>
            <Head title='Courses'></Head>

        <div className="container py-5">
            <div className="row">
                <div className="col">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                        <h1>Courses</h1>
                            <Link href='/admin/courses/create' className='btn btn-primary'>
                                <i class="fa-solid fa-circle-plus"></i> Add New
                            </Link>
                    </div>
                    <div className='card card-body'>
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">SNo</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Duration</th>
                                        <th scope="col">Fees</th>
                                        <th scope="col">Eligibility</th>

                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        courses.data.map((course, index) => {
                                            return (
                                                <tr>
                                                    <th>{index + 1}</th>
                                                    <td>{course.name}</td>
                                                    <td>{course.duration}</td>
                                                    <td>${course.fees}</td>
                                                    <td>{course.eligibility}</td>

                                                    <td>
                                                        <Link className='btn btn-info btn-sm inline-block' href={`/admin/courses/${course.id}/edit`}>
                                                            <i class="fa-solid fa-pen-to-square"></i></Link>
                                                        <form className='inline-block' onSubmit={(e) => handleDelete(e, course.id)}>
                                                            <button className='btn btn-danger btn-sm' type="submit">
                                                                <i class="fa-solid fa-trash-can"></i>
                                                            </button>
                                                        </form>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                            <div>
                                {
                                    courses.links.map((link, index) => {
                                        return (
                                            link.url ?
                                                <Link
                                                    key={index}
                                                    href={link.url}
                                                    className={`mx-1 btn ${link.active ? 'btn-primary' : 'btn-light'}`}
                                                    dangerouslySetInnerHTML={{ __html: link.label }} />
                                                :
                                                <span
                                                    key={index}
                                                    className='bg-light p-2 rounded text-muted cursor-not-allowed'
                                                    dangerouslySetInnerHTML={{ __html: link.label }} ></span>
                                        )

                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

Index.layout = page => <AdminLayout children={page} />

export default Index
