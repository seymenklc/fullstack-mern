import jwt from 'jsonwebtoken';

export const maxAge = 3 * 24 * 60 * 60;

export const createToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: maxAge });
};