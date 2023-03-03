import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const movieSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    movieId: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    releaseDate: {
        type: String,
        required: true,
    },
    backdropPath: {
        type: String,
        required: false,
    },
    posterPath: {
        type: String,
        required: false,
    },
    voteAverage: {
        type: Number,
        required: false,
    },
}).plugin(mongoosePaginate);

export const MovieModel = mongoose.model('movie', movieSchema);
