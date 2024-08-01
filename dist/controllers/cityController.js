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
const cityDto_1 = require("../dtos/cityDto");
const cityRepository_1 = __importDefault(require("../repositories/cityRepository"));
const cityServcie_1 = __importDefault(require("../services/cityServcie"));
const cityService = new cityServcie_1.default(new cityRepository_1.default());
function createCity(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const response = yield cityService.createCity(data);
            return response;
        }
        catch (error) {
            next(error);
        }
    });
}
function getCity(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const numberId = Number(id);
            const response = yield cityService.getCity(numberId);
            return response;
        }
        catch (error) {
            next(error);
        }
    });
}
function getCities(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield cityService.getCities();
            return response;
        }
        catch (error) {
            next(error);
        }
    });
}
function updateCity(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const cityData = req.body;
            const result = cityDto_1.citySchema.safeParse(cityData);
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
            const updatedCity = yield cityService.updateCity(numberId, cityData);
            return res.status(http_status_codes_1.StatusCodes.CREATED).json({
                success: true,
                error: {},
                message: "Successfully created and added airplane",
                data: updatedCity,
            });
        }
        catch (error) {
            next(error);
        }
    });
}
function removeCity(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const numberId = Number(id);
            const reponse = yield cityService.removeCity(numberId);
            return reponse;
        }
        catch (error) {
            next(error);
        }
    });
}
exports.default = {
    getCities,
    createCity,
    getCity,
    updateCity,
    removeCity,
};
