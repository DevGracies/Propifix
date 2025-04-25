import { z } from 'zod'

export const CustomerCareSchema = z.object({
  first_name: z
    .string({
      required_error: 'First Name field is required.',
    })
    .min(3, { message: 'First Name must be at least 2 characters.' }),
  message: z
    .string({
      required_error: 'Message field is required.',
    })
    .min(3, { message: 'Message must be at least 2 characters.' }),
  tel: z
    .string({
      required_error: 'Phone Number field is required.',
    })
    .min(11, { message: 'Phone Number must be at least 11 characters.' }),
  last_name: z
    .string({
      required_error: 'Last Name field is required.',
    })
    .min(3, { message: 'Last Name must be at least 2 characters.' }),
  subject: z.string({
    required_error: 'This field is required.',
  }),
  email: z
    .string()
    .email({ message: 'Please enter a valid email address.' }) // Added email validation
    .min(8, { message: 'Email must be at least 8 characters.' }),
})
