import React from 'react'
import { Link } from 'react-router-dom';

function AsideMenu() {
    return (
        <aside className='aside-menu d-flex flex-column py-5'>
            <img src="" alt="logo cdaflix" className='logo'/>
            <ul className='aside-menu'>
                <li className='aside-menu-link active'>
                    <Link to={`films`}><i className="bi bi-film"></i> Films</Link>
                </li>
            </ul>
        </aside>        
    )
}

export default AsideMenu;