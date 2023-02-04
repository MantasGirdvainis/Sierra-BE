import express from 'express';
import  { signUpRules } from '../validators/user.validator';
import { validate } from '../commons/index';


import singUp from '../controllers/sign-up.controller';

const router = express.Router();

router.route('/').post(validate(signUpRules), singUp);

export default router;
