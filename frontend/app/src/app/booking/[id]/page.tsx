import { Booking } from "@/types";
import dayjs from "dayjs";
import Link from "next/link";

const getBookings = async (id: string): Promise<Booking> => {
  const res = await fetch(
    `http://host.docker.internal:5000/api/bookings/${id}`,
    {
      cache: "no-store",
      mode: "no-cors",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
interface Props {
  params: { id: string };
}
const Page = async ({ params }: Props) => {
  const booking = await getBookings(params.id);
  return (
    <div className="min-h-screen bg-gray-100 p-8 justify-center flex">
      <div className="flex flex-col mt-6 pr-6 pl-4 pt-3 pb-3 bg-white shadow-md rounded-lg w-96">
        <h2 className="text-xl font-bold mb-6">
          Booking with {booking.doctor_name}
        </h2>

        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-gray-500">Service</h3>
            <p className="text-lg text-gray-900">{booking.service}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">Date</h3>
            <p className="text-lg text-gray-900">
              {dayjs(booking.date).format("DD-MM-YYYY")}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">Start Time</h3>
            <p className="text-lg text-gray-900">{booking.start_time}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">End Time</h3>
            <p className="text-lg text-gray-900">{booking.end_time}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">Doctor</h3>
            <p className="text-lg text-gray-900">{booking.doctor_name}</p>
          </div>
        </div>

        <div className="mt-6 flex space-x-4">
          <Link
            href={"/"}
            className="py-2 px-4 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
