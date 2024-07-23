import { City, PrismaClient } from "@prisma/client";

import Notfound from "../errors/notFound";

const prisma = new PrismaClient();

class CityRepository {
  async createCity(data: City) {
    try {
      const response = await prisma.city.create({
        data: {
          name: data.name,
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async getCities() {
    try {
      const response = await prisma.city.findMany();
      if (!response) {
        throw new Notfound("Cities");
      }
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getCity(id: number) {
    try {
      const response = await prisma.city.findUnique({
        where: {
          id,
        },
      });
      if (!response) {
        throw new Notfound("City");
      }
    } catch (error) {}
  }

  async updateCity(id: number, data: City) {
    try {
      const response = await prisma.city.update({
        where: {
          id,
        },
        data: {
          name: data.name,
        },
      });
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async removeCity(id: number) {
    try {
      const response = await prisma.city.delete({
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

export default CityRepository;
