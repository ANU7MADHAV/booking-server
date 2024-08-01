import { NextFunction, Request, Response } from "express";

import FlightRepository from "../repositories/flightRepository";
import FlightService from "../services/flightSerivce";
import { FlightDto } from "../dtos/flightDto";

const flightService = new FlightService(new FlightRepository());

async function createFlight(req: Request, res: Response, next: NextFunction) {
  try {
    const data = req.body as FlightDto;
    const response = await flightService.createService(data);
    return response;
  } catch (error) {
    next(error);
  }
}

export default createFlight;
