import { z } from "zod";

export const airplaneSchema = z
  .object({
    modelNumber: z.string(),
    capacity: z.number(),
  })
  .required();

export type AirplaneDto = z.infer<typeof airplaneSchema>;
