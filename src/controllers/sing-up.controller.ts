import express from 'express';
// import { validationResult } from 'express-validator';
import { sha256 } from 'js-sha256';
import { User } from '../models/user';

const singUp = async (_req: express.Request, res: express.Response) => {
  // const errors = validationResult(_req);
  // if (!errors.isEmpty()) {
  //   return res.status(400).json({ errors: errors.array() });
  // };

  const userObject = _req.body;
  userObject.password = sha256(userObject.password);
  await User.create(userObject);
  res.sendStatus(201);
};

export default singUp;
