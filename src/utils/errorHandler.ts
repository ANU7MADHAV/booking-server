import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import BaseError from "../errors/baseError";

const errorHandler = (err: Error, _req: Request, res: Response) => {
  if (err instanceof BaseError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      error: err.details,
      data: {}, // because this is an exception so no data is going tobe provided
    });
  }
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: "Something went wrong !",
    error: err,
    data: {}, // because this is an exception so no data is going tobe provided
  });
};

export default errorHandler;
