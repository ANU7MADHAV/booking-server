import { PrismaClient } from "@prisma/client";

import Notfound from "../errors/notFound";
import { Flight } from "../types/flight";

const prisma = new PrismaClient();

class FlightRepository {
  async createFlight(data: Flight) {
    try {
      const response = await prisma.flight.create({
        data: {
          flightNumber: data.flightNumber,
          airplaneId: data.airplaneId,
          departureCode: data.departureCode,
          arrivalCode: data.arrivalCode,
          departureTime: data.departureTime,
          arrivalTime: data.arrivalTime,
          price: data.price,
          boardingGate: data.boardingGate,
          totalSeats: data.totalSeats,
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async getFlights() {
    try {
      const response = await prisma.flight.findMany();
      if (!response) {
        throw new Notfound("Airplanes");
      }
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getFlight(id: number) {
    try {
      const response = await prisma.flight.findUnique({
        where: {
          id,
        },
      });
      if (!response) {
        throw new Notfound("Airplane");
      }
    } catch (error) {}
  }

  async updateFlight(id: number, data: Flight) {
    try {
      const response = await prisma.flight.update({
        where: {
          id,
        },
        data: {
          flightNumber: data.flightNumber,
          airplaneId: data.airplaneId,
          departureCode: data.departureCode,
          arrivalCode: data.arrivalCode,
          departureTime: data.departureTime,
          arrivalTime: data.arrivalTime,
          price: data.price,
          boardingGate: data.boardingGate,
          totalSeats: data.totalSeats,
        },
      });
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async removeFlight(id: number) {
    try {
      const response = await prisma.flight.delete({
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

export default FlightRepository;
