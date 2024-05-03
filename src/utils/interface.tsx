export interface Passenger {
  fname: string;
  lname: string;
  email: string;
}

export interface Seat {
  seat_no: number;
  passenger: Passenger;
  date_booking: string;
  upper: boolean;
  single: boolean;
  window: boolean;
  last: boolean;
  reserve: boolean;
}

export interface RenderSeatProps {
  seatData: Seat[];
  handleOnSeatClick: (seat_no: number) => void;
  upper: boolean;
}
