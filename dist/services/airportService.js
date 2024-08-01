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
class AirportService {
    constructor(airportRepository) {
        this.airportRepository = airportRepository;
    }
    createAirport(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.airportRepository.createAirport(data);
                return response;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
    getAirports() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.airportRepository.getAirports();
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
                const response = yield this.airportRepository.getAirport(id);
                return response;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
    upateAirport(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.airportRepository.updateAirport(id, data);
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
                const response = yield this.airportRepository.removeAirport(id);
                return response;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
}
exports.default = AirportService;
