import express from 'express';
import usersSchema from '../commons/user.schema.validator';


import singUp from '../controllers/sing-up.controller';

const router = express.Router();

router.post('/', usersSchema, singUp)

export default router;
