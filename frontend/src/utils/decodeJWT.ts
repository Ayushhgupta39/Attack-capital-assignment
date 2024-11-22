import jwt from 'jsonwebtoken';

export const decodeUserIdFromToken = (token: string | null) => {
  if (!token) {
    console.error('No token provided');
    return null;
  }

  try {
    const secret = process.env.NEXT_PUBLIC_JWT_SECRET;
    if (!secret) {
      throw new Error('JWT secret is not defined');
    }
    
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (error) {
    console.error('Token verification failed:', error);
    return null;
  }
};