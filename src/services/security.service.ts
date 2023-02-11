import { sha256 } from 'js-sha256';
import { User } from '../models/user';
import jwt from 'jsonwebtoken';


const newUser = async (userObject: any) => {
    userObject.password = sha256(userObject.password);
    await User.create(userObject);

};



const login = async (userLogin: UserLogin): Promise<AccessToken> => {

    const existingUser: any = await User.findOne({ email: userLogin.email }).exec();
    const jwtSecretKey: any = process.env.ACCESS_TOKEN_SECRET;
    const jwtTokenExpiration = process.env.JWT_EXPIRE


    if (sha256(userLogin.password) === existingUser?.password) {

        const AccessToken = jwt.sign(existingUser.email, jwtSecretKey, {expiresIn: jwtTokenExpiration} );

        return {
            token: AccessToken
        }

    } else {
        throw new Error('Invalid creadentials')
    }
};



export { newUser, login };
