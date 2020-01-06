import React from "react";
import { Formik } from "formik";
import RenderBookingForm from "./RenderBookingForm";
import { dateFormat, timeFormat } from "./FieldFormats";
import moment from "moment";

const initialValues = {
  bookingClient: "",
  bookingDate: moment(Date.now()),
  bookingTime: moment(Date.now()),
  selectOptions: ["Mark", "Bob", "Anthony"]
};

const handleSubmit = formProps => {
  const { bookingClient, bookingDate, bookingTime, email } = formProps;
  const selectedDate = moment(bookingDate).format(dateFormat);
  const selectedTime = moment(bookingTime).format(timeFormat);
  alert(
    `Email: ${email} \nSelected Date: ${selectedDate} \nSelected Time: ${selectedTime}\nSelected Client: ${bookingClient}`
  );
};

export default () => (
  <Formik
    initialValues={initialValues}
    onSubmit={handleSubmit}
    render={RenderBookingForm}
  />
);
