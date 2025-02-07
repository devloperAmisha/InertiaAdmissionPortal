import React from 'react'
import { Head } from '@inertiajs/react'
import AdminLayout from '../../Layouts/Admin/AdminLayout'


function Dashboard() {
    return (
        <>
            <Head title="Dashboard"></Head>
            <div>Dashboard</div>
        </>
    )
}

Dashboard.layout = page => <AdminLayout children={page} />

export default Dashboard
