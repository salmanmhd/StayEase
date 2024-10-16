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
  password: {
    type: String,
    required: true,
    minLength: 6,
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
  contactNumber: {
    type: String,
    required: true,
    trim: true,
    minLength: 10,
    maxLength: 13,
  },
  emergencyContactNumber: {
    type: String,
    required: true,
    trim: true,
    minLength: 10,
    maxLength: 13,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  profilePhoto: String,
  UID: {
    type: String,
    trim: true,
    required: true,
    minLength: 12,
    maxLength: 16,
  },
  joined: String,
  roomAlloted: {
    type: mongoose.Schema.ObjectId,
  },
});

const roomSchema = mongoose.Schema({
  roomType: String,
  floor: String,
  roomNo: String,
  available: Boolean,
  price: String,
  vacateDate: String,
});

const Admin = mongoose.model('Admin', adminSchema);
const Guest = mongoose.model('Guest', guestSchema);
const Member = mongoose.model('Member', memberSchema);
const Room = mongoose.model('Room', roomSchema);
export { Admin, Guest, Member, Room };
