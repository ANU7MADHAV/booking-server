import { z } from "zod";

export const airplaneSchema = z.object({
  modelNumber: z.string(),
  capacity: z.number(),
});

export type CreateAirplaneDto = z.infer<typeof airplaneSchema>;
