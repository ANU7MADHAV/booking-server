import { PrismaClient } from "@prisma/client";

import Notfound from "../errors/notFound";
import { Airplane } from "../types/airplane";

const prisma = new PrismaClient();

class AirplaneRepository {
  async createAirplane(data: Airplane) {
    try {
      const response = await prisma.ariplane.create({
        data: {
          modelNumber: data.modelNumber,
          capacity: data.capacity,
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async getAirplanes() {
    try {
      const response = await prisma.ariplane.findMany();
      if (!response) {
        throw new Notfound("Airplanes");
      }
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getAirplane(id: number) {
    try {
      const response = await prisma.ariplane.findUnique({
        where: {
          id,
        },
      });
      if (!response) {
        throw new Notfound("Airplane");
      }
    } catch (error) {}
  }

  async updateAirplane(id: number, data: Airplane) {
    try {
      const response = await prisma.ariplane.update({
        where: {
          id,
        },
        data: {
          modelNumber: data.modelNumber,
          capacity: data.capacity,
        },
      });
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async removeAirplane(id: number) {
    try {
      const response = await prisma.ariplane.delete({
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

export default AirplaneRepository;
