//After /user the remaining part of url is handeled here;

import express from 'express';
import { getProfile } from '../../controller/userController';
const router=express.Router();
router.get('/profile',getProfile);
export default router;