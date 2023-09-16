// reducers.js
import {
  OPEN_PROPERTY_DETAILS,
  CLOSE_PROPERTY_DETAILS,
  OPEN_BOOKING_FORM,
  CLOSE_BOOKING_FORM,
  SET_PROPERTIES,
  SUBMIT_BOOKING,
} from './actions';

const initialState = {
  properties: [], // Initial empty array
  propertyDetails: null,
  isPropertyDetailsOpen: false,
  isBookingFormOpen: false,
  // ... Other state properties
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_PROPERTY_DETAILS:
      return {
        ...state,
        propertyDetails: action.payload,
        isPropertyDetailsOpen: true,
      };
    case CLOSE_PROPERTY_DETAILS:
      return {
        ...state,
        propertyDetails: null,
        isPropertyDetailsOpen: false,
      };
    case OPEN_BOOKING_FORM:
      return {
        ...state,
        isBookingFormOpen: true,
      };
    case CLOSE_BOOKING_FORM:
      return {
        ...state,
        isBookingFormOpen: false,
      };
    case SET_PROPERTIES:
      return {
        ...state,
        properties: action.payload,
      };
    case SUBMIT_BOOKING:
      // Handle booking submission logic here
      // You can update state with booking details
      return state;
    default:
      return state;
  }
};

export default rootReducer;
