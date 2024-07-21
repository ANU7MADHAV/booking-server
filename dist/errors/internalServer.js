"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const baseError_1 = __importDefault(require("./baseError"));
class InternalServer extends baseError_1.default {
    constructor(details) {
        super("InternalServerError", http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, `Something went wrong !!`, details);
    }
}
exports.default = InternalServer;
