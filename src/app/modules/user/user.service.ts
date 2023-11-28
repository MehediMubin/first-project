import config from '../../config';
import { Student } from '../student/student.interface';
import { StudentModel } from '../student/student.model';
import { TUser } from './user.interface';
import { UserModel } from './user.model';

const createStudentIntoDB = async (password: string, student: Student) => {
    const user: Partial<TUser> = {};
    user.password = password || (config.default_pass as string);
    user.role = 'student';

    // set manually generated id
    user.id = '2030100001';

    // create a user
    const newUser = await UserModel.create(user);

    // create a student
    if (Object.keys(newUser).length) {
        student.id = newUser.id; // manually generated id
        student.user = newUser._id; // reference id

        const newStudent = await StudentModel.create(student);
        return newStudent;
    }
};

export const UserServices = {
    createStudentIntoDB,
};
