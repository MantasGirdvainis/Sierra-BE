import express from 'express';

import { getMovies } from '../controllers/movies.controller';
import { getMovie } from '../controllers/movies.controller';

const router = express.Router();

router.get('/', getMovies);
router.get('/:movieId', getMovie);

export default router;
