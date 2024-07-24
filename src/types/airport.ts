import { Flight } from "./flight";

export interface Airport {
  id?: string;
  name: string;
  code: string;
  cityId: number;
  departures?: Flight[];
  arrivals?: Flight[];
}
