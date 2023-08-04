import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { JwtValidator } from '../validators/jwt';
dotenv.config();

const secret = process.env.JWT_SECRET || 'secret';

// function to create token
export const createToken = (data: JwtValidator) => jwt.sign(data, secret, { expiresIn: '1h' });

// function to verify token
export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, secret);
  } catch (err) {
    console.error(err);
    return null;
  }
}