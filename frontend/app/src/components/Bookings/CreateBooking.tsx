"use client";
import { FormValues } from "@/types";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { validateForm } from "./helpers/validateForm";

const createBooking = async (formValues: FormValues): Promise<boolean> => {
  const res = await fetch(`http://host.docker.internal:5000/api/bookings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formValues),
    cache: "no-store",
    mode: "cors",
  });

  return res.ok;
};

const CreateBooking = () => {
  const router = useRouter();
  const [formValues, setFormValues] = useState({
    service: "",
    doctor_name: "",
    start_time: "",
    end_time: "",
    date: "",
  });

  const [errors, setErrors] = useState({
    service: "",
    doctor_name: "",
    start_time: "",
    end_time: "",
    date: "",
  });

  const handleFormChange = (value: string, formKey: string) => {
    setFormValues((prevState) => ({
      ...prevState,
      [formKey]: value,
    }));

    setErrors((prevState) => ({
      ...prevState,
      [formKey]: "",
    }));
  };

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (validateForm(formValues, setErrors)) {
      const success = await createBooking(formValues);
      if (!success) {
        alert("Failed to create booking");
      } else {
        router.push("/");
        router.refresh();
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6">New Booking</h2>
        <form className="space-y-6" onSubmit={onSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Service
            </label>
            <input
              type="text"
              onChange={(e) => handleFormChange(e.target.value, "service")}
              placeholder="Service Name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            {errors.service && (
              <p className="text-red-500 text-xs mt-1">{errors.service}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Doctor
            </label>
            <input
              type="text"
              onChange={(e) => handleFormChange(e.target.value, "doctor_name")}
              placeholder="Doctor Name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            {errors.doctor_name && (
              <p className="text-red-500 text-xs mt-1">{errors.doctor_name}</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Start time
              </label>
              <input
                type="time"
                onFocus={(e) => e.target.showPicker && e.target.showPicker()}
                onChange={(e) => handleFormChange(e.target.value, "start_time")}
                placeholder="Select start time"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              {errors.start_time && (
                <p className="text-red-500 text-xs mt-1">{errors.start_time}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                End time
              </label>
              <input
                type="time"
                onFocus={(e) => e.target.showPicker && e.target.showPicker()}
                onChange={(e) => handleFormChange(e.target.value, "end_time")}
                placeholder="Select end time"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              {errors.end_time && (
                <p className="text-red-500 text-xs mt-1">{errors.end_time}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Date
            </label>
            <input
              type="date"
              onFocus={(e) => e.target.showPicker && e.target.showPicker()}
              onChange={(e) => handleFormChange(e.target.value, "date")}
              placeholder="Select a date"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            {errors.date && (
              <p className="text-red-500 text-xs mt-1">{errors.date}</p>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default CreateBooking;
