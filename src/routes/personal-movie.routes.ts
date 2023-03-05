import express from 'express'
import { validate } from '../commons/index';
import { authenticate } from '../services/security.service';
import { movieRules } from '../validators/movie.validator';

import { savePersonalMovie, deletePersonalMovie } from "../controllers/personal-movie";

const router = express.Router();

router.route('/').post(authenticate, validate(movieRules), savePersonalMovie);
router.route('/:id').delete(authenticate, deletePersonalMovie);

export default router;