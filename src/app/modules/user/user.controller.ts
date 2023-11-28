import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserServices } from './user.service';

const createStudent = catchAsync(async (req, res) => {
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
});

export const UserController = {
    createStudent,
};
