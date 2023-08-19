import React from 'react'
import FilmDto from '../../models/FilmDto'
import { Link } from 'react-router-dom'


export default function ListFilms(props : {films: FilmDto[]}) {
    return (
    <>
        {props.films?.map((film: any) => (
            <div className="card" key={film.id}>
                <header>
                <h2 className="card-title"> {film.titre}  </h2>
                <img src={film._img} alt=""/>
                <div className="card-menu">
                    <ul>
                        <li>
                            <Link to={`http://localhost:8081/api/film/deleteMovie?_id=${film.id}`}> Supprimer</Link>
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
