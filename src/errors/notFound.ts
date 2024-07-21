import { StatusCodes } from "http-status-codes";

import BaseError from "./baseError";

class Notfound extends BaseError {
  constructor(resourceName: string) {
    super(
      "Notfound",
      StatusCodes.NOT_FOUND,
      `The requested resource: ${resourceName} not found`,
      resourceName
    );
  }
}
export default Notfound;
