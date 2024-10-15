import express from 'express';
import zod from 'zod';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import authMiddleware from './middleware.js';
import { Admin } from './../db.js';
dotenv.config({ path: './../.env' });
const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

const signUpSchema = zod.object({
  username: zod.string().email(),
  password: zod.string().min(6, 'password should be atleast 6 digits'),
  fullName: zod.string().min(3, 'name should be atleast 3 digits long'),
  UID: zod.string().min(12, 'UID must be 12 digit'),
  mobileNumber: zod
    .string()
    .min(10, 'mobile number should be atleast 10 digits'),
  isPrimary: zod.boolean(),
});

const signinSchema = zod.object({
  username: zod.string().email(),
  password: zod.string().min(6, 'password should atleast 6 digit long'),
});

router.post('/signup', async (req, res) => {
  const body = req.body;
  console.log(body);
  const zodSchema = signUpSchema.safeParse(body);
  const { success } = zodSchema;
  console.log(zodSchema);
  if (!success) {
    return res.status(400).json({
      msg: 'Bad inputs',
    });
  }

  const existingUser = await Admin.findOne({
    username: body.username,
  });

  if (existingUser) {
    return res.status(409).json({
      msg: 'Admin already exist',
    });
  }

  const admin = await Admin.create({
    username: body.username,
    password: body.password,
    fullName: body.fullName,
    mobileNumber: body.mobileNumber,
    UID: body.UID,
    isPrimary: body.isPrimary,
  });

  const userId = admin._id;
  const token = jwt.sign(
    {
      userId,
    },
    JWT_SECRET
  );

  res.status(200).json({
    msg: 'Admin created successfully',
  });
});

export default router;
