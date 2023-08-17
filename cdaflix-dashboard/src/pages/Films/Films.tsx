import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import FilmService from '../../services/FilmService';

export default function Films() {

  const [films, setFilms] = useState([]);

  useEffect(() => {
    
    FilmService.getFilms().then((res) => {
      setFilms(res.data)
    })
  }, [])

  return (
    <>
    <div className="container container-films">
      {films.map((film: any) => (
        <div className="card" key={film._id}>
          <header>
            <h2 className="card-title"> {film._titre}  </h2>
            <span>...</span>
            <div className="card-menu">
              <ul>
                <li>
                  <Link to={`http://localhost:8081/api/film/deleteMovie?_id=${film._id}`}> Supprimer</Link>
                </li>
              </ul>
            </div>
          </header>
          <div className="card-body"></div>
          <footer></footer>
        </div>
      ))}
      
    </div>
    </>
  )
}
