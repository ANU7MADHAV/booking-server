"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseError extends Error {
    constructor(name, statusCode, description, detials) {
        super(description);
        (this.name = name),
            (this.statusCode = statusCode),
            (this.details = detials);
    }
}
exports.default = BaseError;
