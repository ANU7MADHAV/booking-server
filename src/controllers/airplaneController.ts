import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { AirplaneDto, airplaneSchema } from "../dtos/airplaneDto";
import AirplaneRepository from "../repositories/ariplaneRepository";
import AirplaneService from "../services/airplaneService";

const airplaneService = new AirplaneService(new AirplaneRepository());

async function createAirplane(req: Request, res: Response, next: NextFunction) {
  try {
    const airplaneData = req.body as AirplaneDto;
    console.log(airplaneData);
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
    console.log(createAirplane);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      error: {},
      message: "Successfully created and added airplane",
      data: createdAirplane,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}

async function getAirplanes(_: Request, res: Response, next: NextFunction) {
  try {
    const airplanes = await airplaneService.getAirplanes();

    return res.status(StatusCodes.OK).json({
      success: true,
      error: {},
      message: "Successfully fetch all airplanes",
      data: airplanes,
    });
  } catch (error) {
    next(error);
  }
}

async function getAirplane(req: Request, res: Response, next: NextFunction) {
  try {
    const id = req.params.id;
    const numberId = Number(id);
    const response = await airplaneService.getAirplane(numberId);
    return response;
  } catch (error) {
    next(error);
  }
}

async function updateAirplane(req: Request, res: Response, next: NextFunction) {
  try {
    const airplaneData = req.body as AirplaneDto;
    const result = airplaneSchema.safeParse(airplaneData);
    const id = req.params.id;

    if (result.error) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        error: result.error,
        message: "Bad Request",
        data: {},
      });
    }
    const numberId = Number(id);
    const updatedAirplane = await airplaneService.upateAirplane(
      numberId,
      airplaneData
    );
    return res.status(StatusCodes.CREATED).json({
      success: true,
      error: {},
      message: "Successfully created and added airplane",
      data: updatedAirplane,
    });
  } catch (error) {
    next(error);
  }
}

async function removeAirplane(req: Request, res: Response, next: NextFunction) {
  try {
    const id = req.params.id;
    const numberId = Number(id);
    const removedAirplane = await airplaneService.removeAirplane(numberId);
    return res.status(StatusCodes.OK).json({
      success: true,
      error: {},
      message: "Successfully removed airplane",
      data: removedAirplane,
    });
  } catch (error) {
    next(error);
  }
}

export default {
  createAirplane,
  getAirplanes,
  updateAirplane,
  removeAirplane,
  getAirplane,
};
