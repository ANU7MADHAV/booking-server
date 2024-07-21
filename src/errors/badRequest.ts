import { StatusCodes } from "http-status-codes";

import BaseError from "./baseError";

class BadRequest extends BaseError {
  constructor(propertyName: string, details: string) {
    super(
      "BadRequest",
      StatusCodes.BAD_REQUEST,
      `Invalid structure for ${propertyName} provided`,
      details
    );
  }
}

export default BadRequest;
