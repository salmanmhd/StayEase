import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config({ path: './../.env' });

const JWT_SECRET = process.env.JWT_SECRET;

export default function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer')) {
    return res.status(403).json({
      msg: 'Auth failed',
    });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    return res.status(403).json({
      msg: 'jwt verify failed',
    });
  }
}
