import { z } from "zod";

export const flightSchema = z
  .object({
    flightNumber: z.number(),
    airplaneId: z.number(),
    departureCode: z.string(),
    arrivalCode: z.string(),
    departureTime: z.date(),
    arrivalTime: z.date(),
    price: z.number(),
    totalSeats: z.number(),
  })
  .required();