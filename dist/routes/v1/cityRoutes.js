"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cityController_1 = __importDefault(require("../../controllers/cityController"));
const cityRoutes = express_1.default.Router();
cityRoutes.get("/", cityController_1.default.getCities);
cityRoutes.get("/:id", cityController_1.default.getCity);
cityRoutes.post("/create", cityController_1.default.createCity);
cityRoutes.put("/:id", cityController_1.default.updateCity);
cityRoutes.delete("/:id", cityController_1.default.removeCity);
exports.default = cityRoutes;
