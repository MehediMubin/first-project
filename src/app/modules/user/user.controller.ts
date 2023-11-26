import { Request, Response } from "express";
import { UserService } from "./user.service";


const createStudent = async (req: Request, res: Response) => {
    try {
        const { student: studentData } = req.body;

        // called service function and send the data
        const result = await UserService.createStudentIntoDB(studentData);

        // sending response
        res.status(200).json({
            success: true,
            message: 'Student is created successfully',
            data: result,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'something went wrong',
            error: err,
        });
    }
};