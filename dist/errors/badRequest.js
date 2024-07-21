"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const baseError_1 = __importDefault(require("./baseError"));
class BadRequest extends baseError_1.default {
    constructor(propertyName, details) {
        super("BadRequest", http_status_codes_1.StatusCodes.BAD_REQUEST, `Invalid structure for ${propertyName} provided`, details);
    }
}
exports.default = BadRequest;
