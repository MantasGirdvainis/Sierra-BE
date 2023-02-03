import express from 'express';
import singUpRules from '../commons/user.validator';
import { validate } from '../commons/index';


import singUp from '../controllers/sing-up.controller';

const router = express.Router();

router.route('/sing-up').post(validate(singUpRules), singUp);

export default router;
