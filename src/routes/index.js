import { Router } from 'express';
import userController from '@user/controllers/user.controller';

const router = Router();

router.use(userController);

export default router;
