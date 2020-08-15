import Banner from "components/Banner";
import Images from "constants/images";
import PhotoList from "features/Photo/components/PhotoList";
import { removePhoto } from "features/Photo/photoSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Container } from "reactstrap";

MainPage.propTypes = {};

function MainPage(props) {
  const history = useHistory();
  const photos = useSelector((state) => state.photos);
  console.log("photos", photos);
  const dispatch = useDispatch();

  const handleRemoveClick = (photo) => {
    console.log("remove", photo);
    const action = removePhoto(photo.id);
    dispatch(action);
  };

  const handleEditClick = (photo) => {
    console.log("edit", photo);
    history.push(`/photos/${photo.id}`);
  };

  return (
    <div className="photo-main">
      <Banner
        title="Your awesome photos"
        backgroundUrl={Images.COLORFUL_BG}
      ></Banner>
      <Container className="text-center">
        <div className="py-5">
          <Link to="/photos/add">Add new photo</Link>
        </div>
        <PhotoList
          photos={photos}
          onRemoveClick={handleRemoveClick}
          onEditClick={handleEditClick}
        ></PhotoList>
      </Container>
    </div>
  );
}

export default MainPage;
