import ajax from './base'
import http from 'http'

export default {
    getMovies(params) {
        return ajax.get('http://localhost:3000/api/movie/in_theaters', params)
    }
}