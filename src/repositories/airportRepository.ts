import { PrismaClient } from "@prisma/client";

import { Airport } from "../types/airport";
import Notfound from "../errors/notFound";

const prisma = new PrismaClient();

class AirportRepository {
  async createAirport(data: Airport) {
    try {
      const response = await prisma.airport.create({
        data: {
          name: data.name,
          code: data.code,
          cityId: data.cityId,
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async getAirports() {
    try {
      const response = await prisma.airport.findMany();
      if (!response) {
        throw new Notfound("Airplanes");
      }
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getAirport(id: number) {
    try {
      const response = await prisma.airport.findUnique({
        where: {
          id,
        },
      });
      if (!response) {
        throw new Notfound("Airplane");
      }
    } catch (error) {}
  }

  async updateAirport(id: number, data: Airport) {
    try {
      const response = await prisma.airport.update({
        where: {
          id,
        },
        data: {
          name: data.name,
          code: data.code,
          cityId: data.cityId,
        },
      });
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async removeAirport(id: number) {
    try {
      const response = await prisma.airport.delete({
        where: {
          id,
        },
      });
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export default AirportRepository;
