import { StatusCodes } from "http-status-codes";

import BaseError from "./baseError";

class InternalServer extends BaseError {
  constructor(details: string) {
    super(
      "InternalServerError",
      StatusCodes.INTERNAL_SERVER_ERROR,
      `Something went wrong !!`,
      details
    );
  }
}

export default InternalServer;
