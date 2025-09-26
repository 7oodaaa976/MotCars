import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Components/Navbar/Navbar'

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <div className=' min-vh-100 my-5 py-5'>
                <div className='container'>
                    <Outlet />

                </div>

            </div>


        </>

    )
}

export default MainLayout