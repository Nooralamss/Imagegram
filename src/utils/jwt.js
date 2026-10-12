import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/serverConfig';

export const generateJwtToken=(paylaod) => {
    return jwt.sign(paylaod,process.env.JWT_SECRET, {expiresIn:'1d'});
}
export const verifyJWT=(token)=>{
    return jwt.verify(token, JWT_SECRET);
}