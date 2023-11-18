// we will handle routes here

import express from 'express';
import { StudentControllers } from './student.controller';

const router = express.Router();

// calling controller functions

router.get('/', StudentControllers.getAllStudents);

router.post('/create-student', StudentControllers.createStudent);

router.get('/:id', StudentControllers.getSingleStudent);

export const StudentRoutes = router;
