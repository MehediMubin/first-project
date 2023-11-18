// Here, we will put schema and model together

import { Schema, model } from 'mongoose';
import { Student, UserName } from './student.interface';

const userNameSchema = new Schema<UserName>({
    firstName: { type: String, required: true },
    middleName: { type: String, required: true },
    lastName: { type: String, required: true },
});

// This is Schema
const studentSchema = new Schema<Student>({
    id: { type: String, required: true },
    name: userNameSchema,
    gender: {
        type: String,
        enum: ['male', 'female'],
        required: true,
    },
    dateOfBirth: { type: String },
    email: { type: String, required: true },
    contactNumber: { type: String, required: true },
    bloodGroup: {
        type: String,
        enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
    },
    address: { type: String, required: true },
    profileImage: { type: String },
    isActive: {
        type: String,
        enum: ['true', 'false'],
        required: true,
    },
});

// This is Model
export const StudentModel = model<Student>('Student', studentSchema);
