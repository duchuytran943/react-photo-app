import React from "react";
import PropTypes from "prop-types";
import Banner from "../../../../components/Banner";
import PhotoForm from "../../components/PhotoForm";
import { Container } from "reactstrap";
import "./AddEdit.scss";

AddEditPage.propTypes = {};

function AddEditPage(props) {
  return (
    <div className="photo-edit">
      <Banner title="Add new photos you like!!!"></Banner>
      <div className="photo-edit__form">
        <PhotoForm
          onSubmit={(values) => console.log("Form submit: ", values)}
        />
      </div>
    </div>
  );
}

export default AddEditPage;
