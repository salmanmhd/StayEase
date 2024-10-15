import adminRoute from './admin.js';

import express from 'express';
const router = express.Router();

router.use('/admin', adminRoute);

export default router;
