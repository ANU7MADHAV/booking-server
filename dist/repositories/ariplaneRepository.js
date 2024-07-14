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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class AirplaneRepository {
    createAirplane(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield prisma.ariplane.create({
                    data: {
                        modelNumber: data.modelNumber,
                        capacity: data.capacity,
                    },
                });
                return response;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getAirplanes() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield prisma.ariplane.findMany();
                return response;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    updateAirplane(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield prisma.ariplane.update({
                    where: {
                        id,
                    },
                    data: {
                        modelNumber: data.modelNumber,
                        capacity: data.capacity,
                    },
                });
                return response;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    removeAirplane(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield prisma.ariplane.delete({
                    where: {
                        id,
                    },
                });
                return response;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.default = AirplaneRepository;
