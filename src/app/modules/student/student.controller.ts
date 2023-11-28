import { NextFunction, Request, Response } from 'express';
import { StudentServices } from './student.service';

const getAllStudents = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const result = await StudentServices.getAllStudentsFromDB();

        res.status(200).json({
            success: true,
            message: 'Students are retrieved Successfully',
            data: result,
        });
    } catch (err) {
        // console.log(err);
        next(err);
    }
};

const getSingleStudent = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const { id } = req.params;
        const result = await StudentServices.getSingleStudentFromDB(id);
        res.status(200).json({
            success: true,
            message: 'Single Student Retrieved Successfully',
            data: result,
        });
    } catch (err) {
        // console.log(err);
        next(err);
    }
};

export const StudentControllers = {
    getAllStudents,
    getSingleStudent,
};
