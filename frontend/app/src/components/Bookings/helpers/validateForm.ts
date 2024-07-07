import { FormValues } from "@/types";

export const validateForm = (
  formValues: FormValues,
  setErrors: (values: FormValues) => void
): boolean => {
  const newErrors = {
    service: "",
    doctor_name: "",
    start_time: "",
    end_time: "",
    date: "",
  };
  let isValid = true;

  if (!formValues.service) {
    newErrors.service = "Service is required.";
    isValid = false;
  }
  if (!formValues.doctor_name) {
    newErrors.doctor_name = "Doctor name is required.";
    isValid = false;
  }
  if (!formValues.start_time) {
    newErrors.start_time = "Start time is required.";
    isValid = false;
  }
  if (!formValues.end_time) {
    newErrors.end_time = "End time is required.";
    isValid = false;
  }
  if (!formValues.date) {
    newErrors.date = "Date is required.";
    isValid = false;
  }

  setErrors(newErrors);
  return isValid;
};
