import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { CityDto, citySchema } from "../dtos/cityDto";
import CityRepository from "../repositories/cityRepository";
import CityService from "../services/cityServcie";
import { error } from "winston";

const cityService = new CityService(new CityRepository());

async function createCity(req: Request, res: Response, next: NextFunction) {
  try {
    const data = req.body as CityDto;
    const response = await cityService.createCity(data);
    return response;
  } catch (error) {
    next(error);
  }
}
async function getCity(req: Request, res: Response, next: NextFunction) {
  try {
    const id = req.params.id;
    const numberId = Number(id);
    const response = await cityService.getCity(numberId);
    return response;
  } catch (error) {
    next(error);
  }
}
async function getCities(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await cityService.getCities();
    return response;
  } catch (error) {
    next(error);
  }
}
async function updateCity(req: Request, res: Response, next: NextFunction) {
  try {
    const cityData = req.body as CityDto;
    const result = citySchema.safeParse(cityData);
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
    const updatedCity = await cityService.updateCity(numberId, cityData);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      error: {},
      message: "Successfully created and added airplane",
      data: cityData,
    });
  } catch (error) {
    next(error);
  }
}

async function removeCity(req: Request, res: Response, next: NextFunction) {
  try {
    const id = req.params.id;
    const numberId = Number(id);
    const reponse = await cityService.removeCity(numberId);
    return reponse;
  } catch (error) {
    next(error);
  }
}

export default {
  getCities,
  createCity,
  getCity,
  updateCity,
  removeCity,
};
