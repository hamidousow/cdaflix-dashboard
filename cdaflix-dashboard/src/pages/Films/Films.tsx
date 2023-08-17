import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import FilmService from '../../services/FilmService';
import FilmDto from '../../models/FilmDto';
import ListFilms from '../ListFilms/ListFilms';

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
      <ListFilms films={films}/>      
    </div>
    </>
  )
}
