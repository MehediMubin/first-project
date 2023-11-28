import { z } from 'zod';

const monthEnum = z.enum([
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'Septemper',
    'October',
    'November',
    'December',
]);

const monthValidationSchema = z.object({
    name: monthEnum,
});

const nameEnum = z.enum(['Autumn', 'Summer', 'Fall']);
const codeEnum = z.enum(['01', '02', '03']);

const academicSemesterValidationSchema = z.object({
    body: z.object({
        name: nameEnum,
        year: z.date(),
        code: codeEnum,
        startMonth: monthValidationSchema,
        endMonth: monthValidationSchema,
    }),
});

export default academicSemesterValidationSchema;
