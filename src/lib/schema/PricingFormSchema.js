import { z } from 'zod'

export const PricingFormSchema = z.object({
  SalesPrice: z
    .string({
      required_error: 'SalesPrice field is required.',
    })
    .min(3, { message: 'Sales Price field is required.' }),
  Condition: z
    .string({
      required_error: 'Condition field is required.',
    })
    .min(3, { message: 'Condition field is required.' }),
  HouseCondition: z
    .string({
      required_error: 'House Condition field is required.',
    })
    .min(3, { message: 'House Condition field is required.' }),
  availStatus: z
    .string({
      required_error: 'Availability Status field is required.',
    })
    .min(3, { message: 'Availability Status field is required.' }),
  OriginalSalesPrice: z
    .string({
      required_error: 'Original Sales Price field is required.',
    })
    .min(3, { message: 'Original Sales Price field is required.' }),
  OtherFeesTitle: z.string(),
  OtherFeesPrice: z.string(),
  AppendTo: z.string(),
  OtherTypes: z.string(),
  bedroomType: z
    .string({
      required_error: 'Bedroom Type field is required.',
    })
    .min(3, { message: 'Bedroom Type field is required.' }),
  bathroomType: z
    .string({
      required_error: 'Bathroom Type field is required.',
    })
    .min(3, { message: 'Bathroom Type field is required.' }),
  ToiletType: z
    .string({
      required_error: 'Toilet Type field is required.',
    })
    .min(3, { message: 'Toilet Type field is required.' }),
  AreaSize: z
    .string({
      required_error: 'Area Size field is required.',
    })
    .min(3, {
      message: 'Area Size field is required.',
    }),
})
