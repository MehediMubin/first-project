// Here, we will put schema and model together

import { Schema, model } from 'mongoose';
import { Student, UserName } from './student.interface';

const userNameSchema = new Schema({
    firstName: { type: String, required: [true, 'First name is required'] },
    middleName: { type: String },
    lastName: { type: String, required: [true, 'Last name is required'] },
});

const studentSchema = new Schema(
    {
        id: {
            type: String,
            required: [true, 'Student ID is required'],
            unique: true,
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: [true, 'User is required'],
            unique: true,
        },
        name: {
            type: userNameSchema,
            required: [true, 'Name is required'],
        },
        gender: {
            type: String,
            enum: {
                values: ['male', 'female', 'other'],
                message:
                    'Invalid value for gender: {VALUE}. Must be one of: male, female, other',
            },
            required: [true, 'Gender is required'],
        },
        dateOfBirth: {
            type: String,
            message: 'Invalid date format for dateOfBirth',
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true,
        },
        contactNumber: {
            type: String,
            required: [true, 'Contact number is required'],
        },
        bloodGroup: {
            type: String,
            enum: {
                values: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
                message:
                    'Invalid value for bloodGroup: {VALUE}. Must be one of: A+, A-, B+, B-, O+, O-, AB+, AB-',
            },
        },
        address: { type: String, required: [true, 'Address is required'] },
        profileImage: { type: String },
        isDeleted: { type: Boolean, default: false },
    },
    {
        timestamps: true,
    },
);

// This is Model
export const StudentModel = model<Student>('Student', studentSchema);
