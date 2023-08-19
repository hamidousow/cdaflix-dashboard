import React, { useState } from 'react'
import FilmDto from '../../models/FilmDto';
import FilmService from '../../services/FilmService';

export default function Film() {

    const [file, setFile]:any = useState();
    const [titre, setTitre] = useState("");
    const [description, setDescription] = useState("");
    const [acteurs, setActeurs] = useState("");
    const [imgPreview, setImgPreview]:any = useState();

    let responseBody: FilmDto = new FilmDto();

    function handleChange(event: any) {
        setFile(event.target.files[0]);
        setImgPreview(URL.createObjectURL(event.target.files[0]));
    }

    const inputChangeHandler = (setFunction: React.Dispatch<React.SetStateAction<string>>, event: React.ChangeEvent<HTMLInputElement>) => {
        setFunction(event.target.value)
    }

    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();        
        responseBody.setTitre(titre);
        responseBody.setDescription(description);
        responseBody.setImg(file);  
        responseBody.setActors(acteurs);
        console.log(responseBody)
        FilmService.uploadFilm(responseBody);
    }

    return (
        <>
        <h1>Ajouter un film</h1>
        <form action="" className='d-flex flex-column' onSubmit={onSubmitHandler}>
            
            <div className='d-flex flex-md-row justify-content-between'>
                <div className="left p-2 col-4">
                    <div className="container-img-uploaded">
                        <img src={imgPreview} alt=""/>
                    </div>
                    <input 
                    type="file" 
                    name="img" 
                    id="" 
                    onChange={handleChange}/>
                </div>
                <div className="right d-flex flex-column gap-3 col-7">
                    <div className="form-floating">
                        <input 
                        type="text" 
                        className="form-control" 
                        id="floatingInput" 
                        placeholder="" 
                        onChange={(e) => {inputChangeHandler(setTitre, e)}}/>
                        <label htmlFor="floatingInput">Titre du film</label>
                    </div>
                    <div className="form-floating">
                        <input 
                        className="form-control" 
                        placeholder="Décrire le film en quelques mots" 
                        id="floatingTextarea2"
                        onChange={(e) => {inputChangeHandler(setDescription, e)}}/>
                        <label htmlFor="floatingTextarea2">Synopsis</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" 
                        className="form-control" 
                        id="floatingInput"  
                        placeholder=""
                        onChange={(e) => {inputChangeHandler(setActeurs, e)}}
                        />
                        <label htmlFor="floatingInput">Liste d'acteurs (saisir ; après chaque nom complet)</label>
                    </div>
                </div>
            </div>    
            <div className='m-auto'>
                <input type="submit" value="Publier" className='submit-btn'/>
            </div>
        </form>
        </>
        
    )
}
