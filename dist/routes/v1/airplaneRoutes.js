"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const airplaneController_1 = __importDefault(require("../../controllers/airplaneController"));
const airplaneRoutes = express_1.default.Router();
airplaneRoutes.get("/", airplaneController_1.default.getAirplanes);
airplaneRoutes.get("/:id", airplaneController_1.default.getAirplane);
airplaneRoutes.post("/create", airplaneController_1.default.createAirplane);
airplaneRoutes.put("/:id", airplaneController_1.default.updateAirplane);
airplaneRoutes.delete("/:id", airplaneController_1.default.removeAirplane);
exports.default = airplaneRoutes;
