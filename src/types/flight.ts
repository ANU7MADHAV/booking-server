export interface Flight {
  id: number;
  flightNumber: number;
  airplaneId: number;
  departureCode: string;
  arrivalCode: string;
  departureTime: Date;
  arrivalTime: Date;
  price: number;
  boardingGate: string;
  totalSeats: number;
}
