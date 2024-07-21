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
function createAirplane(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const airplaneData = req.body;
            console.log(airplaneData);
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
            console.log(createAirplane);
            return res.status(http_status_codes_1.StatusCodes.CREATED).json({
                success: true,
                error: {},
                message: "Successfully created and added airplane",
                data: createdAirplane,
            });
        }
        catch (error) {
            console.log(error);
            next(error);
        }
    });
}
function getAirplanes(_, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const airplanes = yield airplaneService.getAirplanes();
            return res.status(http_status_codes_1.StatusCodes.OK).json({
                success: true,
                error: {},
                message: "Successfully fetch all airplanes",
                data: airplanes,
            });
        }
        catch (error) {
            next(error);
        }
    });
}
function getAirplane(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const numberId = Number(id);
            const response = yield airplaneService.getAirplane(numberId);
            return response;
        }
        catch (error) {
            next(error);
        }
    });
}
function updateAirplane(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const airplaneData = req.body;
            const result = airplaneDto_1.airplaneSchema.safeParse(airplaneData);
            const id = req.params.id;
            if (result.error) {
                return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
                    success: false,
                    error: result.error,
                    message: "Bad Request",
                    data: {},
                });
            }
            const numberId = Number(id);
            const updatedAirplane = yield airplaneService.upateAirplane(numberId, airplaneData);
            return res.status(http_status_codes_1.StatusCodes.CREATED).json({
                success: true,
                error: {},
                message: "Successfully created and added airplane",
                data: updatedAirplane,
            });
        }
        catch (error) {
            next(error);
        }
    });
}
function removeAirplane(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const numberId = Number(id);
            const removedAirplane = yield airplaneService.removeAirplane(numberId);
            return res.status(http_status_codes_1.StatusCodes.OK).json({
                success: true,
                error: {},
                message: "Successfully removed airplane",
                data: removedAirplane,
            });
        }
        catch (error) {
            next(error);
        }
    });
}
exports.default = {
    createAirplane,
    getAirplanes,
    updateAirplane,
    removeAirplane,
    getAirplane,
};
