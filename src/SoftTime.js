import React from "react";
import moment from "moment";

const SoftTime = () => {
  const format = "hh:mm:ss";
  const time = moment();

  let message = "";

  if (time.isBetween(moment("07:00:00", format), moment("11:00:00", format))) {
    message = "Morning";
  } else if (
    time.isBetween(moment("11:00:00", format), moment("13:00:00", format))
  ) {
    message = "Lunch Time";
  } else if (
    time.isBetween(moment("13:00:00", format), moment("17:00:00", format))
  ) {
    message = "Afternoon";
  } else if (
    time.isBetween(moment("17:00:00", format), moment("19:00:00", format))
  ) {
    message = "Late Afternoon";
  } else if (
    time.isBetween(moment("19:00:00", format), moment("21:00:00", format))
  ) {
    message = "Evening";
  } else {
    message = "Night Time";
  }

  return <div>{message}</div>;
};

export default SoftTime;
