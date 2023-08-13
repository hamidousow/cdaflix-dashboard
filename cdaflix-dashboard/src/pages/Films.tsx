import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

export default function Films() {

  const [films, setFilms] = useState([]);
  const url = `http://localhost:8081/api/film/allMovies`

  const getFilms = () => {
    fetch(url)
    .then((res) => {
      return res.json()
    })
    .then((json) => {
      setFilms(json);
    })
  }

  useEffect(() => {
    getFilms()
    console.log(films)
    
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
