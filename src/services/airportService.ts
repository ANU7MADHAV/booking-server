import AirportRepository from "../repositories/airportRepository";
import { Airport } from "../types/airport";

class AirportService {
  private airportRepository: AirportRepository;

  constructor(airportRepository: AirportRepository) {
    this.airportRepository = airportRepository;
  }

  async createAirport(data: Airport) {
    try {
      const response = await this.airportRepository.createAirport(data);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getAirports() {
    try {
      const response = await this.airportRepository.getAirports();
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getAirport(id: number) {
    try {
      const response = await this.airportRepository.getAirport(id);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async upateAirport(id: number, data: Airport) {
    try {
      const response = await this.airportRepository.updateAirport(id, data);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async removeAirport(id: number) {
    try {
      const response = await this.airportRepository.removeAirport(id);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export default AirportService;
