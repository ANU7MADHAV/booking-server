"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.airplaneSchema = void 0;
const zod_1 = require("zod");
exports.airplaneSchema = zod_1.z.object({
    modelNumber: zod_1.z.string(),
    capacity: zod_1.z.number(),
});
