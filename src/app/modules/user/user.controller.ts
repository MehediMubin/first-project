import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../utils/sendResponse';
import { UserServices } from './user.service';

const createStudent = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const { password, student: studentData } = req.body;

        // called service function and send the data
        const result = await UserServices.createStudentIntoDB(
            password,
            studentData,
        );

        // sending response
        sendResponse(res, {
            statusCode: 201,
            success: true,
            message: 'Student Created Successfully',
            data: result,
        });
    } catch (err) {
        next(err);
    }
};

export const UserController = {
    createStudent,
};
