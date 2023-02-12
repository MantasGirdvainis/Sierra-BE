import { body } from 'express-validator';


const userloginRules = [
  body('email').isEmail().not().isEmpty(),
  body('password').not().isEmpty().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
];

export { userloginRules };
