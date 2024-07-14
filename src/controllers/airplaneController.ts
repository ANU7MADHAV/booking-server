import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { airplaneSchema, CreateAirplaneDto } from "../dtos/airplaneDto";
import AirplaneRepository from "../repositories/ariplaneRepository";
import AirplaneService from "../services/airplaneService";

const airplaneService = new AirplaneService(new AirplaneRepository());

async function createAirplane(req: Request, res: Response) {
  const airplaneData = req.body as CreateAirplaneDto;
  const result = airplaneSchema.safeParse(airplaneData);

  if (result.error) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      error: result.error,
      message: "Bad Request",
      data: {},
    });
  }
  const createdAirplane = await airplaneService.createAirplane(airplaneData);
  return res.status(StatusCodes.CREATED).json({
    success: true,
    error: {},
    message: "Successfully created and added airplane",
    data: createdAirplane,
  });
}

export default {
  createAirplane,
};
