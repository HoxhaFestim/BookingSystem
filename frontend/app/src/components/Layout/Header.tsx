import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center w-full justify-between">
            <Link href={"/"}>
              <span className="ml-2 text-xl font-bold">Booking System</span>
            </Link>
            <div className="ml-10 flex space-x-4 ">
              <Link
                href={"/"}
                className="text-gray-900 hover:text-gray-700 text-sm font-medium"
              >
                Bookings
              </Link>
              <Link
                href={"/create-booking"}
                className="text-gray-900 hover:text-gray-700 text-sm font-medium"
              >
                Create a Booking
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
