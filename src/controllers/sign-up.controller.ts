import express from 'express';
import { newUser } from '../services/security.service';

const signUp = async (req: express.Request, res: express.Response) => {

  const userObject = req.body;

  if (userObject) {
    newUser(userObject);
    res.sendStatus(201);
  };
};

export default signUp;
