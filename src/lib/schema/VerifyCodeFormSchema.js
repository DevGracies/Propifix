import { z } from 'zod'

export const VerifyCodeFormSchema = z.object({
  code: z
    .string({
      required_error: 'Code field is required.',
    })
    .min(5, { message: 'Code must be at least 6 characters.' }),
})
