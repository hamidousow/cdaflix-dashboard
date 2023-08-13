import React from 'react'
import AsideMenu from '../components/AsideMenu/AsideMenu'
import NavBar from '../components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'

export default function Root() {
    return (
        <>
        <div className="container-fluid gx-0 d-flex flex-row mx-0">
            <AsideMenu/>
            <div className="container">
                <NavBar/>
                <Outlet/>
            </div>
        </div>
        </>
    )
}
