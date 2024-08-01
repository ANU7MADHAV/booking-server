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
class CityService {
    constructor(cityRepository) {
        this.cityRepository = cityRepository;
    }
    createCity(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.cityRepository.createCity(data);
                return response;
            }
            catch (error) {
                throw new Error();
            }
        });
    }
    getCity(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.cityRepository.getCity(id);
                return response;
            }
            catch (error) {
                throw new Error();
            }
        });
    }
    getCities() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.cityRepository.getCities();
                return response;
            }
            catch (error) {
                throw new Error();
            }
        });
    }
    removeCity(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.cityRepository.removeCity(id);
                return response;
            }
            catch (error) {
                throw new Error();
            }
        });
    }
    updateCity(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.cityRepository.updateCity(id, data);
                return response;
            }
            catch (error) {
                throw new Error();
            }
        });
    }
}
exports.default = CityService;
