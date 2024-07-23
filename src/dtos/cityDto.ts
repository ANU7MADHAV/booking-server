import { z } from "zod";

export const citySchema = z.object({
  name: z.string(),
});

export type CityDto = z.infer<typeof citySchema>;
