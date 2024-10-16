import adminRoute from './admin.js';
import guestRoute from './guest.js';
import memberRoute from './member.js';

import express from 'express';
const router = express.Router();

router.use('/admin', adminRoute);
router.use('/guest', guestRoute);
router.use('/member', memberRoute);

export default router;
