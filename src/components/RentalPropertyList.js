import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  openPropertyDetails,
  openBookingForm,
  closeBookingForm,
  setProperties,
} from "../redux/actions";
import PropertyDetail from "./PropertyDetail";
import BookingForm from "./BookingForm";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import "../Styles.css";

function RentalPropertyList(props) {
  const [location, setLocation] = useState("Bangalore");

  function handleSelectChange(event) {
    setLocation(event.target.value);
  }

  const {
    openPropertyDetails,
    openBookingForm,
    closeBookingForm,
    properties,
    isBookingFormOpen,
  } = props;

  useEffect(() => {
    const apiUrl = "https://mocki.io/v1/c1b8d087-971c-472f-870c-47185f710c17";

    axios
      .get(apiUrl)
      .then((response) => {
        props.setProperties(response.data.houses);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [props]);

  return (
    <div>
      <div>
        <Navbar style={{ marginRight: "50%", backgroundColor: "#a0c7db" }}>
          <Container>
            <Navbar.Brand href="#home">
              <img
                src="https://www.nestaway.com/_flash_app/immutable/assets/nestawayIcon.ad7b1cdf.svg"
                width="40"
                height="40"
                className="d-inline-block align-top"
                alt="Nestaway"
              />
            </Navbar.Brand>

            <select value={location} onChange={handleSelectChange} style={{backgroundColor: "#000070", padding: "10px", color: 'white'}}>
              <option value="Delhi">Delhi</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Chennai">Chennai</option>
            </select>

            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Container>
        </Navbar>
        <nav
          aria-label="breadcrumb"
          style={{
            backgroundColor: "#a0c7db",
            marginRight: "50%",
            paddingLeft: "40px",
          }}
        >
          <ol className="breadcrumb">
            <li className="breadcrumb-item active">Home</li>
            <li className="breadcrumb-item ">{location}</li>
            <li className="breadcrumb-item " aria-current="page">
              Category
            </li>
            <li className="breadcrumb-item " aria-current="page">
              House Type
            </li>
            <li className="breadcrumb-item " aria-current="page">
              Location
            </li>
          </ol>
          <div>
            <h4>Single Rooms in Kormangla, Bengaluru, Karnatka</h4>
          </div>
        </nav>
      </div>

      <div className="property-grid">
        {properties.map((property, index) => (
          <>
            <div
              class="card"
              style={{ width: "30rem", marginLeft: "5%", marginBottom: "20px", backgroundColor: "#a0c7db" }}
              key={index}
            >
              <img
                src={property.image_url}
                class="card-img-top"
                alt={property.title}
                style={{width:"90%", height: "90%", margin: "20px", border: "5px solid blue"}}
              />
              <div class="card-body">
                <h4 class="card-title">{property.title}</h4>
                <p class="card-text">Location: {property.locality}</p>
                <p class="card-text">Rent: INR {property.rent} per month</p>
                <button
                  type="button"
                  class="btn"
                  onClick={() => openPropertyDetails(property)}
                  style={{  backgroundColor: "#000070" , color: "white"}}
                >
                  View Details
                </button>
                <button
                  type="button"
                  class="btn"
                  onClick={openBookingForm }
                  style={{ marginLeft: "170px", backgroundColor: "#000070", color: "white" }}
                >
                  Book Now
                </button>
                


              </div>
            </div>
          </>
        ))}
      </div>

      {props.isPropertyDetailsOpen && (
        <PropertyDetail property={props.selectedProperty} />
      )}
      {isBookingFormOpen && <BookingForm />}
    </div>
  );
}

const mapStateToProps = (state) => ({
  properties: state.properties,
  selectedProperty: state.propertyDetails,
  isPropertyDetailsOpen: state.isPropertyDetailsOpen,
  isBookingFormOpen: state.isBookingFormOpen,
});

const mapDispatchToProps = {
  openPropertyDetails,
  openBookingForm,
  closeBookingForm,
  setProperties,
};

export default connect(mapStateToProps, mapDispatchToProps)(RentalPropertyList);
