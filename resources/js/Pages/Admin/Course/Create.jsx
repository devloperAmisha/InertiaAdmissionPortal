import React from 'react'
import AdminLayout from '../../../Layouts/Admin/AdminLayout'
import { Head, Link, useForm } from '@inertiajs/react';

function Create() {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        description: "",
        duration: "",
        eligibility: "",
        fees: "",
    });

    function handleSubmit(e) {
        e.preventDefault()
        post('/admin/courses')
    }

    return (
        <>
            <Head title="Create Course"></Head>

            <div className="container py-5">
                <div className="row">
                    <div className="col">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                            <h1>Courses</h1>
                            <Link href='/admin/courses' className='btn btn-primary'><i class="fa-solid fa-list"></i> View Course</Link>
                        </div>
                        <div className='card card-body'>
                            <form onSubmit={handleSubmit}>
                                <div className="form-floating mb-3">
                                    <input value={data.name} onChange={e => setData('name', e.target.value)} type="text" className='form-control' placeholder='Title' />
                                    <label htmlFor="Title">Title</label>
                                    {errors.name && <div className='text-danger text-sm'>{errors.name}</div>}
                                </div>
                                <div className="form-floating mb-3">
                                    <input value={data.description} onChange={e => setData('description', e.target.value)} type="text" className='form-control' placeholder='Description' />
                                    <label htmlFor="Description">Description</label>
                                    {errors.description && <div className='text-danger text-sm'>{errors.description}</div>}
                                </div>
                                <div className="form-floating mb-3">
                                    <input value={data.eligibility} onChange={e => setData('eligibility', e.target.value)} type="text" className='form-control' placeholder='Eligibility' />
                                    <label htmlFor="Eligibility">Eligibility</label>
                                    {errors.eligibility && <div className='text-danger text-sm'>{errors.eligibility}</div>}
                                </div>
                                <div className="form-floating mb-3">
                                    <input value={data.duration} onChange={e => setData('duration', e.target.value)} type="text" className='form-control' placeholder='Duration' />
                                    <label htmlFor="Duration">Duration</label>
                                    {errors.duration && <div className='text-danger text-sm'>{errors.duration}</div>}
                                </div>
                                <div className="form-floating mb-3">
                                    <input value={data.fees} onChange={e => setData('fees', e.target.value)} type="text" className='form-control' placeholder='Fees' />
                                    <label htmlFor="Fees">Fees</label>
                                    {errors.fees && <div className='text-danger text-sm'>{errors.fees}</div>}
                                </div>
                                <div>
                                    <button disabled={processing} type='submit' className='btn btn-primary'><i class="fa-solid fa-circle-check"></i>Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

Create.layout = page => <AdminLayout children={page} />

export default Create
