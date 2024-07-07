export interface Booking {
  id: string;
  date: string;
  start_time: string;
  end_time: string;
  service: string;
  doctor_name: string;
}

export interface FormValues {
  service: string;
  doctor_name: string;
  start_time: string;
  end_time: string;
  date: string;
}
