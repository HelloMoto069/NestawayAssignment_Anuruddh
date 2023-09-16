import React, { useState } from "react";
import { connect } from "react-redux";
import { closeBookingForm, submitBooking } from "../redux/actions";

function BookingForm({ closeBookingForm, submitBooking }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkInDate: "",
    checkOutDate: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const validationErrors = {};

    if (!formData.name.trim()) {
      validationErrors.name = "Name is required";
    }

    if (!formData.email.trim() || !isValidEmail(formData.email)) {
      validationErrors.email = "Valid email is required";
    }

    if (!formData.phone.trim()) {
      validationErrors.phone = "Phone number is required";
    }

    if (!formData.checkInDate.trim()) {
      validationErrors.checkInDate = "Check-In Date is required";
    }

    if (!formData.checkOutDate.trim()) {
      validationErrors.checkOutDate = "Check-Out Date is required";
    }

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // No validation errors, proceed with booking logic
      submitBooking(formData);

      // Display confirmation message and clear the form
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        checkInDate: "",
        checkOutDate: "",
      });
    }
  };
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={closeBookingForm}>
          X
        </button>
        {isSubmitted ? (
          <div className="confirmation-message">
            <h2>Booking Confirmed</h2>
            <p>Your booking has been confirmed for . Thank you!</p>
          </div>
        ) : (
          <>
            <h2>Booking Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                {errors.name && <div className="error">{errors.name}</div>}
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                {errors.email && <div className="error">{errors.email}</div>}
              </div>
              <div className="form-group">
                <label>Phone:</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
                {errors.phone && <div className="error">{errors.phone}</div>}
              </div>
              <div className="form-group">
                <label>Check-In Date:</label>
                <input
                  type="date"
                  name="checkInDate"
                  value={formData.checkInDate}
                  onChange={handleInputChange}
                  required
                />
                {errors.checkInDate && (
                  <div className="error">{errors.checkInDate}</div>
                )}
              </div>
              <div className="form-group">
                <label>Check-Out Date:</label>
                <input
                  type="date"
                  name="checkOutDate"
                  value={formData.checkOutDate}
                  onChange={handleInputChange}
                  required
                />
                {errors.checkOutDate && (
                  <div className="error">{errors.checkOutDate}</div>
                )}
              </div>
              <button class="btn btn-success" type="submit">Book Now</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  closeBookingForm,
  submitBooking,
};

export default connect(null, mapDispatchToProps)(BookingForm);
