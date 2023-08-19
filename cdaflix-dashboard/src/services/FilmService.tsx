import axios from 'axios'
import { useParams } from 'react-router-dom';

const BASE_API_URL = 'http://localhost:8081/api/film/';

class FilmService {

    getFilms() {
        return axios.get(BASE_API_URL+"allMovies");
    }

    uploadFilm(film: any) {
        axios.post(BASE_API_URL+"createMovie", film, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    }

    findByTitre(args: string | undefined) {        
        let result = axios.get(BASE_API_URL+'findByTitre', {
            params: { titre: args}
        })

        return result
    }
}

export default new FilmService();