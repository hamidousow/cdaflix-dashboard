import React from 'react'
import FilmDto from '../../models/FilmDto'
import { Link } from 'react-router-dom'

export default function ListFilms(props : {films: any}) {
    return (
    <>
        {props.films?.map((film: any) => (
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
    </>
    )
}
