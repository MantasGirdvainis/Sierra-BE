import { sha256 } from 'js-sha256';
import { User } from '../models/user';


const newUser = async (userObject: any) => {
    userObject.password = sha256(userObject.password);
    await User.create(userObject);
    
};

export { newUser };
