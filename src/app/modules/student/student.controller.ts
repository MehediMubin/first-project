import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../utils/sendResponse';
import { StudentServices } from './student.service';

const getAllStudents = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const result = await StudentServices.getAllStudentsFromDB();

        sendResponse(res, {
            statusCode: 200,
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

        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Single Student Retrieved Successfully',
            data: result,
        });
    } catch (err) {
        next(err);
    }
};

export const StudentControllers = {
    getAllStudents,
    getSingleStudent,
};
