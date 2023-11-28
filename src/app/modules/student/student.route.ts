// we will handle routes here

import { Router } from 'express';
import { StudentControllers } from './student.controller';

const router = Router();

// calling controller functions
router.get('/', StudentControllers.getAllStudents);

router.get('/:id', StudentControllers.getSingleStudent);

export const StudentRoutes = router;
