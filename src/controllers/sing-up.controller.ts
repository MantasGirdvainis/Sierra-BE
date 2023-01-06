import express from 'express';
import { validationResult } from 'express-validator';
import { User } from '../models/user';

const singUp = async (_req: express.Request, res: express.Response) => {
  const errors = validationResult(_req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  };

  const userObject = _req.body;
  const user = await User.create(userObject);
  res.sendStatus(201);
};

export default singUp;
