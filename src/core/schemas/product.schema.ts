import { z } from 'zod'

export const fabricProductSchema = z.object({
  name: z.string().min(3, "Le nom doit contenir au moins 3 caractères"),
  dimensions: z.object({
    width: z.number().min(1),
    length: z.number().min(1),
    unit: z.enum(['cm', 'm'])
  }),
  pricePerMeter: z.number().min(0.01),
  totalValue: z.number(),
  supplier: z.object({
    name: z.string(),
    url: z.string().url()
  }),
  image: z.string().url()
}) 