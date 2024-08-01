export interface Flight {
  id: number;
  flightNumber: string;
  airplaneId: number;
  departureCode: string;
  arrivalCode: string;
  departureTime: Date;
  arrivalTime: Date;
  price: number;
  boardingGate: string;
  totalSeats: number;
}
