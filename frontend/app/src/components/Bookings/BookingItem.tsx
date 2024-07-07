import dayjs from "dayjs";
import Link from "next/link";
interface Props {
  id: string;
  date: string;
  startTime: string;
  endTime: string;
  service: string;
  doctorName: string;
}
const BookingItem = ({
  id,
  date,
  startTime,
  endTime,
  service,
  doctorName,
}: Props) => (
  <Link
    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm mb-4"
    href={`/booking/${id}`}
  >
    <div className="flex items-center">
      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-100 text-green-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 7V3m8 4V3m-6 4h4M4 11h16M4 19h16M4 11v8m16-8v8M7 11v8m4-8v8m4-8v8M2 7h20a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V9a2 2 0 012-2z"
          />
        </svg>
      </div>
      <div className="ml-4">
        <p className="text-sm font-medium text-gray-900">
          {service} on {dayjs(date).format("DD/MM/YYYY")} from {startTime} to{" "}
          {endTime}
        </p>
        <p className="text-sm text-gray-500">{doctorName}</p>
      </div>
    </div>
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-6 w-6 text-gray-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  </Link>
);
export default BookingItem;
