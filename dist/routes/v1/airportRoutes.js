"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const airportController_1 = __importDefault(require("../../controllers/airportController"));
const airportRoutes = express_1.default.Router();
airportRoutes.get("/", airportController_1.default.getAirports);
airportRoutes.get("/:id", airportController_1.default.getAirport);
airportRoutes.post("/create", airportController_1.default.createAirport);
airportRoutes.put("/:id", airportController_1.default.updateAirport);
airportRoutes.delete("/:id", airportController_1.default.removeAirport);
exports.default = airportRoutes;
