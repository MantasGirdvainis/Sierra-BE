import express from 'express';
import  { signUpRules } from '../validators/user.validator';
import { userloginRules } from '../validators/login.validator';
import { validate } from '../commons/index';


import { signUp, userLogin, signIn } from '../controllers/security.controller';


const router = express.Router();

router.route('/sign-up').post(validate(signUpRules), signUp);
router.route('/login').post(validate(userloginRules), signIn);

export default router;
