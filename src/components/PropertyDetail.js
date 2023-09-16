import React from "react";
import "../Styles.css";
import { connect } from "react-redux";
import { closePropertyDetails } from "../redux/actions";

function PropertyDetail(props) {
  const { property, closePropertyDetails } = props;

  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <div>
            <button className="close-button" onClick={closePropertyDetails}>
              X
            </button>
          </div>

          <img src={property.image_url} alt={property.title} />
          <h2>{property.title}</h2>
          <p>Description: {property.description.short_description}</p>
          <p>Amenities: {property.bed_available_count}</p>
          <p>Availability: {property.room_available_count}</p>
        </div>
      </div>
    </>
  );
}

const mapDispatchToProps = {
  closePropertyDetails,
};

export default connect(null, mapDispatchToProps)(PropertyDetail);
