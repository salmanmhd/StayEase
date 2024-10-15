import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: './../.env' });
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI);

const adminSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  fullName: {
    type: String,
    required: true,
    trim: true,
    minLength: 3,
    maxLength: 30,
  },
  mobileNumber: {
    type: String,
    required: true,
    trim: true,
    minLength: 10,
    maxLength: 13,
  },
  UID: {
    type: String,
    required: true,
    trim: true,
    minLength: 12,
    maxLength: 12,
  },
});

const guestSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30,
  },
  fullName: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30,
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true,
    minLength: 10,
    maxLength: 13,
  },
});

const memberSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30,
  },
  address: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 10,
    maxLength: 90,
  },
  fatherName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  profilePhoto: {},
  aadharNumber: {
    type: String,
    trim: true,
    required: true,
    minLength: 12,
    maxLength: 16,
  },
});

const Admin = mongoose.model('Admin', adminSchema);
const Guest = mongoose.model('Guest', guestSchema);
const Member = mongoose.model('Member', memberSchema);
export { Admin, Guest, Member };
