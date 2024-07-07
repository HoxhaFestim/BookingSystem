import Bookings from "@/components/Bookings/Bookings";
import { Booking } from "@/types";
const getBookings = async (): Promise<Booking[]> => {
  const res = await fetch("http://host.docker.internal:5000/api/bookings", {
    cache: "no-store",
    mode: "no-cors",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const Home = async () => {
  const bookings = await getBookings();
  return <Bookings bookings={bookings} />;
};

export default Home;
