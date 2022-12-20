import axios from "axios";

let genresCache: Genre;

const getGenres = async (): Promise<Genre> => {
   
    if (!genresCache) {

        const { data } =  await axios.get<Genre>(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}`);
        genresCache = data

    };

    return genresCache

};

export { getGenres };