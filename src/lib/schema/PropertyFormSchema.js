import { z } from 'zod'

export const PropertyFormSchema = z.object({
  title: z
    .string({
      required_error: 'Title of Property field is required.',
    })
    .min(3, { message: 'Title of Property field is required.' }),
  typeOfProperty: z
    .string({
      required_error: 'Type of Property field is required.',
    })
    .min(3, { message: 'Type of Property field is required.' }),
  subtypeOfProperty: z
    .string({
      required_error: 'Sub Type of Property field is required.',
    })
    .min(3, { message: 'Sub Type of Property field is required.' }),
  ownership: z
    .string({
      required_error: 'Ownership Proof is required.',
      message: 'Ownership Proof is required.',
    })
    .min(3, { message: 'Ownership Proof is required.' }),
  state: z
    .string({
      required_error: 'State field is required.',
      message: 'State field is required.',
    })
    .min(3, { message: 'State must be at least 3 characters.' }),
  lg: z
    .string({
      required_error: 'Local Government field is required.',
    })
    .min(3, {
      message: 'Local Government  must be at least 3 characters.',
    }),
  desc: z
    .string({
      required_error: 'Description field is required.',
    })
    .min(3, { message: 'Description field is required.' }),
})
