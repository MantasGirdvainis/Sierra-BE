import { sha256 } from 'js-sha256';
import { User } from '../models/user';
import jwt, { VerifyCallback } from 'jsonwebtoken';
import express from 'express';

declare global {
    namespace Express {
        interface Request {
            currentUserEmail: string;
        }
    }
}


const newUser = async (userObject: any) => {
    userObject.password = sha256(userObject.password);
    await User.create(userObject);

};


const login = async (userLogin: UserLogin): Promise<AccessToken> => {

    const existingUser: any = await User.findOne({ email: userLogin.email }).exec();
    const jwtSecretKey: any = process.env.ACCESS_TOKEN_SECRET;
    const jwtTokenExpiration = parseInt(process.env.JWT_EXPIRE || '86400000')


    if (sha256(userLogin.password) === existingUser?.password) {

        const AccessToken = jwt.sign({ data: existingUser.email }, jwtSecretKey, { expiresIn: jwtTokenExpiration });

        return {
            token: AccessToken
        }

    } else {
        throw new Error('Invalid creadentials')
    }
};

const authenticate = (req: express.Request, res: express.Response, next: express.NextFunction): void => {

    const authHeader = req.headers.authorization;
    const jwtSecretKey: any = process.env.ACCESS_TOKEN_SECRET;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        const VerifyCallback: VerifyCallback = (err, verifiedJwt) => {
            if (err) {
                console.error('Invalid token: ', err);
                return res.status(403).json({ error: 'Unauthorized' });
            } else {
                req.currentUserEmail = verifiedJwt?.data;
                next();
            }
        };
        jwt.verify(token, jwtSecretKey, VerifyCallback);

    } else {
        res.status(401).json({ error: 'Forbidden' });
    }
};


export { newUser, login, authenticate };
