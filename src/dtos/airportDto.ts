import { z } from "zod";

export const airportSchema = z
  .object({
    name: z.string(),
    code: z.string(),
    cityId: z.number(),
  })
  .required();

export type AirportDto = z.infer<typeof airportSchema>;
