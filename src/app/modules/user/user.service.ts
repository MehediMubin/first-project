import { UserModel } from "./user.model";


const createStudentIntoDB = async (student: Student) => {
    const result = await UserModel.create(student);
    return result;
};

export const UserService = {
    createStudentIntoDB
}