import PropTypes from "prop-types";
import React from "react";
import { Button } from "reactstrap";
import "./RandomPhoto.scss";

RandomPhoto.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  onImageUrlChange: PropTypes.func,
  onRandomButtonBlur: PropTypes.func,
};

RandomPhoto.defaultProps = {
  name: "",
  imageUrl: "",
  onImageUrlChange: null,
  onRandomButtonBlur: null,
};

const getRandomImageUrl = () => {
  const randomId = Math.trunc(Math.random() * 2000);
  return `https://picsum.photos/id/${randomId}/300/300`;
};

function RandomPhoto(props) {
  const { name, imageUrl, onImageUrlChange, onRandomButtonBlur } = props;

  const handleImageUrlChange = () => {
    if (!onImageUrlChange) return;
    const newImageUrl = getRandomImageUrl();
    onImageUrlChange(newImageUrl);
  };

  return (
    <div className="random-photo">
      <div className="random-photo__button">
        <Button
          name={name}
          onClick={handleImageUrlChange}
          onBlur={onRandomButtonBlur}
          outline
          color="primary"
        >
          Random a photo
        </Button>
      </div>
      <div className="random-photo__photo">
        {imageUrl && (
          <img src={imageUrl} alt="Opps... Please click random button again" />
        )}
      </div>
    </div>
  );
}

export default RandomPhoto;
