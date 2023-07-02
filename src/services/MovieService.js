import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY
const BASE_URL = process.env.REACT_APP_BASE_URL
const withBaseUrl = path => `${BASE_URL}${path}?api_key=${API_KEY}&language=pt-BR&page=`

export class MovieService {
    static getMovies(page) {
        return axios(withBaseUrl('movie/popular') + `${page}`);
    }

    static getMovieById(id) {
        return axios(withBaseUrl(`movie/${id}`))
    }

    static getDetailsMovieById(id) {
        return axios(withBaseUrl(`movie/${id}/videos`))
    }
}