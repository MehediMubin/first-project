import { z } from 'zod';

const userValidationSchema = z.object({
    id: z.string(),
    password: z
        .string()
        .max(20, { message: 'Password should be less than 20 characters' }),
    needsPasswordChange: z.boolean().default(true),
    role: z.enum(['admin', 'student', 'faculty']),
    status: z.enum(['active', 'blocked']).default('active'),
    isDeleted: z.boolean().default(false),
});

export const userValidation = {
    userValidationSchema,
};
