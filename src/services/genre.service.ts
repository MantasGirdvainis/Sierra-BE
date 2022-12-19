import axios from "axios";

let genreCache: Genre;

const getGenre = async (): Promise<Genre> => {
   
    if (!genreCache) {

        const { data } =  await axios.get<Genre>(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}`);
        genreCache = data

    };

    return genreCache

};

export { getGenre };