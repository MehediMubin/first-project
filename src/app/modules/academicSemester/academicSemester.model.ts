import { Schema, model } from 'mongoose';
import { AcademicSemester, Month } from './academicSemester.interface';

const monthSchema = new Schema<Month>({
    name: {
        type: String,
        required: true,
        enum: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ],
    },
});

const academiSemesterSchema = new Schema<AcademicSemester>(
    {
        name: {
            type: String,
            required: true,
            enum: ['Autumn', 'Summer', 'Fall'],
        },
        year: {
            type: Date,
            required: true,
        },
        code: {
            type: String,
            required: true,
            enum: ['01', '02', '03'],
        },
        startMonth: {
            type: monthSchema,
            required: true,
        },
        endMonth: {
            type: monthSchema,
            reqwuired: true,
        },
    },
    {
        timestamps: true,
    },
);

export const AcademicSemesterModel = model<AcademicSemester>(
    'AcademicSemester',
    academiSemesterSchema,
);
