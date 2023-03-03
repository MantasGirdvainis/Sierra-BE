import { MovieModel } from "../../src/models/movie"

const savePersonalMovie = async (movie: Movie) => {
    const result = await MovieModel.create(movie);

    return result;
};

export { savePersonalMovie };
