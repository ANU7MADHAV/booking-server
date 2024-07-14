import AirplaneRepository from "../repositories/ariplaneRepository";
import { Airplane } from "../types/airplane";

class AirplaneService {
  private airplaneRepository: AirplaneRepository;

  constructor(airplaneRepository: AirplaneRepository) {
    this.airplaneRepository = airplaneRepository;
  }

  async createAirplane(data: Airplane) {
    try {
      const response = await this.airplaneRepository.createAirplane(data);
      return response;
    } catch (error) {
      throw new Error("Failed to create airplane");
    }
  }

  async getAirplanes() {
    try {
      const response = await this.airplaneRepository.getAirplanes();
      return response;
    } catch (error) {
      throw new Error("Failed to create airplane");
    }
  }

  async upateAirplane(id: number, data: Airplane) {
    try {
      const response = await this.airplaneRepository.updateAirplane(id, data);
      return response;
    } catch (error) {
      throw new Error("Failed to create airplane");
    }
  }
  async removeAirplane(id: number) {
    try {
      const response = await this.airplaneRepository.removeAirplane(id);
      return response;
    } catch (error) {
      throw new Error("Failed to create airplane");
    }
  }
}

export default AirplaneService;
