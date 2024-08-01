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
const flightRepository_1 = __importDefault(require("../repositories/flightRepository"));
const flightSerivce_1 = __importDefault(require("../services/flightSerivce"));
const flightService = new flightSerivce_1.default(new flightRepository_1.default());
function createFlight(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const response = yield flightService.createService(data);
            return response;
        }
        catch (error) {
            next(error);
        }
    });
}
exports.default = createFlight;
