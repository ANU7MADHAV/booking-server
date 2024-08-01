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
const client_1 = require("@prisma/client");
const notFound_1 = __importDefault(require("../errors/notFound"));
const prisma = new client_1.PrismaClient();
class AirportRepository {
    createAirport(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield prisma.airport.create({
                    data: {
                        name: data.name,
                        code: data.code,
                        cityId: data.cityId,
                    },
                });
                return response;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getAirports() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield prisma.airport.findMany();
                if (!response) {
                    throw new notFound_1.default("Airplanes");
                }
                return response;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
    getAirport(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield prisma.airport.findUnique({
                    where: {
                        id,
                    },
                });
                if (!response) {
                    throw new notFound_1.default("Airplane");
                }
            }
            catch (error) { }
        });
    }
    updateAirport(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield prisma.airport.update({
                    where: {
                        id,
                    },
                    data: {
                        name: data.name,
                        code: data.code,
                        cityId: data.cityId,
                    },
                });
                return response;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
    removeAirport(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield prisma.airport.delete({
                    where: {
                        id,
                    },
                });
                return response;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
}
exports.default = AirportRepository;
