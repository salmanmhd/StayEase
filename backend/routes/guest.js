import zod from 'zod';
import express from 'express';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { Guest } from '../db.js';
const router = express.Router();
dotenv.config({ path: './../env' });
const JWT_SECRET = process.env.JWT_SECRET;

const signinSchema = zod.object({
  username: zod.string().email(),
  password: zod.string().min(6),
});

const signUpSchema = zod.object({
  username: zod.string().email(),
  fullName: zod.string(),
  password: zod.string().min(6),
  contactNumber: zod.string().min(10),
});

router.post('/signup', async (req, res) => {
  const body = req.body;
  const zodSchema = signUpSchema.safeParse(body);
  const { success } = zodSchema;
  if (!success) {
    return res.status(400).json({
      msg: 'Bad inputs',
    });
  }

  const existingGuest = await Guest.findOne({
    username: body.username,
    password: body.password,
  });

  if (existingGuest) {
    return res.status(400).json({
      msg: 'User already exist, Please sign in',
    });
  }

  const guest = await Guest.create({
    username: body.username,
    fullName: body.fullName,
    password: body.password,
    contactNumber: body.contactNumber,
  });

  const token = jwt.sign(
    {
      userId: guest._id,
    },
    JWT_SECRET
  );

  return res.status(200).json({
    msg: 'User created successfully',
    token,
  });
});

router.post('/signin', async (req, res) => {
  const body = req.body;
  const zodSchema = signinSchema.safeParse(body);
  const { success } = zodSchema;
  if (!success) {
    return res.status(400).json({
      msg: 'Bad inputs',
    });
  }

  const existingGuest = await Guest.findOne({
    username: body.username,
    password: body.password,
  });

  if (!existingGuest) {
    return res.status(403).json({
      msg: 'User not found, please enter correct details',
    });
  }

  const token = jwt.sign(
    {
      userId: existingGuest._id,
    },
    JWT_SECRET
  );
  return res.status(200).json({
    msg: 'signin successfull',
    token,
  });
});

export default router;
