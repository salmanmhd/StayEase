import express from 'express';
import zod from 'zod';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
// import authMiddleware from './middleware';
// import mongoose from 'mongoose';
import { Member } from '../db.js';
dotenv.config({ path: './../.env' });
const JWT_SECRET = process.env.JWT_SECRET;
const router = express.Router();

const signinSchema = zod.object({
  username: zod.string().email(),
  password: zod.string().min(6, 'the password should be atleast 6 digits long'),
});

router.post('/signin', async (req, res) => {
  const body = req.body;
  const zodSchema = signinSchema.safeParse(body);
  const { success } = zodSchema;
  if (!success) {
    return res.status(200).json({
      msg: 'Please enter correct input',
    });
  }

  const member = Member.findOne({
    username: body.username,
    password: body.password,
  });

  if (!member) {
    return res.status(403).json({
      msg: 'User not found, please enter correct details or sign up ',
    });
  }

  const token = jwt.sign(
    {
      userId: member._id,
    },
    JWT_SECRET
  );

  return res.status(200).json({
    msg: 'Login successfully',
    token,
  });
});

// router.get('/');

export default router;
