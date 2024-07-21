"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const baseError_1 = __importDefault(require("../errors/baseError"));
const errorHandler = (err, _req, res) => {
    if (err instanceof baseError_1.default) {
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
            error: err.details,
            data: {}, // because this is an exception so no data is going tobe provided
        });
    }
    return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: "Something went wrong !",
        error: err,
        data: {}, // because this is an exception so no data is going tobe provided
    });
};
exports.default = errorHandler;
