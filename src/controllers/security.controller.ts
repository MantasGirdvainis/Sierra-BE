import express from 'express';
import { newUser } from '../services/security.service';
import { User } from '../models/user';


const signUp = async (req: express.Request, res: express.Response) => {

  const userObject = req.body;

  if (userObject) {
    newUser(userObject);
    res.sendStatus(201);
  };
};

const userLogin = (req: express.Request, res: express.Response) => {

  const userLoginObject: UserLogin = req.body;

  console.log(userLoginObject);
  res.sendStatus(201);
};

const signIn = async (req: express.Request, res: express.Response) => {

  User.findOne({
    email: req.body.email,
    
  })
    
  .exec((err, user) => {
    if (err) {
      res.status(500)
        .send({
          message: err
        });
        return;
    }

    if (!user) {
      return res.status(404)
        .send({
          message:"User Not found."
        });
    } 

   const userPassword = user.password // neveikia sita vieta. Noriu pasiimti userio slaptazodi kuris yra duomenu bazeje, kad toliau galeciau lygitni ji su gaunamu slaptazodziu is vartotojo.

  })
}

export { signUp, userLogin, signIn }
