import React from 'react'
import { Link } from 'react-router-dom';

function AsideMenu() {
    return (
        <aside className='aside-menu d-flex flex-column py-5 position-fixed start-0'>
            <img src="" alt="logo cdaflix" className='logo'/>
            <ul className='aside-menu'>
                <li className='aside-menu-link active'>
                    <Link to={`films`}><i className="bi bi-film"></i> Tous les films</Link>
                </li>
                <li className='aside-menu-link active'>
                    <Link to={`addMovie`}><i className="bi bi-film"></i> Ajouter un film</Link>
                </li>
            </ul>
        </aside>        
    )
}

export default AsideMenu;