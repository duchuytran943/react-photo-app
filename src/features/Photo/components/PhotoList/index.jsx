import React from "react";
import PropTypes from "prop-types";
import PhotoCard from "../PhotoCard";
import { Row, Col } from "reactstrap";

PhotoList.propTypes = {
  photos: PropTypes.array,
};

PhotoList.defaultProps = {
  photos: [],
};

function PhotoList(props) {
  const { photos } = props;
  return (
    <Row>
      {photos.map((photo) => (
        <Col key={photo.id} xs="12" md="6" lg="3">
          <PhotoCard photo={photo} />
        </Col>
      ))}
    </Row>
  );
}

export default PhotoList;
