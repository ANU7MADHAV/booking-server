import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { AirportDto, airportSchema } from "../dtos/airportDto";
import AirportRepository from "../repositories/airportRepository";
import AirportService from "../services/airportService";

const airportService = new AirportService(new AirportRepository());

async function createAirport(req: Request, res: Response, next: NextFunction) {
  try {
    const airportData = req.body as AirportDto;
    console.log(airportData);
    const result = airportSchema.safeParse(airportData);

    if (result.error) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        error: result.error,
        message: "Bad Request",
        data: {},
      });
    }
    const createdAirport = await airportService.createAirport(airportData);
    console.log(createAirport);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      error: {},
      message: "Successfully created and added airplane",
      data: createdAirport,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}

async function getAirports(_: Request, res: Response, next: NextFunction) {
  try {
    const airports = await airportService.getAirports();

    return res.status(StatusCodes.OK).json({
      success: true,
      error: {},
      message: "Successfully fetch all airplanes",
      data: airports,
    });
  } catch (error) {
    next(error);
  }
}

async function getAirport(req: Request, res: Response, next: NextFunction) {
  try {
    const id = req.params.id;
    const numberId = Number(id);
    const response = await airportService.getAirport(numberId);
    return response;
  } catch (error) {
    next(error);
  }
}

async function updateAirport(req: Request, res: Response, next: NextFunction) {
  try {
    const airportData = req.body as AirportDto;
    const result = airportSchema.safeParse(airportData);
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
    const updatedAirport = await airportService.upateAirport(
      numberId,
      airportData
    );
    return res.status(StatusCodes.CREATED).json({
      success: true,
      error: {},
      message: "Successfully created and added airplane",
      data: updatedAirport,
    });
  } catch (error) {
    next(error);
  }
}

async function removeAirport(req: Request, res: Response, next: NextFunction) {
  try {
    const id = req.params.id;
    const numberId = Number(id);
    const removedAirplane = await airportService.removeAirport(numberId);
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
  createAirport,
  getAirports,
  updateAirport,
  removeAirport,
  getAirport,
};
