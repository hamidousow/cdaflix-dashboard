import React, { useState, useEffect } from 'react'
import FilmService from '../../services/FilmService';
import { Navigate, useNavigate } from 'react-router-dom';

export default function SearchForm(props : { handleSubmit: any }) {

    const [searchArgs, setSearchArgs] = useState();
    const [result, setResult] = useState();

    function handleChange(event: any) {    
        event.preventDefault();    
        setSearchArgs(event.target.value)
    }  

    const getSearchResults = async () => {
        let r = await FilmService.findByTitre(searchArgs)
        const result = r.data
        return result
    }

    return (
        <form className="d-flex" role="search"  onSubmit={() => props.handleSubmit(getSearchResults)}>
            <input
                className="form-control me-2" 
                type="search" 
                placeholder="Search" 
                aria-label="Search" 
                name="_titre"
                onChange={(event) => handleChange(event)}
                value={searchArgs}
            />
            <button 
                className="btn btn-outline-success" 
                type="submit" 
                
            >Search</button>
        </form>
    )
}
