import Banner from "components/Banner";
import PhotoForm from "features/Photo/components/PhotoForm";
import { addPhoto } from "features/Photo/photoSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./AddEdit.scss";

AddEditPage.propTypes = {};

function AddEditPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const photos = useSelector((state) => state);

  const getRandomId = (photos) => {
    const randomId = Math.trunc(Math.random() * 2000);
    const isRandomIdExist = photos.find((photo) => photo.id === randomId);
    if (isRandomIdExist) {
      getRandomId(photos);
    }
    return randomId;
  };

  const handlePhotoFormSubmit = (value) => {
    return new Promise((resolve) => {
      // console.log("run promise");
      setTimeout(() => {
        // console.log("run timeout");
        const newValue = { ...value, id: getRandomId(photos.photos) };
        const action = addPhoto(newValue);
        dispatch(action);
        history.push("/photos");
        resolve(true);
      }, 2000);
      // console.log("run after timeout");
    });
  };

  return (
    <div className="photo-edit">
      <Banner title="Add new photos you like!!!"></Banner>
      <div className="photo-edit__form">
        <PhotoForm onSubmit={handlePhotoFormSubmit} />
      </div>
    </div>
  );
}

export default AddEditPage;
