import { MovieModel } from "../../src/models/movie"
import { PAGE_SIZE } from "../commons/index";

const savePersonalMovie = async (movie: Movie) => {
    const result = await MovieModel.create(movie);

    return result;
};

const getPersonalMovies = async (userEmail: string, page: number) => {

    const { docs, totalPages } = await MovieModel.paginate(
        { email: userEmail },
        { offset: (page - 1) * PAGE_SIZE, limit: PAGE_SIZE },
    );

    return {
        page: page || 1,
        movies: docs,
        totalPages: totalPages
    }
};

const deletePersonalMovie = async (id: string, email: string) => {

    await MovieModel.deleteOne({ _id: id, email });

    return true;
};

export { savePersonalMovie, deletePersonalMovie, getPersonalMovies };

