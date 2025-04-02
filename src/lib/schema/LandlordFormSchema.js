import { z } from 'zod'

export const LandlordFormSchema = z
  .object({
    full_name: z
      .string({
        required_error: 'Full Name field is required.',
      })
      .min(3, { message: 'Full Name must be at least 2 characters.' }),
    property_name: z
      .string({
        required_error: 'Property Name field is required.',
      })
      .min(3, { message: 'Property Name must be at least 2 characters.' }),
    number_of_house: z.number({
      required_error: 'Number of houses field is required.',
    }),
    years_of_ownership: z.number({
      required_error: 'Years of ownership field is required.',
    }),
    caretaker_full_name: z.string(),
    have_a_caretaker: z.string({
      required_error: 'This field is required.',
    }),
    property_address: z
      .string({
        required_error: 'Property Address field is required.',
      })
      .min(3, { message: 'Home address must be at least 2 characters.' }),
    available_on_demand: z.boolean({
      required_error: 'This field is required.',
    }),
    next_of_kin_full_name: z
      .string({
        required_error: 'This field is required.',
      })
      .min(3, { message: 'This field must be at least 2 characters.' }),
    relationship: z
      .string({
        required_error: 'Relationship field is required.',
      })
      .min(3, { message: 'Home address must be at least 2 characters.' }),
    next_of_kin_email: z
      .string()
      .email({ message: 'Please enter a valid email address.' }) // Added email validation
      .min(8, { message: 'Email must be at least 8 characters.' }),
    next_of_kin_address: z
      .string({
        required_error: 'This field is required.',
      })
      .min(3, { message: 'This field must be at least 2 characters.' }),
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
