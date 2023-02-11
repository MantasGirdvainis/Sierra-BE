import express from 'express';
import { newUser, login } from '../services/security.service';



const signUp = async (req: express.Request, res: express.Response) => {

  const userObject = req.body;

  if (userObject) {
    newUser(userObject);
    res.sendStatus(201);
  };
};

const userLogin = (req: express.Request, res: express.Response) => {

  const userLogin: UserLogin = req.body;

  if (userLogin) {

    res.json(login(userLogin));
    
  };
};

export { signUp, userLogin }
