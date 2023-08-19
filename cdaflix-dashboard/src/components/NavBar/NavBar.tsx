import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import FilmService from '../../services/FilmService';
import ListFilms from '../../pages/ListFilms/ListFilms';
import SearchForm from '../SearchForm/SearchForm';
import FilmDto from '../../models/FilmDto';


export default function NavBar() {
    return (
        <>
        <nav className="navigation px-4 py-2 navbar bg-body-tertiary">
            <div className="container-fluid">
                <div className="wrapper d-flex flex-row gap-3">
                    <Link to={'/'} className="navbar-brand">Navbar</Link>
                </div>
            </div>
        </nav>    
        </>
    )
}

