export const OPEN_PROPERTY_DETAILS = "OPEN_PROPERTY_DETAILS";
export const CLOSE_PROPERTY_DETAILS = "CLOSE_PROPERTY_DETAILS";
export const OPEN_BOOKING_FORM = "OPEN_BOOKING_FORM";
export const CLOSE_BOOKING_FORM = "CLOSE_BOOKING_FORM";
export const SET_PROPERTIES = "SET_PROPERTIES";
export const SUBMIT_BOOKING = "SUBMIT_BOOKING";

export const openPropertyDetails = (property) => ({
  type: OPEN_PROPERTY_DETAILS,
  payload: property,
});

export const closePropertyDetails = () => ({
  type: CLOSE_PROPERTY_DETAILS,
});

export const openBookingForm = () => ({
  type: OPEN_BOOKING_FORM,
});

export const closeBookingForm = () => ({
  type: CLOSE_BOOKING_FORM,
});

export const setProperties = (properties) => ({
  type: SET_PROPERTIES,
  payload: properties,
});

export const submitBooking = (bookingData) => ({
  type: SUBMIT_BOOKING,
  payload: bookingData,
});
