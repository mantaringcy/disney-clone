import axios from "axios";

const movieBaseUrl = 'https://api.themoviedb.org/3'
const api_key = 'e08dd47fd77b29b7ecbf23404855158b'

// https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf
const movieByGenreBaseUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`

// https://api.themoviedb.org/3/trending/all/day?api_key=e08dd47fd77b29b7ecbf23404855158b

const getTrendingVideos = axios.get(movieBaseUrl+"/trending/all/day?api_key="+api_key);

// console.log(`${movieBaseUrl}/trending/all/day?api_key=${api_key}`);
// console.log(movieBaseUrl+"/trending/all/day?api_key="+api_key);

const getMovieByGenreId = (id) => axios.get(movieByGenreBaseUrl+'&with_genres='+id)

export default {
    getTrendingVideos,
    getMovieByGenreId
}