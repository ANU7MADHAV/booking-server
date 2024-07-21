"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const baseError_1 = __importDefault(require("./baseError"));
class Notfound extends baseError_1.default {
    constructor(resourceName) {
        super("Notfound", http_status_codes_1.StatusCodes.NOT_FOUND, `The requested resource: ${resourceName} not found`, resourceName);
    }
}
exports.default = Notfound;
