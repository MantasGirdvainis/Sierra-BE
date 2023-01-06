import { body, CustomValidator } from 'express-validator';

// const isValidUser: CustomValidator = value => {
//   return User.findUserByEmail(value).then(user => {
//     if (user) {
//       return Promise.reject('E-mail already in use');
//     }
//   });
// };

// add .costum(isValidUser) to email

const usersSchema = [
  body('name').isString().not().isEmpty().isLength({ min: 5, max: 50 }),
  body('email').isEmail().not().isEmpty(),
  body('password').isLength({ min: 8 }).not().isEmpty().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
];

export default usersSchema;
