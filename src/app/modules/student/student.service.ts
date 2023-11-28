import { StudentModel } from './student.model';

const getAllStudentsFromDB = async () => {
    const result = await StudentModel.find();
    return result;
};

const getSingleStudentFromDB = async (id: string) => {
    const result = await StudentModel.findOne({ id });
    return result;
};

const deleteSingleStudentFromDB = async (id: string) => {
    const result = await StudentModel.findOneAndDelete({ id });
    return result;
};

export const StudentServices = {
    getAllStudentsFromDB,
    getSingleStudentFromDB,
    deleteSingleStudentFromDB,
};
