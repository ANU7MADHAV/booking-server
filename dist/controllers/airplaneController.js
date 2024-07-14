"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const airplaneDto_1 = require("../dtos/airplaneDto");
const ariplaneRepository_1 = __importDefault(require("../repositories/ariplaneRepository"));
const airplaneService_1 = __importDefault(require("../services/airplaneService"));
const airplaneService = new airplaneService_1.default(new ariplaneRepository_1.default());
function createAirplane(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const airplaneData = req.body;
        const result = airplaneDto_1.airplaneSchema.safeParse(airplaneData);
        if (result.error) {
            return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
                success: false,
                error: result.error,
                message: "Bad Request",
                data: {},
            });
        }
        const createdAirplane = yield airplaneService.createAirplane(airplaneData);
        return res.status(http_status_codes_1.StatusCodes.CREATED).json({
            success: true,
            error: {},
            message: "Successfully created and added airplane",
            data: createdAirplane,
        });
    });
}
exports.default = {
    createAirplane,
};
