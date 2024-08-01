"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const airplaneRoutes_1 = __importDefault(require("./airplaneRoutes"));
const airportRoutes_1 = __importDefault(require("./airportRoutes"));
const cityRoutes_1 = __importDefault(require("./cityRoutes"));
const v1Routes = express_1.default.Router();
console.log("in v1 routes");
v1Routes.get("/", (_, res) => {
    return res.send("hello");
});
v1Routes.use("/airplanes", airplaneRoutes_1.default);
v1Routes.use("/cities", cityRoutes_1.default);
v1Routes.use("/airports", airportRoutes_1.default);
exports.default = v1Routes;
