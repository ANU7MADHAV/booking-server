import FlightRepository from "../repositories/flightRepository";
import { Flight } from "../types/flight";

class FlightService {
  private flightRepository: FlightRepository;

  constructor(flightRepository: FlightRepository) {
    this.flightRepository = flightRepository;
  }

  async createService(data: Flight) {
    try {
      const response = await this.flightRepository.createFlight(data);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
export default FlightService;
