"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.airportSchema = void 0;
const zod_1 = require("zod");
exports.airportSchema = zod_1.z
    .object({
    name: zod_1.z.string(),
    code: zod_1.z.string(),
    cityId: zod_1.z.number(),
})
    .required();
