"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import ping from "../../controllers/pingController";
const airplaneRoutes_1 = __importDefault(require("./airplaneRoutes"));
const v1Routes = express_1.default.Router();
// v1Routes.get("/", ping);
console.log("in v1 routes");
v1Routes.get("/", (_, res) => {
    return res.send("hello");
});
v1Routes.use("/airplanes", airplaneRoutes_1.default);
exports.default = v1Routes;
