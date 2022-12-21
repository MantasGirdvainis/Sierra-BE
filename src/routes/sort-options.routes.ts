import express from 'express'

import { getSortOptions } from '../controllers/sort-options.controller';

const router = express.Router();

router.get('/', getSortOptions);

export default router;
