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
    console.log(name, value);
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
              <div
                class="form-floating"
                style={{
                  marginTop: "10px",
                }}
              >
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  id="floatingInputGrid"
                  placeholder="Enter Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <label for="floatingInputGrid">Name:</label>
                {errors.name && <div className="error">{errors.name}</div>}
              </div>
              <div class="form-floating" style={{
                  marginTop: "10px",
                }}>
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  id="floatingInputGrid"
                  placeholder="Enter Your Mail"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <label for="floatingInputGrid">E Mail:</label>
                {errors.email && <div className="error">{errors.email}</div>}
              </div>
              <div class="form-floating" style={{
                  marginTop: "10px",
                }}>
                <input
                  type="tel"
                  name="phone"
                  class="form-control"
                  id="floatingInputGrid"
                  placeholder="Enter Your Phone No."
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
                <label for="floatingInputGrid">Phone No.:</label>
                {errors.phone && <div className="error">{errors.phone}</div>}
              </div>
              <div class="form-floating" style={{
                  marginTop: "10px",
                }}>
                <input
                  type="date"
                  name="checkInDate"
                  class="form-control"
                  id="floatingInputGrid"
                  placeholder="Check In Date:"
                  value={formData.checkInDate}
                  onChange={handleInputChange}
                  required
                />
                <label for="floatingInputGrid">Check In date:</label>
                {errors.checkInDate && (
                  <div className="error">{errors.checkInDate}</div>
                )}
              </div>
              <div class="form-floating" style={{
                  marginTop: "10px",
                }}>
                <input
                  type="date"
                  name="checkOutDate"
                  class="form-control"
                  id="floatingInputGrid"
                  placeholder="Check Out Date:"
                  value={formData.checkOutDate}
                  onChange={handleInputChange}
                  required
                />
                <label for="floatingInputGrid">Check Out date:</label>
                {errors.checkOutDate && (
                  <div className="error">{errors.checkOutDate}</div>
                )}
              </div>

              <button class="btn btn-success" type="submit" style={{
                  marginTop: "17px",
                }}>
                Book Now
              </button>
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
