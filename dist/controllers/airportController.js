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
const airportDto_1 = require("../dtos/airportDto");
const airportRepository_1 = __importDefault(require("../repositories/airportRepository"));
const airportService_1 = __importDefault(require("../services/airportService"));
const airportService = new airportService_1.default(new airportRepository_1.default());
function createAirport(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const airportData = req.body;
            console.log(airportData);
            const result = airportDto_1.airportSchema.safeParse(airportData);
            if (result.error) {
                return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
                    success: false,
                    error: result.error,
                    message: "Bad Request",
                    data: {},
                });
            }
            const createdAirport = yield airportService.createAirport(airportData);
            console.log(createAirport);
            return res.status(http_status_codes_1.StatusCodes.CREATED).json({
                success: true,
                error: {},
                message: "Successfully created and added airplane",
                data: createdAirport,
            });
        }
        catch (error) {
            console.log(error);
            next(error);
        }
    });
}
function getAirports(_, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const airports = yield airportService.getAirports();
            return res.status(http_status_codes_1.StatusCodes.OK).json({
                success: true,
                error: {},
                message: "Successfully fetch all airplanes",
                data: airports,
            });
        }
        catch (error) {
            next(error);
        }
    });
}
function getAirport(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const numberId = Number(id);
            const response = yield airportService.getAirport(numberId);
            return response;
        }
        catch (error) {
            next(error);
        }
    });
}
function updateAirport(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const airportData = req.body;
            const result = airportDto_1.airportSchema.safeParse(airportData);
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
            const updatedAirport = yield airportService.upateAirport(numberId, airportData);
            return res.status(http_status_codes_1.StatusCodes.CREATED).json({
                success: true,
                error: {},
                message: "Successfully created and added airplane",
                data: updatedAirport,
            });
        }
        catch (error) {
            next(error);
        }
    });
}
function removeAirport(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const numberId = Number(id);
            const removedAirplane = yield airportService.removeAirport(numberId);
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
    createAirport,
    getAirports,
    updateAirport,
    removeAirport,
    getAirport,
};
