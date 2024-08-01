"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flightSchema = void 0;
const zod_1 = require("zod");
exports.flightSchema = zod_1.z
    .object({
    flightNumber: zod_1.z.number(),
    airplaneId: zod_1.z.number(),
    departureCode: zod_1.z.string(),
    arrivalCode: zod_1.z.string(),
    departureTime: zod_1.z.date(),
    arrivalTime: zod_1.z.date(),
    price: zod_1.z.number(),
    totalSeats: zod_1.z.number(),
})
    .required();
