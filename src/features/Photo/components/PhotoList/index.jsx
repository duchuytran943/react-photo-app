import PropTypes from "prop-types";
import React from "react";
import { Col, Row } from "reactstrap";
import PhotoCard from "../PhotoCard";

PhotoList.propTypes = {
  photos: PropTypes.array,
  onRemoveClick: PropTypes.func,
  onEditClick: PropTypes.func,
};

PhotoList.defaultProps = {
  photos: [],
  onRemoveClick: null,
  onEditClick: null,
};

function PhotoList(props) {
  const { photos, onRemoveClick, onEditClick } = props;

  return (
    <Row>
      {photos.map((photo) => (
        <Col key={photo.id} xs="12" md="6" lg="3">
          <PhotoCard
            photo={photo}
            onRemoveClick={onRemoveClick}
            onEditClick={onEditClick}
          />
        </Col>
      ))}
    </Row>
  );
}

export default PhotoList;
