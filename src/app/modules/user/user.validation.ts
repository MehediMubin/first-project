import { z } from 'zod';

const userValidationSchema = z.object({
    password: z
        .string({
            invalid_type_error: 'Password should be a string',
        })
        .max(20, { message: 'Password should be less than 20 characters' })
        .optional(),
});

export const userValidation = {
    userValidationSchema,
};
