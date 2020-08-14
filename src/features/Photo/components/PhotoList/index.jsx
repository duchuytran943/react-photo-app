import React from "react";
import PropTypes from "prop-types";
import PhotoCard from "../PhotoCard";
import { Row, Col } from "reactstrap";
import { useDispatch } from "react-redux";
import { removePhoto } from "features/Photo/photoSlice";

PhotoList.propTypes = {
  photos: PropTypes.array,
};

PhotoList.defaultProps = {
  photos: [],
};

function PhotoList(props) {
  const { photos } = props;
  const dispatch = useDispatch();

  const handleRemoveClick = (photo) => {
    console.log("remove", photo);
    const action = removePhoto(photo.id);
    dispatch(action);
  };

  const handleEditClick = (photo) => {
    console.log("edit", photo);
  };

  return (
    <Row>
      {photos.map((photo) => (
        <Col key={photo.id} xs="12" md="6" lg="3">
          <PhotoCard
            photo={photo}
            onRemoveClick={handleRemoveClick}
            onEditClick={handleEditClick}
          />
        </Col>
      ))}
    </Row>
  );
}

export default PhotoList;
