import axios from 'axios'

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
}

export default new FilmService();