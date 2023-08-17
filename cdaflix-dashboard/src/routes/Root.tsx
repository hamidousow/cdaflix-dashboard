import React from 'react'
import AsideMenu from '../components/AsideMenu/AsideMenu'
import NavBar from '../components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'

export default function Root() {
    return (
        <>
        <div className="container-fluid gx-0 d-flex flex-row mx-0">
            <NavBar/>
            <AsideMenu/>            
            <div className="content-page content-page flex-grow-1">
                <div className="container p-5">
                    <Outlet/>
                </div>                
            </div> 
        </div>
        </>
    )
}
