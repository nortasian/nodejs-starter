import { Router } from 'express';
import userController from '@src/modules/user/controllers/user.controller';

const router = Router();

router.use(userController);

export default router;
