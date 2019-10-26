import express from 'express';
import UserControl from '../controllers/userController';

const userRoutes = new UserControl();
const router = express.Router();


router.post('/signUp', userRoutes.signUp);
router.post('/signIn', userRoutes.signIn);

export default router;
