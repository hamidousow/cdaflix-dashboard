import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import FilmService from '../../services/FilmService';
import ListFilms from '../../pages/ListFilms/ListFilms';


export default function NavBar() {

    const [searchArgs, setSearchArgs] = useState();
    const [args, setArgs] = useState();
    const [results, setResults] = useState();

    function handleChange(event: any) {        
        setSearchArgs(event.target.value)
    }

    function handleSubmit(event: any) {
        event.preventDefault(); 
        FilmService.findBy(searchArgs)?.then((res) => console.log(res))
    }

    return (
        <>
        <nav className="navigation px-4 py-2 navbar bg-body-tertiary">
            <div className="container-fluid">
                <div className="wrapper d-flex flex-row gap-3">
                    <Link to={'/'} className="navbar-brand">Navbar</Link>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleChange}/>
                        <button className="btn btn-outline-success" type="submit" onClick={handleSubmit}>Search</button>
                    </form>
                </div>
            </div>
        </nav>    
        </>
    )
}

