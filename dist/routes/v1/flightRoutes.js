"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const flightController_1 = __importDefault(require("../../controllers/flightController"));
const flightRoutes = express_1.default.Router();
flightRoutes.post("/create", flightController_1.default);
exports.default = flightRoutes;
