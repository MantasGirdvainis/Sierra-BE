import axios from "axios";
import { convertToMovie, convertToMovieDetails } from "../converters/movie.converter";


interface MovieDetailsCache {
    [key: number]: MovieDetails
};

const movieDetailsCahce: MovieDetailsCache = {}

let moviesCahce: Record<number, Movie[]> = {}
let totalPagesCache: number | undefined;
let pageCache: number

const getMovies = async (page: number): Promise<Movies> => {
    if (!moviesCahce[page]) {
        const { data } = await axios.get<TmdbMovies>(
            `https://api.themoviedb.org/3/discover/movie?page=${page}&sort_by=popularity.desc&vote_count.gte=1000&api_key=${process.env.API_KEY}`,
        );
        moviesCahce[page] = data.results.map(convertToMovie);
        totalPagesCache = data.total_pages;
        pageCache = page;

    }

    return {
        page: pageCache || 1,
        movies: moviesCahce[page] || [],
        totalPages: totalPagesCache || 1
    };
};

const getMovie = async (movieId: number): Promise<MovieDetails> => {
    if (movieDetailsCahce[movieId]) {
        return movieDetailsCahce[movieId];
    }

    const { data } = await axios.get<TmdbMovieDetails>(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`);

    const movie = convertToMovieDetails(data)
    movieDetailsCahce[movie.movieId] = movie

    return movie

};

const searchMoviesByTitle = async (title: any, page: number): Promise<Movies> => {
    const { data } = await axios.get<TmdbMovies>(`https://api.themoviedb.org/3/search/movie?query=${title}&page=${page}&api_key=${process.env.API_KEY}`)

    const movies: Movie[] = data.results.map(convertToMovie)
    const moviesTotalPages = data.total_pages

    return {
        page: page,
        movies,
        totalPages: moviesTotalPages
    };
};

const searchMovies = async (page: number, genres = '', sort = 'original_title.asc'): Promise<Movies> => {
    const { data } = await axios.get<TmdbMovies>(`https://api.themoviedb.org/3/discover/movie?sort_by=${sort}&with_genres=${genres}&page=${page}&vote_count.gte=1000&api_key=${process.env.API_KEY}`)

    const movies: Movie[] = data.results.map(convertToMovie)
    const moviesTotalPages = data.total_pages

    return {
        page: page,
        movies,
        totalPages: moviesTotalPages
    };

};

export { getMovies, getMovie, searchMoviesByTitle, searchMovies };
