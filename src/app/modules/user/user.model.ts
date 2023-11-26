import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';

const userSchema = new Schema<TUser>(
    {
        id: {
            type: String,
            required: [true, 'User ID is required'],
            unique: true,
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
        },
        needsPasswordChange: {
            type: Boolean,
            default: true,
        },
        role: {
            type: String,
            enum: ['admin', 'student', 'faculty'],
        },
        status: {
            type: String,
            enum: ['active', 'blocked'],
            default: 'active',
        },
        isDeleted: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    },
);

export const UserModel = model<TUser>('User', userSchema);
