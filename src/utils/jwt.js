import jwt from 'jsonwebtoken';

export const generateJwtToken=(paylaod) => {
    return jwt.sign(paylaod,process.env.JWT_SECRET, {expiresIn:'1d'});
}