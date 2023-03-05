import { MovieModel } from "../../src/models/movie"

const savePersonalMovie = async (movie: Movie) => {
    const result = await MovieModel.create(movie);

    return result;
};

const deletePersonalMovie = async (id: string, email: string) => {

    await MovieModel.deleteOne({ _id: id, email });

    return true;
};

export { savePersonalMovie, deletePersonalMovie };
