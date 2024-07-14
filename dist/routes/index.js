"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import ping from "../controllers/pingController";
const v1_1 = __importDefault(require("./v1"));
const apiRoutes = express_1.default.Router();
// apiRoutes.get("/", ping);
apiRoutes.get("/", (_, res) => {
    return res.send("hello");
});
console.log("in api routes");
apiRoutes.use("/v1", v1_1.default);
exports.default = apiRoutes;
