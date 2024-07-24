import { z } from "zod";

export const citySchema = z
  .object({
    name: z.string(),
  })
  .required();

export type CityDto = z.infer<typeof citySchema>;
