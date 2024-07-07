import React from "react";
import Link from "next/link";
import BookingItem from "./BookingItem";
import { Booking } from "@/types";
interface Props {
  bookings: Booking[];
}
const Bookings = ({ bookings }: Props) => (
  <div className="min-h-screen bg-gray-100 p-8">
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-bold ">Bookings</h2>
      <Link href={"/create-booking"}>
        <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Create Booking
        </button>
      </Link>
    </div>
    {bookings.map((appointment) => (
      <BookingItem
        key={appointment.id}
        id={appointment.id}
        date={appointment.date}
        startTime={appointment.start_time}
        endTime={appointment.end_time}
        service={appointment.service}
        doctorName={appointment.doctor_name}
      />
    ))}
  </div>
);

export default Bookings;
