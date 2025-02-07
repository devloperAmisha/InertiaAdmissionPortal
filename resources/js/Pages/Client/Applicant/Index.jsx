import React, { useEffect, useState } from 'react'
import { useForm, Link, Head } from '@inertiajs/react'
import axios from 'axios'

function Index() {
    const [countries, setCountries] = useState([])
    const [states, setStates] = useState([])
    const [cities, setCities] = useState([])

    const { data, setData, post, processing, errors } = useForm({
        first_name: "",
        middle_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        phone: "",
        date_of_birth: "",
        gender: "",
        address: "",
        state: "",
        city: "",
        pincode: "",
        country: ""
    });

    function handleSubmit(e) {
        e.preventDefault()
        post('/apply')
    }
    function getCountries() {
        axios.get('/api/countries').then(res => {
            setCountries(res.data)
        })
    }

    function getStates(countryId) {
        axios.get(`/api/states/${countryId}`).then(res => {
            setStates(res.data)
        })
    }

    function getCities(stateId) {
        axios.get(`/api/cities/${stateId}`).then(res => {
            setCities(res.data)
        })
    }

    function handleCountryChange(e) {
        getStates(e.target.value)
        setData('country', e.target.value)
    }

    function handleStateChange(e) {
        getCities(e.target.value)
        setData('state', e.target.value)
    }

    function handleCityChange(e) {
        setData('city', e.target.value)
    }


    function handleChange(e) {
        setData(e.target.name, e.target.type === 'file' ? e.target.files[0] : e.target.value)
    }
    useEffect(() => {
        getCountries()
    }, [])

    return (
        <>
            <Head title="Applicant Registration"></Head>
            <div className="container py-5">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-9 border-right border-primary">
                            <h5 className='mb-3'>Basic Information</h5>
                            <div className="row">
                                <div className="col-md-4">
                                    <label className="form-label">First Name</label>
                                    <input type="text" name="first_name" className="form-control" value={data.first_name} onChange={handleChange} required />
                                    {errors.first_name && <div className='text-danger text-sm'>{errors.first_name}</div>}
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">Middle Name</label>
                                    <input type="text" name="middle_name" className="form-control" value={data.middle_name} onChange={handleChange} />
                                    {errors.middle_name && <div className='text-danger text-sm'>{errors.middle_name}</div>}
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">Last Name</label>
                                    <input type="text" name="last_name" className="form-control" value={data.last_name} onChange={handleChange} required />
                                    {errors.last_name && <div className='text-danger text-sm'>{errors.last_name}</div>}
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-md-4">
                                    <label className="form-label">Date of Birth</label>
                                    <input type="date" name="date_of_birth" className="form-control" value={data.date_of_birth} onChange={handleChange} required />
                                    {errors.date_of_birth && <div className='text-danger text-sm'>{errors.date_of_birth}</div>}
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">Gender</label>
                                    <select name="gender" className="form-control" value={data.gender} onChange={handleChange} required>
                                        <option value="">Select</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    {errors.gender && <div className='text-danger text-sm'>{errors.gender}</div>}
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">Photo</label>
                                    <input type="file" name="photo" className="form-control" onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-4">
                                    <label className="form-label">Country</label>
                                    <select name="country" className='form-control' onChange={handleCountryChange}>
                                        {
                                            countries.map((item, index) => (
                                                <option key={item.id} value={item.id}>{item.name}</option>
                                            ))
                                        }
                                    </select>
                                    {errors.country && <div className='text-danger text-sm'>{errors.country}</div>}
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">State</label>
                                    <select name="state" className='form-control' onChange={handleStateChange}>
                                        {
                                            states.map((item, index) => (
                                                <option key={item.id} value={item.id}>{item.name}</option>
                                            ))
                                        }
                                    </select>
                                    {errors.state && <div className='text-danger text-sm'>{errors.state}</div>}
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">City</label>
                                    <select name="city" className='form-control' onChange={handleCityChange}>
                                        {
                                            cities.map((item, index) => (
                                                <option key={item.id} value={item.id}>{item.name}</option>
                                            ))
                                        }
                                    </select>
                                    {errors.city && <div className='text-danger text-sm'>{errors.city}</div>}
                                </div>

                            </div>
                            <div className="row mt-3">
                                <div className="col-md-9">
                                    <label className="form-label">Address</label>
                                    <input type="text" name="address" className="form-control" value={data.address} onChange={handleChange} required />
                                    {errors.address && <div className='text-danger text-sm'>{errors.address}</div>}
                                </div>
                                <div className="col-md-3">
                                    <label className="form-label">Pincode</label>
                                    <input type="text" name="pincode" className="form-control" value={data.pincode} onChange={handleChange} required />
                                    {errors.pincode && <div className='text-danger text-sm'>{errors.pincode}</div>}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <h5 className='mb-3'>Account Information</h5>
                            <div className="row">
                                <div className="col-md-12">
                                    <label className="form-label">Phone</label>
                                    <input type="text" name="phone" className="form-control" value={data.phone} onChange={handleChange} required />
                                    {errors.phone && <div className='text-danger text-sm'>{errors.phone}</div>}
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12">
                                    <label className="form-label">Email</label>
                                    <input type="email" name="email" className="form-control" value={data.email} onChange={handleChange} required />
                                    {errors.email && <div className='text-danger text-sm'>{errors.email}</div>}
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12">
                                    <label className="form-label">Password</label>
                                    <input type="password" name="password" className="form-control" value={data.password} onChange={handleChange} required />
                                    {errors.password && <div className='text-danger text-sm'>{errors.password}</div>}
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12">
                                    <label className="form-label">Confirm Password</label>
                                    <input type="password" name="password_confirmation" className="form-control" value={data.password_confirmation} onChange={handleChange} required />
                                    {errors.password_confirmation && <div className='text-danger text-sm'>{errors.password_confirmation}</div>}
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-end mb-3'>
                            <button type="submit" className="btn btn-primary mt-4" disabled={processing}><i class="fa-regular fa-circle-check"></i> Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Index
