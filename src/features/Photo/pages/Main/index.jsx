import Banner from "components/Banner";
import Images from "constants/images";
import PhotoList from "features/Photo/components/PhotoList";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";

MainPage.propTypes = {};

function MainPage(props) {
  const photos = useSelector((state) => state.photos);
  console.log("photos", photos);
  return (
    <div className="photo-main">
      <Banner
        title="Your awsome photos"
        backgroundUrl={Images.COLORFUL_BG}
      ></Banner>
      <Container className="text-center">
        <div className="py-5">
          <Link to="/photos/add">Add new photo</Link>
        </div>
        <PhotoList photos={photos}></PhotoList>
      </Container>
    </div>
  );
}

export default MainPage;
