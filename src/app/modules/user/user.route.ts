import { NextFunction, Request, Response, Router } from 'express';
import { UserController } from './user.controller';

const router = Router();

const shenaBahini = (req: Request, res: Response, next: NextFunction) => {
    console.log('i am shena bahini');
    next();
};

router.post('/create-student', shenaBahini, UserController.createStudent);

export const UserRoutes = router;
