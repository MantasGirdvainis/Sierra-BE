import { body } from 'express-validator';
import { User } from '../models/user';


const signUpRules = [
  body('name').isString().not().isEmpty().isLength({ min: 5, max: 50 }),
  body('email').isEmail().not().isEmpty().custom((email) => new Promise(
    (resolve, reject) => {
      User.findOne({ email })
        .then((attendee) => {
          if (attendee) {
            reject(new Error('Email exists'));
          } else {
            resolve(true);
          }
        })
        .catch((err) => reject(err));
    },
  )),
  body('password').not().isEmpty().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
];

export { signUpRules };
