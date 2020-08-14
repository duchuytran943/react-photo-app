import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import "./PhotoCard.scss";

PhotoCard.propTypes = {
  photo: PropTypes.object,
  onRemoveClick: PropTypes.func,
  onEditClick: PropTypes.func,
};

PhotoCard.defaultProps = {
  photo: {},
  onRemoveClick: null,
  onEditClick: null,
};

function PhotoCard(props) {
  const { photo, onRemoveClick, onEditClick } = props;

  const handleEditButtonClick = (photo) => {
    console.log("edit", photo);
  };

  const handleRemoveButtonClick = (photo) => {
    console.log("remove", photo);
  };

  return (
    <div className="photo">
      <img src={photo.photo} alt={photo.title} />
      <div className="photo__overlay">
        <h2 className="photo__title">{photo.title}</h2>
        <div className="photo__actions">
          <div>
            <Button
              outline
              size="sm"
              color="info"
              onClick={() => handleEditButtonClick(photo)}
            >
              Edit
            </Button>
          </div>
          <div>
            <Button
              outline
              size="sm"
              color="danger"
              onClick={() => handleRemoveButtonClick(photo)}
            >
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoCard;
