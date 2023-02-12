import express from 'express';
import { newUser, login } from '../services/security.service';



const signUp = async (req: express.Request, res: express.Response) => {

  const userObject = req.body;

  if (userObject) {
    newUser(userObject);
    res.sendStatus(201);
  };
};

const userLogin = async (req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> => {

  const userLogin: UserLogin = req.body;

 
  try {
    res.json( await login(userLogin))

  } catch (err) {

    next(err)
  }

};

export { signUp, userLogin }
