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
class AirplaneService {
    constructor(airplaneRepository) {
        this.airplaneRepository = airplaneRepository;
    }
    createAirplane(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.airplaneRepository.createAirplane(data);
                return response;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
    getAirplanes() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.airplaneRepository.getAirplanes();
                return response;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
    getAirplane(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.airplaneRepository.getAirplane(id);
                return response;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
    upateAirplane(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.airplaneRepository.updateAirplane(id, data);
                return response;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
    removeAirplane(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.airplaneRepository.removeAirplane(id);
                return response;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
}
exports.default = AirplaneService;
