import { body } from 'express-validator';

const movieRules = [
    body('movieId').isNumeric(),
    body('title').trim().not().isEmpty(),
    body('releaseDate').isDate()
];

export { movieRules };
