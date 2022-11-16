import axios from "axios";
import { convertToMovie } from "../converters/movie.converter";

let moviesCahce: Movie[] | undefined;
let totalPagesCache: number | undefined;

const getMovies = async (): Promise<Movies> => {

    if (!moviesCahce) {

        const { data } = await axios.get<TmdbMovies>(
            `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=1&vote_count.gte=1000&api_key=${process.env.API_KEY}`,
        );
        
        moviesCahce = data.results.map(convertToMovie);
        totalPagesCache = data.total_pages;
    }
    

    return {
        page: 1,
        movies: moviesCahce || [],
        totalPages: totalPagesCache || 1
      };
};

export {getMovies};