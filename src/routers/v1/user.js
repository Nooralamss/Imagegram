//After /user the remaining part of url is handeled here;

import express from 'express';
import { getProfile, signup } from '../../controller/userController';
import { zodSignupSchema } from '../../validators/zodSignupSchema';
import { validate } from '../../validators/zodValidator';
const router=express.Router();
router.get('/profile',getProfile);
router.post('/signup', validate(zodSignupSchema),signup);
export default router;