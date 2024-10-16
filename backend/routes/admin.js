import express from 'express';
import zod from 'zod';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import authMiddleware from './middleware.js';
import { Admin, Member, Room } from './../db.js';
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
    token,
  });
});

router.post('/signin', async (req, re) => {
  const body = req.body;
  const zodSchema = signinSchema.safeParse(body);
  const { success } = zodSchema;
  if (!success) {
    return res.status(400).json({
      msg: 'Bad inputs, please enter correct details',
    });
  }

  const user = Admin.findOne({
    username: body.username,
    password: body.password,
  });

  if (!user) {
    res.status(400).json({
      msg: 'You are not registered, sign up now',
    });
  }

  const token = jwt.sign(
    {
      userId: user._id,
    },
    JWT_SECRET
  );

  res.status(200).json({
    msg: 'Login successfull',
    token,
  });
});

const addRenterSchema = zod.object({
  username: zod.string().email(),
  fullName: zod.string(),
  fatherName: zod.string(),
  password: zod.string(),
  contactNumber: zod
    .string()
    .min(10, 'contact number shoould be atleast 10 digit long'),
  address: zod.string(),
  emergencyContactNumber: zod
    .string()
    .min(10, 'contact number shoould be atleast 10 digit long'),
  medicalIssues: zod.string(),
  profession: zod.string(),
  UID: zod.string().min(12, 'UID should be atleast 12 digit long'),
  roomType: zod.enum(['single', 'double', 'triple']),
  allotedRoom: zod.string(),
});

router.post('/add-renter', authMiddleware, async (req, res) => {
  const body = req.body;
  const zodSchema = addRenterSchema.safeParse(body);
  console.log(zodSchema.error);
  const { success } = zodSchema;
  if (!success) {
    return res.status(400).json({
      msg: 'Please enter correct inputs',
    });
  }

  const existingMember = await Member.findOne({
    username: body.username,
    fullName: body.fullName,
  });

  if (existingMember) {
    res.status(400).json({
      msg: 'Member already exist',
    });
  }

  const isRoomVacant = await Room.findOne({
    roomNo: body.allotedRoom,
    roomType: body.roomType,
  });

  if (isRoomVacant) {
    return res.status(400).json({
      msg: 'Room occupied, try vacant room',
    });
  }

  const user = await Member.create({
    username: body.username,
    fullName: body.fullName,
    fatherName: body.fatherName,
    password: body.password,
    contactNumber: body.contactNumber,
    address: body.address,
    emergencyContactNumber: body.emergencyContactNumber,
    medicalIssues: body.medicalIssues,
    profession: body.profession,
    UID: body.UID,
    roomType: body.roomType,
    allotedRoom: body.allotedRoom,
    profilePhoto: 'http://xsgames.co/randomusers/assets/avatars/female/12.jpg',
    joined: new Date().toLocaleDateString(),
  });

  return res.status(200).json({
    msg: 'Member added successfully',
    name: user.fullName,
  });
});

const roomSchema = zod.object({
  roomType: zod.enum(['single', 'double', 'triple']),
  floor: zod.string(),
  roomNo: zod.string(),
  available: zod.boolean(),
  price: zod.string(),
  vacateDate: zod.string(),
});

router.post('/add-room', authMiddleware, async (req, res) => {
  const body = req.body;
  const zodSchema = roomSchema.safeParse(body);
  console.log(zodSchema.error);
  const { success } = zodSchema;
  if (!success) {
    return res.status(400).json({
      msg: 'Bad Inputs',
    });
  }

  const existingRoom = await Room.findOne({
    roomNo: body.roomNo,
    floor: body.floor,
  });

  if (existingRoom) {
    return res.status(400).json({
      msg: 'Room already exist',
    });
  }

  const room = await Room.create({
    roomType: body.roomType,
    floor: body.floor,
    roomNo: body.roomNo,
    available: body.available,
    price: body.price,
    vacateDate: body.vacateDate,
  });
  if (room) {
    return res.status(200).json({
      msg: 'Room added successfully',
    });
  } else {
    console.log('there is some error');
  }
});

export default router;
