import { z } from 'zod'

export const AccountSchema = z
  .object({
    user_name: z
      .string({
        required_error: 'User Name field is required.',
      })
      .min(3, { message: 'User Name must be at least 2 characters.' }),
    country_code: z
      .string({
        required_error: 'Country code field is required.',
      })
      .min(3, { message: 'Agent Type must be at least 2 characters.' }),
    phone_number: z
      .string({
        required_error: 'Association field is required.',
      })
      .min(3, { message: 'Association must be at least 2 characters.' }),
    email: z
      .string()
      .email({ message: 'Please enter a valid email address.' }) // Added email validation
      .min(8, { message: 'Email must be at least 8 characters.' }),
    pwd: z
      .string({
        required_error: 'Password field is required.',
      })
      .min(8, { message: 'Password must be at least 8 characters' })
      .regex(/[a-z]/, {
        message: 'Password must contain at least one lowercase letter',
      })
      .regex(/[A-Z]/, {
        message: 'Password must contain at least one uppercase letter',
      })
      .regex(/[0-9]/, { message: 'Password must contain at least one number' })
      .regex(/[\W_]/, {
        message: 'Password must contain at least one special character',
      }),
    cpwd: z
      .string({
        required_error: 'Please confirm password.',
      })
      .min(8, { message: 'Password must be at least 8 characters' }),
  })
  .refine((data) => data.pwd === data.cpwd, {
    path: ['cpwd'],
    message: 'Passwords does not match',
  })
