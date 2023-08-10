import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../../pages/Dashboard'

function AsideMenu() {
    return (
        <aside className='aside-menu d-flex flex-column py-5'>
            <img src="" alt="logo cdaflix" className='logo'/>
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
            </Routes>
        </aside>        
    )
}

export default AsideMenu;