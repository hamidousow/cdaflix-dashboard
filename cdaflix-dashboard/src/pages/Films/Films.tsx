import React, { useState, useEffect } from 'react'
import ListFilms from '../ListFilms/ListFilms';
import FilmService from '../../services/FilmService';


export default function Films() {

  const [films, setFilms] = useState();

  const getSearchResults = async (event: any) => {      
      let r = await FilmService.findByTitre(event.target.value)
      setFilms(r.data)
  }

  useEffect(() => {
    FilmService.getFilms().then((res) => {
      setFilms(res.data)
    })
  }, [])

  return (
    <>
    <div className="d-flex" role="search" >
        <input
            className="form-control me-2" 
            type="search" 
            placeholder="Recherher par titre" 
            aria-label="Search" 
            onChange={event => getSearchResults(event)}
        />
        <button 
            className="btn btn-outline-success" 
            type="submit" 
        >Search</button>
    </div>
    <div className="container container-films">
      {films != null && 
        <ListFilms films={films}/> 
      }
    </div>
    </>
  )
}
