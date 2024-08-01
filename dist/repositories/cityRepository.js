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
class CityRepository {
    createCity(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield prisma.city.create({
                    data: {
                        name: data.name,
                    },
                });
                return response;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getCities() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield prisma.city.findMany();
                if (!response) {
                    throw new notFound_1.default("Cities");
                }
                return response;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
    getCity(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield prisma.city.findUnique({
                    where: {
                        id,
                    },
                });
                if (!response) {
                    throw new notFound_1.default("City");
                }
            }
            catch (error) { }
        });
    }
    updateCity(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield prisma.city.update({
                    where: {
                        id,
                    },
                    data: {
                        name: data.name,
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
    removeCity(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield prisma.city.delete({
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
exports.default = CityRepository;