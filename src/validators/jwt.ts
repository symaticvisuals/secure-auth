import { z } from 'zod'

export const jwtValidator = z.object({
    id: z.number(),
    email: z.string(),
    username: z.string(),
})

export type JwtValidator = z.infer<typeof jwtValidator>