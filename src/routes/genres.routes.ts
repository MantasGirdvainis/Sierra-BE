import express from 'express'

import { getGenres } from '../controllers/genres.controller'

const router = express.Router();

router.get('/', getGenres);

export default router;