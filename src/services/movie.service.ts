import axios from "axios";
import { convertToMovie, convertToMovieDetails  } from "../converters/movie.converter";


interface MovieDetailsCache {
    [key: number]: MovieDetails
}

const movieDetailsCahce: MovieDetailsCache = {}

let moviesCahce: Movie[] | undefined;
let totalPagesCache: number | undefined;
let pageCache: number

const getMovies = async (page: number): Promise<Movies> => {

    if (!moviesCahce) {
        console.log(page)
        const { data } = await axios.get<TmdbMovies>( 
            `https://api.themoviedb.org/3/discover/movie?page=${page}sort_by=popularity.desc&page=1&vote_count.gte=1000&api_key=${process.env.API_KEY}`,
        ); 
        
        moviesCahce = data.results.map(convertToMovie);
        totalPagesCache = data.total_pages;
        pageCache = page;
    }

    return {
        page: pageCache | 1,
        movies: moviesCahce || [],
        totalPages: totalPagesCache || 1
      };
};

const getMovie = async (movieId: number): Promise<MovieDetails> => {
    if (movieDetailsCahce[movieId]) {
        return movieDetailsCahce[movieId];
    }

    const { data }= await axios.get<TmdbMovieDetails>(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`);

    const movie = convertToMovieDetails(data)
    movieDetailsCahce[movie.movieId] = movie

    return movie
    
}

export {getMovies, getMovie};