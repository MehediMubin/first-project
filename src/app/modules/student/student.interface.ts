import { Types } from 'mongoose';

export type UserName = {
    firstName: string;
    middleName?: string;
    lastName: string;
};

export type Student = {
    id: string;
    user: Types.ObjectId;
    name: UserName;
    gender: 'male' | 'female';
    dateOfBirth?: string;
    email: string;
    contactNumber: string;
    bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'O+' | 'O-' | 'AB+' | 'AB-';
    address: string;
    profileImage?: string;
    isDeleted: boolean;
};
