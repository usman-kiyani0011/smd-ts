import { createSlice, nanoid } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface MyBooking {
  deal: string;
  bookingId: number;
  guest: string;
  name: string;
  timeOfTracking: string;
  servingPerson: number;
  email: string;
  price: number;
  status: string;
}
const initialState: MyBooking[] = [
  {
    deal: "Weekend Special",
    bookingId: 12345,
    guest: "",
    name: "John Doe",
    timeOfTracking: "04:00 PM to 05:00 PM",
    servingPerson: 0o3,
    email: "john@gmail.com",
    price: 10,
    status: "New",
  },
  {
    deal: "Fast Food Special",
    bookingId: 12346,
    guest: "",
    name: "Jay Soni",
    timeOfTracking: "07:00 PM to 08:00 PM",
    servingPerson: 0o5,
    email: "jay@gmail.com",
    price: 20,
    status: "Accepted",
  },
  {
    deal: "Weekend Special",
    bookingId: 12347,
    guest: "",
    name: "John Doe",
    timeOfTracking: "04:00 PM to 05:00 PM",
    servingPerson: 0o3,
    email: "john@gmail.com",
    price: 10,
    status: "Cancelled",
  },
  {
    deal: "Weekend Special",
    bookingId: 12348,
    guest: "",
    name: "John Doe",
    timeOfTracking: "04:00 PM to 05:00 PM",
    servingPerson: 0o3,
    email: "john@gmail.com",
    price: 10,
    status: "Confirmed",
  },
];

export const myBookings = createSlice({
  name: "mybookings",
  initialState,
  reducers: {},
});

export const getAllBookings = (state: RootState) => state.myBooking;

export const {} = myBookings.actions;
export default myBookings.reducer;
