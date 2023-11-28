import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { StudentServices } from './student.service';

const getAllStudents = catchAsync(async (req, res, next) => {
    const result = await StudentServices.getAllStudentsFromDB();

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Students are retrieved Successfully',
        data: result,
    });
});

const getSingleStudent = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(id);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Single Student Retrieved Successfully',
        data: result,
    });
});

const deleteSingleStudent = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const result = await StudentServices.deleteSingleStudentFromDB(id);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Single Student Deleted Successfully',
        data: result,
    });
});

export const StudentControllers = {
    getAllStudents,
    getSingleStudent,
    deleteSingleStudent,
};
