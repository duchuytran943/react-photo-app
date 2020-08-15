import Banner from "components/Banner";
import PhotoForm from "features/Photo/components/PhotoForm";
import { addPhoto, editPhoto } from "features/Photo/photoSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import "./AddEdit.scss";

AddEditPage.propTypes = {};

function AddEditPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const photos = useSelector((state) => state);
  const { photoId } = useParams();

  const isAddMode = !photoId;

  const editedPhoto = useSelector((state) => {
    const foundPhoto = state.photos.find((x) => x.id === +photoId);
    return foundPhoto;
  });

  let initialValues = {
    title: "",
    categoryId: null,
    photo: "",
  };

  initialValues = isAddMode ? initialValues : editedPhoto;

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
      setTimeout(() => {
        if (isAddMode) {
          const newValue = { ...value, id: getRandomId(photos.photos) };
          const action = addPhoto(newValue);
          dispatch(action);
        } else {
          console.log("edit photo: ", value);
          const action = editPhoto(value);
          dispatch(action);
        }
        history.push("/photos");
        resolve(true);
      }, 2000);
    });
  };

  return (
    <div className="photo-edit">
      <Banner title="Add new photos you like!!!"></Banner>
      <div className="photo-edit__form">
        <PhotoForm
          isAddMode={isAddMode}
          initialValues={initialValues}
          onSubmit={handlePhotoFormSubmit}
        />
      </div>
    </div>
  );
}

export default AddEditPage;
