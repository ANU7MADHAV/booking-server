import CityRepository from "../repositories/cityRepository";
import { City } from "../types/city";

class CityService {
  private cityRepository: CityRepository;

  constructor(cityRepository: CityRepository) {
    this.cityRepository = cityRepository;
  }
  async createCity(data: City) {
    try {
      const response = await this.cityRepository.createCity(data);
      return response;
    } catch (error) {
      throw new Error();
    }
  }
  async getCity(id: number) {
    try {
      const response = await this.cityRepository.getCity(id);
      return response;
    } catch (error) {
      throw new Error();
    }
  }
  async getCities() {
    try {
      const response = await this.cityRepository.getCities();
      return response;
    } catch (error) {
      throw new Error();
    }
  }
  async removeCity(id: number) {
    try {
      const response = await this.cityRepository.removeCity(id);
      return response;
    } catch (error) {
      throw new Error();
    }
  }
  async updateCity(id: number, data: City) {
    try {
      const response = await this.cityRepository.updateCity(id, data);
      return response;
    } catch (error) {
      throw new Error();
    }
  }
}

export default CityService;
